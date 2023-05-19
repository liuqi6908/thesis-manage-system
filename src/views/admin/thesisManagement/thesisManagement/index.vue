<script setup lang="ts">
import { ref, reactive, ComputedRef, computed, watchEffect } from "vue";
import { Info, useThesis } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

import Delete from "@iconify-icons/ep/delete";
import EditPen from "@iconify-icons/ep/edit-pen";
import Refresh from "@iconify-icons/ep/refresh";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "ThesisManagement"
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
} = useThesis();

const form = reactive({
  name: "",
  teacherName: "",
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
        if (item.name)
          return item.name.toString().toLowerCase().includes(form.name);
        else return false;
      })
      .filter(item => {
        if (item.teacherName)
          return item.teacherName
            .toString()
            .toLowerCase()
            .includes(form.teacherName);
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
    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="bg-bg_color w-[99/100] pl-8 pt-4"
    >
      <el-form-item label="题目：" prop="username">
        <el-input
          v-model="form.name"
          placeholder="请输入题目"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item label="指导教师：" prop="userNo">
        <el-input
          v-model="form.teacherName"
          placeholder="请输入指导教师"
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
          <el-option label="未提交" :value="0" />
          <el-option label="待审核" :value="1" />
          <el-option label="审核通过" :value="2" />
          <el-option label="打回修改" :value="3" />
          <el-option label="挂起/退修" :value="4" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
          重置
        </el-button>
      </el-form-item>
    </el-form>

    <PureTableBar title="论文列表" @refresh="onSearch" class="overflow-hidden">
      <template #buttons>
        <el-button type="primary" :icon="useRenderIcon(AddFill)">
          新增论文
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
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}
</style>
