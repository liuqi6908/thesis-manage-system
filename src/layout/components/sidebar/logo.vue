<script setup lang="ts">
import { $t, transformI18n } from "@/plugins/i18n";

const props = defineProps({
  collapse: Boolean
});
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapses: props.collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="props.collapse"
        key="props.collapse"
        :title="transformI18n($t('title.title'))"
        class="sidebar-logo-link"
        to="/"
      >
        <img src="/logo.svg" alt="logo" />
        <span class="sidebar-title">{{
          transformI18n($t("title.title"))
        }}</span>
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="transformI18n($t('title.title'))"
        class="sidebar-logo-link"
        to="/"
      >
        <img src="/logo.svg" alt="logo" />
        <span class="sidebar-title">{{
          transformI18n($t("title.title"))
        }}</span>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 48px;
  overflow: hidden;

  .sidebar-logo-link {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;

    img {
      display: inline-block;
      height: 32px;
    }

    .sidebar-title {
      display: inline-block;
      height: 32px;
      margin: 2px 0 0 12px;
      overflow: hidden;
      font-size: 16px;
      font-weight: 600;
      line-height: 32px;
      color: $subMenuActiveText;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
