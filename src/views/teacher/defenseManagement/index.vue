<script setup lang="ts">
import { ref, reactive, ComputedRef, computed, watchEffect } from "vue";
import { Info, useDefense } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

import EditPen from "@iconify-icons/ep/edit-pen";
import Refresh from "@iconify-icons/ep/refresh";

defineOptions({
  name: "DefenseManagement"
});

const formRef = ref();
const {
  dataList,
  loading,
  loadingConfig,
  columns,
  statusList,
  pagination,
  onSearch,
  handleUpdate,
  handleSizeChange,
  handleCurrentChange
} = useDefense();

const form = reactive({
  title: "",
  username: "",
  userNo: "",
  type: "",
  qualification: null
});

const resetForm = formEl => {
  if (!formEl) return;
  formEl.resetFields();
};

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
        if (item.type)
          return item.type.toString().toLowerCase().includes(form.type);
        else return false;
      })
      .filter(item => {
        if ([0, 1, 2].includes(form.qualification))
          return item.qualification_02 === form.qualification;
        else return true;
      });
  else return [];
});

// 添加一个观察器，监视 filteredList 属性的变化
watchEffect(() => {
  pagination.total = filterList.value.length;
});
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
      <el-form-item label="学生姓名：" prop="username">
        <el-input
          v-model="form.username"
          placeholder="请输入学生姓名"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="学号：" prop="userNo">
        <el-input
          v-model="form.userNo"
          placeholder="请输入学号"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="答辩类型：" prop="type">
        <el-input
          v-model="form.type"
          placeholder="请输入答辩类型"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="答辩资格：" prop="qualification">
        <el-select
          v-model="form.qualification"
          placeholder="请选择答辩资格"
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

    <PureTableBar title="答辩列表" @refresh="onSearch" class="overflow-hidden">
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
            <el-popconfirm
              title="审核提示!"
              width="180px"
              confirm-button-text="有资格"
              cancel-button-text="无资格"
              cancel-button-type="danger"
              @confirm="handleUpdate(row, 1)"
              @cancel="handleUpdate(row, 2)"
            >
              <template #reference>
                <el-button
                  class="reset-margin"
                  link
                  type="primary"
                  :size="size"
                  :disabled="row.qualification_01 === 1"
                  :icon="useRenderIcon(EditPen)"
                >
                  审核
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </pure-table>
      </template>
    </PureTableBar>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}
</style>
