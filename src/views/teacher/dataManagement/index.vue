<script setup lang="ts">
import { watchEffect, ref, reactive } from "vue";
import { useData } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { getTopicData } from "@/api/teacher/data";
import dayjs from "dayjs";
import { message } from "@/utils/message";

import { FolderOpened } from "@element-plus/icons-vue";

defineOptions({
  name: "DataManagement"
});

const {
  dataList,
  loading,
  loadingConfig,
  columns,
  pagination,
  multipleSelection,
  onSearch,
  handleSizeChange,
  handleCurrentChange,
  handleSelectionChange
} = useData();

const data = ref([]);
const loadingData = ref(false);
const tabPane = reactive(["开题报告", "任务书", "论文定稿", "论文成绩考核表"]);

watchEffect(() => {
  if (multipleSelection.value?.title) {
    loadingData.value = true;
    getTopicData({ title: multipleSelection.value?.title })
      .then(res => {
        if (res.success) {
          data.value = res.data || [];
        }
      })
      .finally(() => {
        for (let i = 0; i < tabPane.length; i++) {
          if (!data.value.find(item => item.name == tabPane[i])) {
            data.value.push({
              name: tabPane[i],
              fileName: null,
              fileUrl: null,
              feedback: null,
              username: null,
              createTime: null
            });
          }
        }
        setTimeout(() => {
          loadingData.value = false;
        }, 1000);
      });
  }
});

function submitUpload() {
  message("上传失败，服务器错误，请稍后再试！", {
    type: "error",
    grouping: true
  });
}
</script>

<template>
  <div class="main">
    <PureTableBar
      title="课题列表（请选择一行）"
      @refresh="onSearch"
      class="overflow-hidden"
    >
      <template v-slot="{ size, checkList }">
        <pure-table
          ref="tableRef"
          border
          align-whole="center"
          showOverflowTooltip
          highlight-current-row
          :loading="loading"
          :loading-config="loadingConfig"
          :size="size"
          :height="size === 'small' ? 130 : 160"
          :data="
            dataList?.slice(
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
          :row-style="{
            cursor: 'pointer'
          }"
          @page-size-change="handleSizeChange"
          @page-current-change="handleCurrentChange"
          @current-change="handleSelectionChange"
        />
      </template>
    </PureTableBar>

    <el-card class="box-card mt-6" shadow="never" v-loading="loadingData">
      <template #header>
        <div class="card-header">
          <span class="font-bold">过程资料</span>
        </div>
      </template>
      <template v-if="multipleSelection?.id">
        课题名称：<span class="text-blue-600">{{
          multipleSelection.title
        }}</span>
        <el-tabs type="border-card" class="mt-4">
          <el-tab-pane
            v-for="(tab, index) in tabPane"
            :key="index"
            :label="tab"
          >
            <el-descriptions
              border
              :column="2"
              v-for="item in data?.filter(item => item.name === tab)"
              :key="item.name"
            >
              <el-descriptions-item label="上传资料">
                <el-upload
                  ref="upload"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  :limit="1"
                  :auto-upload="false"
                >
                  <template #trigger>
                    <el-button type="primary" :icon="FolderOpened">
                      选择文件
                    </el-button>
                  </template>
                  <el-button class="ml-3" type="success" @click="submitUpload">
                    上传
                  </el-button>
                </el-upload>
              </el-descriptions-item>
              <el-descriptions-item label="下载资料">
                <el-link
                  v-if="item.fileName && item.fileUrl"
                  type="primary"
                  :href="item.fileUrl"
                  target="_blank"
                >
                  {{ item.fileName }}
                </el-link>
              </el-descriptions-item>
              <el-descriptions-item label="上传者">
                {{ item.username }}
              </el-descriptions-item>
              <el-descriptions-item label="上传时间">
                <span v-if="item.createTime">
                  {{ dayjs(item.createTime).format("YYYY-MM-DD HH:mm:ss") }}
                </span>
              </el-descriptions-item>
              <el-descriptions-item label="指导教师意见">
                <el-input
                  type="textarea"
                  v-model="item.feedback"
                  placeholder="请输入指导教师意见"
                  readonly
                />
              </el-descriptions-item>
            </el-descriptions>
          </el-tab-pane>
        </el-tabs>
      </template>
      <el-empty v-else description="请选择一项课题" />
    </el-card>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

:deep(.el-upload) {
  display: inline-block !important;
}

:deep(.el-descriptions) {
  .el-descriptions__label {
    width: 120px;
  }

  .el-descriptions__content {
    min-width: 300px;
  }
}
</style>
