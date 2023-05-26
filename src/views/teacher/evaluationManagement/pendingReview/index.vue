<script setup lang="ts">
import { ref, reactive, ComputedRef, computed, watchEffect } from "vue";
import { Info, useEvaluation } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

import Download from "@iconify-icons/ep/download";
import Edit from "@iconify-icons/ep/edit";
import Refresh from "@iconify-icons/ep/refresh";

defineOptions({
  name: "PendingReview"
});

const formRef = ref();
const {
  loading,
  loadingConfig,
  columns,
  dataList,
  pagination,
  onSearch,
  handleDownload,
  handleAudit,
  handleSizeChange,
  handleCurrentChange
} = useEvaluation();

const form = reactive({
  title: "",
  username: "",
  userNo: ""
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
      <el-form-item>
        <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
          重置
        </el-button>
      </el-form-item>
    </el-form>

    <PureTableBar
      title="待评审列表"
      @refresh="onSearch"
      class="overflow-hidden"
    >
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
              :icon="useRenderIcon(Download)"
              @click="handleDownload(row)"
            >
              下载
            </el-button>
            <el-button
              class="reset-margin"
              link
              type="primary"
              :size="size"
              :icon="useRenderIcon(Edit)"
              @click="handleAudit(row)"
            >
              评审
            </el-button>
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
