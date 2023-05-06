<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Motion from "../utils/motion";
import ReQrcode from "@/components/ReQrcode";
import { useUserStoreHook } from "@/store/modules/user";
import { $t, transformI18n } from "@/plugins/i18n";
import { message } from "@/utils/message";

const { t } = useI18n();

/** 功能暂不可用 */
function moreOperations() {
  message(transformI18n($t("message.moreOperations")), {
    grouping: true,
    type: "warning"
  });
}
</script>

<template>
  <Motion class="-mt-2 -mb-2">
    <ReQrcode
      :text="t('login.test')"
      disabled
      @disabled-click="moreOperations"
    />
  </Motion>
  <Motion :delay="100">
    <el-divider>
      <p class="text-gray-500 text-xs">{{ t("login.tip") }}</p>
    </el-divider>
  </Motion>
  <Motion :delay="150">
    <el-button
      class="w-full mt-4"
      @click="useUserStoreHook().SET_CURRENTPAGE(0)"
    >
      {{ t("login.back") }}
    </el-button>
  </Motion>
</template>
