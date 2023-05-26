<script setup lang="ts">
import { ref, reactive, ComputedRef, computed, watchEffect } from "vue";
import { Info, useModify } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import type { FormInstance } from "element-plus";
import { message } from "@/utils/message";

import Delete from "@iconify-icons/ep/delete";
import Refresh from "@iconify-icons/ep/refresh";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "ModifyTheTopic"
});

const formRef = ref();
const {
  topicInfo,
  topicLoading,
  topicColumns,
  dataList,
  loading,
  loadingConfig,
  columns,
  statusList,
  pagination,
  onSearchDataList,
  onSearchTopicInfo,
  handleDelete,
  handleSizeChange,
  handleCurrentChange
} = useModify();

const form = reactive({
  oldTitle: "",
  newTitle: "",
  teacher: "",
  status: null
});

const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};

const dialog = ref(false);

const addForm = reactive({
  oldTitle: "",
  teacher: "",
  newTitle: ""
});
const ruleFormRef = ref<FormInstance>();
const formRules = reactive({
  oldTitle: [
    {
      required: true,
      message: "请选择原课题名称",
      trigger: "change"
    }
  ],
  newTitle: [
    {
      required: true,
      message: "请输入新课名称",
      trigger: "blur"
    }
  ]
});

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
        if (item.newTitle)
          return item.newTitle.toString().toLowerCase().includes(form.newTitle);
        else return false;
      })
      .filter(item => {
        if (item.teacher)
          return item.teacher.toString().toLowerCase().includes(form.teacher);
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

/** 监听 addForm.oldTitle 属性的变化 */
watchEffect(() => {
  if (addForm.oldTitle) {
    for (let i = 0; i < topicInfo.value.length; i) {
      if (addForm.oldTitle === topicInfo.value[i].title) {
        addForm.teacher = topicInfo.value[i].teacher;
        break;
      }
    }
  }
});

/** 打开对话框 */
function openDialog() {
  let count = 0;
  for (let i = 0; i < dataList.value.length; i++) {
    if (dataList.value[i].status === 0) count++;
  }
  if (count >= 1)
    return message("新增失败，当前修改申请数量已达上限", {
      type: "error",
      grouping: true
    });
  else if (!topicInfo.value || topicInfo.value.length === 0)
    return message("新增失败，当前暂无已选课题", {
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

/** 新增修改申请 */
const addModify = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      if (dataList.value.map(item => item.oldTitle).includes(addForm.oldTitle))
        return message("新增失败，已存在该课题的修改申请", {
          type: "error",
          grouping: true
        });
      else {
        let id = Math.max(...dataList.value.map(item => item.id));
        if (!(id > 0)) id = 0;
        dataList.value.push({
          id: id + 1,
          oldTitle: addForm.oldTitle,
          newTitle: addForm.newTitle,
          teacher: addForm.teacher,
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
</script>

<template>
  <div class="main">
    <PureTableBar
      title="已选课题"
      @refresh="onSearchTopicInfo"
      class="overflow-hidden"
    >
      <template v-slot="{ size, checkList }">
        <pure-table
          border
          align-whole="center"
          showOverflowTooltip
          :loading="topicLoading"
          :size="size"
          :data="topicInfo"
          :columns="topicColumns"
          :checkList="checkList"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
        />
      </template>
    </PureTableBar>

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
      <el-form-item label="新课题名称：" prop="newTitle">
        <el-input
          v-model="form.newTitle"
          placeholder="请输入新课题名称"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="指导教师：" prop="teacher">
        <el-input
          v-model="form.teacher"
          placeholder="请输入指导教师姓名"
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
      title="题目修改申请"
      @refresh="onSearchDataList"
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
          <el-select
            v-model="addForm.oldTitle"
            placeholder="请选择原课题名称"
            class="w-full"
          >
            <el-option
              v-for="(item, index) in topicInfo.map(item => item.title)"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="指导教师" prop="teacher">
          <el-input v-model="addForm.teacher" readonly />
        </el-form-item>
        <el-form-item label="新课题名称" prop="newTitle">
          <el-input v-model="addForm.newTitle" placeholder="请输入新课题名称" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="addModify(ruleFormRef)">
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
