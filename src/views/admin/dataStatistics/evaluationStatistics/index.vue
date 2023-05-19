<script setup lang="ts">
import Pie from "./components/Pie.vue";
import TypeIt from "@/components/ReTypeit";
import { ref } from "vue";

defineOptions({
  name: "EvaluationStatistics"
});

const loading = ref<boolean>(true);

setTimeout(() => {
  loading.value = !loading.value;
}, 800);
</script>

<template>
  <div>
    <el-card shadow="never">
      <template #header>
        <TypeIt
          :className="'type-it3'"
          :values="['评审结果统计']"
          :cursor="false"
          :speed="120"
        />
      </template>
      <el-skeleton animated :rows="7" :loading="loading">
        <template #default>
          <Pie />
        </template>
      </el-skeleton>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-timeline-item) {
  margin: 6px 0 0 6px;
}

.main-content {
  margin: 20px 20px 0 !important;
}
</style>
