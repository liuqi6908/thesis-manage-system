<script setup lang="ts">
import { ref, reactive, ComputedRef, computed, watchEffect } from "vue";
import { Info, useTopic } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

import Delete from "@iconify-icons/ep/delete";
import EditPen from "@iconify-icons/ep/edit-pen";
import Refresh from "@iconify-icons/ep/refresh";

defineOptions({
  name: "ThesisTopicSelection"
});

const formRef = ref();
const {
  topicInfo,
  topicLoading,
  dataList,
  loading,
  loadingConfig,
  columns,
  statusList,
  pagination,
  onSearchDataList,
  onSearchTopicInfo,
  handleSelect,
  handleDelete,
  handleSizeChange,
  handleCurrentChange
} = useTopic();

const form = reactive({
  title: "",
  teacher: "",
  status: null
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
        if (item.teacher)
          return item.teacher.toString().toLowerCase().includes(form.teacher);
        else return false;
      })
      .filter(item => {
        if ([0, 1, 2, 3, 4].includes(form.status))
          return item.status === form.status;
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
    <PureTableBar
      title="毕设已选课题"
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
          :columns="columns"
          :checkList="checkList"
          :header-cell-style="{
            background: 'var(--el-table-row-hover-bg-color)',
            color: 'var(--el-text-color-primary)'
          }"
        >
          <template #operation="{ row }">
            <el-button
              class="reset-margin"
              link
              type="danger"
              :size="size"
              :icon="useRenderIcon(Delete)"
              @click="handleDelete(row)"
            >
              删除
            </el-button>
          </template>
        </pure-table>
      </template>
    </PureTableBar>

    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="bg-bg_color w-[99/100] pl-8 pt-4 mt-6"
    >
      <el-form-item label="课题名称：" prop="title">
        <el-input
          v-model="form.title"
          placeholder="请输入课题名称"
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
      title="毕设课题列表"
      @refresh="onSearchDataList"
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
              :icon="useRenderIcon(EditPen)"
              :disabled="row.status !== 0"
              @click="handleSelect(row)"
            >
              选题
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
