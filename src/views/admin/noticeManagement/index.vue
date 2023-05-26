<script setup lang="ts">
import {
  ref,
  reactive,
  ComputedRef,
  computed,
  onMounted,
  watchEffect
} from "vue";
import { Info, useNotice } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import type { FormInstance } from "element-plus";
import { message } from "@/utils/message";

import Delete from "@iconify-icons/ep/delete";
import Refresh from "@iconify-icons/ep/refresh";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "NoticeManagement"
});

const formRef = ref();
const {
  loading,
  loadingConfig,
  columns,
  dataList,
  pagination,
  onSearch,
  handleDelete,
  handleSizeChange,
  handleCurrentChange
} = useNotice();

const form = reactive({
  title: ""
});

const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};

const dialog = ref(false);

const addForm = reactive({
  title: "",
  description: "",
  datetime: "",
  link: ""
});
const ruleFormRef = ref<FormInstance>();
const formRules = reactive({
  title: [
    {
      required: true,
      message: "请输入标题",
      trigger: "blur"
    }
  ],
  datetime: [
    {
      required: true,
      message: "请输入发布时间",
      trigger: "blur"
    }
  ],
  link: [
    {
      required: true,
      message: "请输入跳转链接",
      trigger: "blur"
    }
  ]
});

/** 过滤列表 */
const filterList: ComputedRef<Info[]> = computed(() => {
  if (dataList.value)
    return dataList.value.filter(item => {
      if (item.title)
        return item.title.toString().toLowerCase().includes(form.title);
      else return false;
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

/** 新增通知 */
const addNotice = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      dataList.value.push({
        id: Math.max(...dataList.value.map(item => item.id)) + 1,
        title: addForm.title,
        description: addForm.description,
        datetime: addForm.datetime,
        link: addForm.link
      });
      beforeClose();
      message("新增成功", {
        grouping: true,
        type: "success"
      });
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
      <el-form-item label="标题：" prop="title">
        <el-input
          v-model="form.title"
          placeholder="请输入标题"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item>
        <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
          重置
        </el-button>
      </el-form-item>
    </el-form>

    <PureTableBar title="公告列表" @refresh="onSearch" class="overflow-hidden">
      <template #buttons>
        <el-button
          type="primary"
          :icon="useRenderIcon(AddFill)"
          @click="dialog = true"
        >
          新增公告
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
              type="danger"
              :size="size"
              :icon="useRenderIcon(EditPen)"
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
      title="新增公告"
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
        <el-form-item label="标题" prop="title">
          <el-input v-model="addForm.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input
            v-model="addForm.description"
            type="textarea"
            placeholder="请输入描述"
          />
        </el-form-item>
        <el-form-item label="发布时间" prop="datetime">
          <el-date-picker
            style="width: 100%"
            v-model="addForm.datetime"
            value-format="YYYY-MM-DD"
            type="date"
            placeholder="请选择发布时间"
          />
        </el-form-item>
        <el-form-item label="跳转链接" prop="link">
          <el-input v-model="addForm.link" placeholder="请输入跳转链接" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="addNotice(ruleFormRef)">
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
