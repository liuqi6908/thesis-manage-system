<script setup lang="ts">
import intro from "intro.js";
import "intro.js/minified/introjs.min.css";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineOptions({
  name: "Guide"
});

/**
 * 获取引导步骤
 */
function getGuideSteps() {
  const elements = [
    {
      dom: ".breadcrumb-container",
      position: "bottom"
    },
    {
      dom: ".search-container",
      position: "left"
    },
    {
      dom: "#header-notice",
      position: "left"
    },
    {
      dom: "#header-translation",
      position: "left"
    },
    {
      dom: ".userInfo",
      position: "left"
    },
    {
      dom: ".set-icon",
      position: "left"
    },
    {
      dom: ".el-menu",
      position: "right"
    },
    {
      dom: ".container",
      position: "right"
    },
    {
      dom: ".tags-view",
      position: "bottom"
    }
  ];
  const steps = [];
  for (let i = 0; i < elements.length; i++) {
    const dom = document.querySelector(elements[i].dom);
    if (dom && (dom.clientWidth || dom.clientHeight)) {
      steps.push({
        element: dom,
        title: t(`guide.title${i + 1}`),
        intro: t(`guide.intro${i + 1}`),
        position: elements[i].position
      });
    }
  }
  return steps;
}

const guide = () => {
  intro()
    .setOptions({
      steps: getGuideSteps(),
      prevLabel: t("guide.last"),
      nextLabel: t("guide.next"),
      doneLabel: t("guide.done")
    })
    .start();
};
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">
          {{ t("guide.title") }}
        </span>
      </div>
    </template>
    <el-button type="primary" class="mt-[10px]" @click="guide">
      {{ t("guide.button") }}
    </el-button>
  </el-card>
</template>
