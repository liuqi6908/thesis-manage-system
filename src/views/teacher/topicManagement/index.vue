<script setup lang="ts">
import { ref, reactive, ComputedRef, computed, watchEffect } from "vue";
import { Info, useTopic } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import type { FormInstance } from "element-plus";
import { message } from "@/utils/message";

import Delete from "@iconify-icons/ep/delete";
import Refresh from "@iconify-icons/ep/refresh";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "TopicManagement"
});

const formRef = ref();
const {
  loading,
  loadingConfig,
  columns,
  dataList,
  typeList,
  statusList,
  pagination,
  onSearch,
  handleDelete,
  handleSizeChange,
  handleCurrentChange
} = useTopic();

const form = reactive({
  title: "",
  type: null,
  status: null
});

const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};

const dialog = ref(false);

const addForm = reactive({
  title: "",
  type: null,
  introduce: ""
});
const ruleFormRef = ref<FormInstance>();
const formRules = reactive({
  title: [
    {
      required: true,
      message: "请输入课题名称",
      trigger: "blur"
    }
  ],
  type: [
    {
      required: true,
      message: "请选择课题类型",
      trigger: "change"
    }
  ],
  introduce: [
    {
      required: true,
      message: "请输入课题简介",
      trigger: "blur"
    }
  ]
});

/** 过滤列表 */
const filterList: ComputedRef<Info[]> = computed(() => {
  if (dataList.value)
    return dataList.value
      .filter(item => {
        if (item.title)
          return item.title.toString().toLowerCase().includes(form.title);
        else return false;
      })
      .filter(item => {
        if ([0, 1, 2, 3].includes(form.type)) return item.type === form.type;
        else return true;
      })
      .filter(item => {
        if ([0, 1, 2].includes(form.status)) return item.status === form.status;
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

/** 新增课题 */
const addTopic = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      if (dataList.value.map(item => item.title).includes(addForm.title))
        return message("新增失败，该课题已存在", {
          grouping: true,
          type: "error"
        });
      else {
        setTimeout(() => {
          dataList.value.push({
            id: Math.max(...dataList.value.map(item => item.id)) + 1,
            title: addForm.title,
            type: addForm.type,
            introduce: addForm.introduce,
            total: 1,
            status: 0,
            student: "",
            createTime: new Date().getTime()
          });
          beforeClose();
          message("新增成功", {
            grouping: true,
            type: "success"
          });
        }, 600);
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
      <el-form-item label="课题名称：" prop="title">
        <el-input
          v-model="form.title"
          placeholder="请输入课题名称"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="课题类型：" prop="type">
        <el-select
          v-model="form.type"
          placeholder="请选择课题类型"
          clearable
          class="!w-[180px]"
        >
          <el-option
            v-for="(item, index) in typeList"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="课题状态：" prop="status">
        <el-select
          v-model="form.status"
          placeholder="请选择课题状态"
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

    <PureTableBar title="课题列表" @refresh="onSearch" class="overflow-hidden">
      <template #buttons>
        <el-button
          type="primary"
          :icon="useRenderIcon(AddFill)"
          @click="dialog = true"
        >
          新增课题
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
              :icon="useRenderIcon(Delete)"
              :disabled="Boolean(row.student)"
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
      title="新增课题"
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
        <el-form-item label="课题名称" prop="title">
          <el-input v-model="addForm.title" placeholder="请输入课题名称" />
        </el-form-item>
        <el-form-item label="课题类型" prop="type">
          <el-select
            v-model="addForm.type"
            placeholder="请选择课题类型"
            class="w-full"
          >
            <el-option
              v-for="(item, index) in typeList"
              :key="index"
              :label="item"
              :value="index"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="课题简介" prop="introduce">
          <el-input
            type="textarea"
            v-model="addForm.introduce"
            placeholder="请输入课题简介"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="addTopic(ruleFormRef)">
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

:deep(.el-popper) {
  max-width: 500px;
}
</style>
