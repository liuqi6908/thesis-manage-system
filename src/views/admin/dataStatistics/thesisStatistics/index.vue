<script setup lang="ts">
import MdEditor from "md-editor-v3";
import Pie from "./components/Pie.vue";
import Line from "./components/Line.vue";
import TypeIt from "@/components/ReTypeit";
import { ref, computed, markRaw, onBeforeMount } from "vue";
import { randomColor } from "@pureadmin/utils";
import { useRenderFlicker } from "@/components/ReFlicker";
import { processManagement } from "@/api/admin";

defineOptions({
  name: "ThesisStatistics"
});

const list = ref();
const loading = ref<boolean>(true);
const titleClass = computed(() => {
  return ["text-base", "font-medium"];
});

setTimeout(() => {
  loading.value = !loading.value;
}, 800);

onBeforeMount(() => {
  processManagement().then(res => {
    if (res.success) {
      list.value = res.data.map(item => {
        return {
          content: item.content,
          timestamp: item.dateTime,
          icon: markRaw(
            useRenderFlicker({
              background: randomColor({ type: "hex" }) as string
            })
          )
        };
      });
    }
  });
});
</script>

<template>
  <div>
    <el-card shadow="never" class="mb-4">
      <template #header>
        <TypeIt
          :className="'type-it2'"
          :values="['毕业论文管理流程']"
          :cursor="false"
          :speed="80"
        />
      </template>
      <el-skeleton animated :rows="7" :loading="loading">
        <template #default>
          <el-scrollbar height="324px">
            <el-timeline v-show="list?.length > 0">
              <el-timeline-item
                v-for="(item, index) in list"
                :key="index"
                :icon="item.icon"
                :timestamp="item.timestamp"
              >
                <md-editor v-model="item.content" preview-only />
              </el-timeline-item>
            </el-timeline>
            <el-empty v-show="list?.length === 0" />
          </el-scrollbar>
        </template>
      </el-skeleton>
    </el-card>

    <el-row :gutter="24">
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <TypeIt
              :className="'type-it4'"
              :values="['毕业论文提交量统计']"
              :cursor="false"
              :speed="120"
            />
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <Line />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <TypeIt
              :className="'type-it3'"
              :values="['毕业论文状态统计']"
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
      </el-col>
    </el-row>
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
