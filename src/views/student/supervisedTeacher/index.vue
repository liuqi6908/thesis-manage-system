<script setup lang="ts">
import {
  ref,
  reactive,
  ComputedRef,
  computed,
  watchEffect,
  onMounted
} from "vue";
import { Info, useTeacher } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import type { FormInstance } from "element-plus";
import { message } from "@/utils/message";
import { $t, transformI18n } from "@/plugins/i18n";
import { topicSelect } from "@/api/student/topic";
import { teacherList } from "@/api/admin/system";

import Delete from "@iconify-icons/ep/delete";
import Refresh from "@iconify-icons/ep/refresh";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "SupervisedTeacher"
});

const formRef = ref();
const {
  teacher,
  dataList,
  loading,
  loadingConfig,
  columns,
  statusList,
  pagination,
  onSearch,
  handleDelete,
  handleSizeChange,
  handleCurrentChange
} = useTeacher();

const form = reactive({
  oldTitle: "",
  oldTeacher: "",
  newTeacher: "",
  status: null
});

const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};

const dialog = ref(false);

const addForm = reactive({
  oldTitle: "",
  oldTeacher: "",
  newTeacher: ""
});
const ruleFormRef = ref<FormInstance>();
const formRules = reactive({
  newTeacher: [
    {
      required: true,
      message: "请选择新指导教师",
      trigger: "change"
    }
  ]
});

const teacherArr = reactive([]);

/** 过滤列表 */
const filterList: ComputedRef<Info[]> = computed(() => {
  if (dataList.value)
    return dataList.value
      .filter(item => {
        if (item.oldTitle)
          return item.oldTitle.toString().toLowerCase().includes(form.oldTitle);
        else return false;
      })
      .filter(item => {
        if (item.oldTeacher)
          return item.oldTeacher
            .toString()
            .toLowerCase()
            .includes(form.oldTeacher);
        else return false;
      })
      .filter(item => {
        if (item.newTeacher)
          return item.newTeacher
            .toString()
            .toLowerCase()
            .includes(form.newTeacher);
        else return false;
      })
      .filter(item => {
        if ([0, 1, 2].includes(form.status)) return item.status === form.status;
        else return true;
      });
  else return [];
});

/** 添加一个观察器，监视 filteredList 属性的变化 */
watchEffect(() => {
  pagination.total = filterList.value.length;
});

/** 打开对话框 */
async function openDialog() {
  let count = 0;
  for (let i = 0; i < dataList.value.length; i++) {
    if (dataList.value[i].status === 0) count++;
  }
  if (count >= 1)
    return message("新增失败，当前申请数量已达上限", {
      type: "error",
      grouping: true
    });
  else if (!teacher.value || teacher.value.length === 0)
    return message("新增失败，当前暂无指导教师", {
      type: "error",
      grouping: true
    });
  for (let i = 0; i < teacher.value.length; i++) {
    if (teacher.value[i].label === "姓名")
      addForm.oldTeacher = teacher.value[i].field;
  }
  if (!addForm.oldTeacher)
    return message("新增失败，未找到原指导教师", {
      type: "error",
      grouping: true
    });
  await topicSelect({ status: 4 }).then(res => {
    if (res.success) {
      for (let i = 0; i < res.data.length; i++) {
        console.log(res.data[i]);
        if (res.data[i].teacher === addForm.oldTeacher) {
          addForm.oldTitle = res.data[i].title;
          break;
        }
      }
    }
  });
  if (!addForm.oldTitle)
    return message("新增失败，未找到原课题名称", {
      type: "error",
      grouping: true
    });
  dialog.value = true;
}

/** 对话框关闭前的回调 */
function beforeClose(done?) {
  resetAddForm(ruleFormRef.value);
  if (done) done();
  else dialog.value = false;
}

const resetAddForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};

/** 新增更换申请 */
const addApply = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      if (
        dataList.value.map(item => item.oldTeacher).includes(addForm.oldTeacher)
      )
        return message("新增失败，已存在该指导教师的更换申请", {
          type: "error",
          grouping: true
        });
      else {
        let id = Math.max(...dataList.value.map(item => item.id));
        if (!(id > 0)) id = 0;
        dataList.value.push({
          id: id + 1,
          oldTitle: addForm.oldTitle,
          oldTeacher: addForm.oldTeacher,
          newTeacher: addForm.newTeacher,
          status: 0,
          createTime: new Date().getTime()
        });
        beforeClose();
        message("新增成功", {
          grouping: true,
          type: "success"
        });
      }
    }
  });
};

