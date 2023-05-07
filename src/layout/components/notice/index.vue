<script setup lang="ts">
import { ref, reactive, nextTick } from "vue";
import { noticesData } from "./data";
import NoticeList from "./noticeList.vue";
import Bell from "@iconify-icons/ep/bell";
import { useI18n } from "vue-i18n";
import { useUserStore } from "@/store/modules/user";
import type { DropdownInstance } from "element-plus";

const { t } = useI18n();

const noticesNum = ref(0);
const notices = reactive([
  {
    key: "1",
    name: "notice.notice",
    count: 0,
    list: noticesData.notice
  },
  {
    key: "2",
    name: "notice.task",
    count: noticesData.task.length,
    list: noticesData.task
  },
  {
    key: "3",
    name: "notice.completed",
    count: 0,
    list: noticesData.completed
  }
]);
const activeKey = ref(notices[0].key);

notices[0].list.forEach(item => {
  if (item.extra === "未读") notices[0].count++;
});
notices.map(v => (noticesNum.value += v.count));

const notice = ref<DropdownInstance>();

nextTick(() => {
  const userStore = useUserStore();
  userStore.SET_NOTICE(notice.value);
});
</script>

<template>
  <el-dropdown trigger="click" placement="bottom-end" ref="notice">
    <span class="dropdown-badge navbar-bg-hover select-none">
      <el-badge :value="noticesNum" :max="99">
        <span class="header-notice-icon">
          <IconifyIconOffline :icon="Bell" />
        </span>
      </el-badge>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-tabs :stretch="true" v-model="activeKey" class="dropdown-tabs">
          <template v-for="item in notices" :key="item.key">
            <el-tab-pane
              :label="`${t(item.name)}${
                item.count > 0 ? `(${item.count})` : ''
              }`"
              :name="`${item.key}`"
            >
              <el-scrollbar max-height="330px">
                <div class="noticeList-container">
                  <NoticeList :list="item.list" />
                </div>
              </el-scrollbar>
            </el-tab-pane>
          </template>
        </el-tabs>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.dropdown-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 48px;
  cursor: pointer;

  .header-notice-icon {
    font-size: 18px;
  }
}

.dropdown-tabs {
  width: 330px;

  .noticeList-container {
    padding: 15px 24px 0;
  }

  :deep(.el-tabs__header) {
    margin: 0;
  }

  :deep(.el-tabs__nav-wrap)::after {
    height: 1px;
  }

  :deep(.el-tabs__nav-wrap) {
    padding: 0 36px;
  }
}
</style>
