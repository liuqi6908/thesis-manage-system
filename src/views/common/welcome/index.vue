<script setup lang="ts">
import TypeIt from "@/components/ReTypeit";
import { reactive } from "vue";
import { noticesData } from "@/layout/components/notice/data";
import { useUserStore } from "@/store/modules/user";

defineOptions({
  name: "Welcome"
});

const { username, roles } = useUserStore();

const roleList = reactive({
  admin: "管理员",
  teacher: "教师",
  student: "学生"
});

const notices = reactive([
  {
    key: "1",
    name: "通知",
    count: 0,
    list: noticesData.notice
  },
  {
    key: "2",
    name: "任务",
    count: noticesData.task.length,
    list: noticesData.task
  }
]);

notices[0].list.forEach(item => {
  if (item.extra === "未读") notices[0].count++;
});

/**
 * 打开通知弹窗
 */
function openNoticePopper() {
  const { notice } = useUserStore();
  if (notice) notice.handleOpen();
}
</script>

<template>
  <div>
    <el-card shadow="never" style="height: 347px">
      <template #header>
        <TypeIt
          :className="'type-it2'"
          :values="[`欢迎您 ${username}（${roleList[roles[0]]}）`]"
          :cursor="false"
          :speed="80"
        />
      </template>
      <p>欢迎访问“毕业论文管理系统”！</p>
      <div class="notice">
        您当前共有<el-tag type="danger">{{ notices[0].count }}</el-tag
        >条<el-tag type="warning">未读</el-tag>通知， 以及<el-tag type="danger">
          {{ notices[1].count }}</el-tag
        >项<el-tag>未完成</el-tag>任务，请点击右上角“通知”按钮
        <el-text type="primary" size="large" @click="openNoticePopper"
          >查看详情</el-text
        >。
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  margin: 20px 20px 0 !important;
}

.notice {
  margin: 10px 0;

  .el-tag {
    margin: 0 5px;
  }

  .el-text {
    cursor: pointer;
  }
}
</style>