onMounted(() => {
  teacherList().then(res => {
    if (res.success) {
      if (res.data && res.data.length > 0) {
        res.data.forEach(item => {
          teacherArr.push({
            username: item.username,
            userNo: item.userNo
          });
        });
      }
    } else {
      message(res.message, {
        type: "error"
      });
    }
  });
});
</script>

<template>
  <div class="main">
    <el-card class="box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span class="font-bold">指导教师</span>
        </div>
      </template>
      <el-descriptions border v-if="teacher && teacher.length > 0">
        <el-descriptions-item
          :label="item.label"
          label-align="left"
          align="left"
          v-for="(item, index) in teacher"
          :key="index"
        >
          <span style="color: var(--el-color-primary)">{{ item.field }}</span>
        </el-descriptions-item>
      </el-descriptions>
      <el-empty v-else :description="transformI18n($t('status.noData'))" />
    </el-card>

    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="bg-bg_color w-[99/100] pl-8 pt-4 mt-6"
    >
      <el-form-item label="原课题名称：" prop="oldTitle">
        <el-input
          v-model="form.oldTitle"
          placeholder="请输入原课题名称"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="原指导教师：" prop="oldTeacher">
        <el-input
          v-model="form.oldTeacher"
          placeholder="请输入原指导教师姓名"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="新指导教师：" prop="newTeacher">
        <el-input
          v-model="form.newTeacher"
          placeholder="请输入新指导教师姓名"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="状态：" prop="status">
        <el-select
          v-model="form.status"
          placeholder="请选择状态"
          clearable
          class="!w-[180px]"
        >
          <el-option
            v-for="(item, index) in statusList"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
          重置
        </el-button>
      </el-form-item>
    </el-form>

    <PureTableBar
      title="更换指导教师申请"
      @refresh="onSearch"
      class="overflow-hidden"
    >
      <template #buttons>
        <el-button
          type="primary"
          :icon="useRenderIcon(AddFill)"
          @click="openDialog"
        >
          新增申请
        </el-button>
      </template>
      <template v-slot="{ size, checkList }">
        <pure-table
          border
          align-whole="center"
          showOverflowTooltip
          :loading="loading"
          :loading-config="loadingConfig"
          :size="size"
          :height="size === 'small' ? 130 : 160"
          :data="
            filterList.slice(
              (pagination.currentPage - 1) * pagination.pageSize,
              pagination.currentPage * pagination.pageSize
            )
          "
          :columns="columns"
          :checkList="checkList"
          :pagination="pagination"
          :paginationSmall="size === 'small' ? true : false"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
          @page-size-change="handleSizeChange"
          @page-current-change="handleCurrentChange"
        >
          <template #operation="{ row }">
            <el-button
              class="reset-margin"
              link
              type="danger"
              :size="size"
              :icon="useRenderIcon(Delete)"
              :disabled="row.status === 2"
              @click="handleDelete(row)"
            >
              删除
            </el-button>
          </template>
        </pure-table>
      </template>
    </PureTableBar>

    <el-dialog
      v-model="dialog"
      title="新增申请"
      width="500px"
      :destroy-on-close="true"
      :before-close="beforeClose"
    >
      <el-form
        ref="ruleFormRef"
        :model="addForm"
        :rules="formRules"
        label-width="100px"
        status-icon
      >
        <el-form-item label="原课题名称" prop="oldTitle">
          <el-input v-model="addForm.oldTitle" readonly />
        </el-form-item>
        <el-form-item label="原指导教师" prop="oldTeacher">
          <el-input v-model="addForm.oldTeacher" readonly />
        </el-form-item>
        <el-form-item label="新指导教师" prop="newTeacher">
          <el-select
            v-model="addForm.newTeacher"
            placeholder="请选择新指导教师"
            class="w-full"
            filterable
          >
            <el-option
              v-for="(item, index) in teacherArr"
              :key="index"
              :label="`${item.username} ${item.userNo}`"
              :value="item.username"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="addApply(ruleFormRef)">
          添加
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}
</style>
