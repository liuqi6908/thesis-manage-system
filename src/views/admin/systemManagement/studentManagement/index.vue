<script setup lang="ts">
import { ref, reactive, ComputedRef, computed, watchEffect } from "vue";
import tree from "./tree.vue";
import { Info, useStudent } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

import Delete from "@iconify-icons/ep/delete";
import EditPen from "@iconify-icons/ep/edit-pen";
import Refresh from "@iconify-icons/ep/refresh";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "StudentManagement"
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
} = useStudent();

const form = reactive({
  username: "",
  userNo: "",
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
</script>

<template>
  <div class="main">
    <tree class="w-[17%] h-full min-w-[150px]" />
    <div class="flex-1 h-full overflow-auto ml-[15px]">
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
        <el-form-item label="学号：" prop="userNo">
          <el-input
            v-model="form.userNo"
            placeholder="请输入学号"
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

      <PureTableBar
        title="学生列表"
        @refresh="onSearch"
        class="overflow-hidden"
      >
        <template #buttons>
          <el-button type="primary" :icon="useRenderIcon(AddFill)">
            新增学生
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
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

.main {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 !important;
  padding: 24px 24px 10px;

  :deep(.el-pagination) {
    overflow-x: auto;
  }
}
</style>
