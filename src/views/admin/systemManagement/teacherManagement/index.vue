<script setup lang="ts">
import {
  ref,
  reactive,
  ComputedRef,
  computed,
  onMounted,
  watchEffect
} from "vue";
import { Info, useTeacher } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { classList } from "@/api/admin/system";
import type { FormInstance } from "element-plus";
import { message } from "@/utils/message";

import Delete from "@iconify-icons/ep/delete";
import EditPen from "@iconify-icons/ep/edit-pen";
import Refresh from "@iconify-icons/ep/refresh";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "TeacherManagement"
});

const formRef = ref();
const {
  loading,
  loadingConfig,
  columns,
  dataList,
  pagination,
  onSearch,
  handleUpdate,
  handleDelete,
  handleSizeChange,
  handleCurrentChange
} = useTeacher();

const form = reactive({
  username: "",
  userNo: "",
  status: null
});

const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};

const dialog = ref(false);

const addForm = reactive({
  college: null,
  username: "",
  userNo: "",
  gender: "",
  jobTitle: "",
  phone: "",
  email: ""
});
const ruleFormRef = ref<FormInstance>();
const formRules = reactive({
  college: [
    {
      required: true,
      message: "请选择学院",
      trigger: "change"
    }
  ],
  username: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur"
    }
  ],
  userNo: [
    {
      required: true,
      message: "请输入工号",
      trigger: "blur"
    }
  ],
  gender: [
    {
      required: true,
      message: "请选择性别",
      trigger: "change"
    }
  ],
  jobTitle: [
    {
      required: true,
      message: "请输入职称",
      trigger: "blur"
    }
  ],
  phone: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur"
    }
  ],
  email: [
    {
      required: true,
      message: "请输入电子邮箱",
      trigger: "blur"
    }
  ]
});

const collegeList = ref([]);

onMounted(() => {
  classList({ type: 1 }).then(res => {
    if (res.success) {
      collegeList.value = res.data;
    }
  });
});

/** 过滤列表 */
const filterList: ComputedRef<Info[]> = computed(() => {
  if (dataList.value)
    return dataList.value
      .filter(item => {
        if (item.username)
          return item.username.toString().toLowerCase().includes(form.username);
        else return false;
      })
      .filter(item => {
        if (item.userNo)
          return item.userNo.toString().toLowerCase().includes(form.userNo);
        else return false;
      })
      .filter(item => {
        if (form.status === 0 || form.status === 1)
          return item.status === form.status;
        else return true;
      });
  else return [];
});

// 添加一个观察器，监视 filteredList 属性的变化
watchEffect(() => {
  pagination.total = filterList.value.length;
});

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

/** 新增教师 */
const addTeacher = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      if (dataList.value.map(item => item.userNo).includes(addForm.userNo))
        return message("新增失败，该教师已存在", {
          grouping: true,
          type: "error"
        });
      else {
        const i = collegeList.value.map(a => a.id).indexOf(addForm.college);
        dataList.value.push({
          id: Math.max(...dataList.value.map(item => item.id)) + 1,
          username: addForm.username,
          userNo: addForm.userNo,
          gender: addForm.gender,
          college: collegeList.value[i].name,
          jobTitle: addForm.jobTitle,
          phone: addForm.phone,
          email: addForm.email,
          status: 1,
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
    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="bg-bg_color w-[99/100] pl-8 pt-4"
    >
      <el-form-item label="姓名：" prop="username">
        <el-input
          v-model="form.username"
          placeholder="请输入姓名"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="职工号：" prop="userNo">
        <el-input
          v-model="form.userNo"
          placeholder="请输入职工号"
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
          <el-option label="启用" :value="1" />
          <el-option label="禁用" :value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
          重置
        </el-button>
      </el-form-item>
    </el-form>

    <PureTableBar title="教师列表" @refresh="onSearch" class="overflow-hidden">
      <template #buttons>
        <el-button
          type="primary"
          :icon="useRenderIcon(AddFill)"
          @click="dialog = true"
        >
          新增教师
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
          :height="size === 'small' ? 360 : 500"
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
              type="primary"
              :size="size"
              :icon="useRenderIcon(EditPen)"
              @click="handleUpdate(row)"
            >
              修改
            </el-button>
            <el-popconfirm title="是否确认删除?" @confirm="handleDelete(row)">
              <template #reference>
                <el-button
                  class="reset-margin"
                  link
                  type="danger"
                  :size="size"
                  :icon="useRenderIcon(Delete)"
                >
                  删除
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </pure-table>
      </template>
    </PureTableBar>

    <el-dialog
      v-model="dialog"
      title="新增教师"
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
        <el-form-item label="学院" prop="college">
          <el-select
            v-model="addForm.college"
            placeholder="请选择学院"
            class="w-full"
          >
            <el-option
              v-for="item in collegeList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="姓名" prop="username">
          <el-input v-model="addForm.username" />
        </el-form-item>
        <el-form-item label="工号" prop="userNo">
          <el-input v-model="addForm.userNo" />
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="addForm.gender">
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="职称" prop="jobTitle">
          <el-input v-model="addForm.jobTitle" />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="addForm.phone" />
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="addForm.email" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="addTeacher(ruleFormRef)">
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
