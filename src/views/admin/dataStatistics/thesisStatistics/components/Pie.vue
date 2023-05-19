<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const pieChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, resize } = useECharts(pieChartRef as Ref<HTMLDivElement>, {
  theme
});

setOptions({
  tooltip: {
    trigger: "item"
  },
  legend: {
    icon: "circle",
    right: 0
  },
  series: [
    {
      name: "毕业论文状态统计",
      type: "pie",
      top: "20%",
      radius: "80%",
      center: ["40%", "50%"],
      color: ["#909399", "#409EFF", "#67C23A", "#E6A23C", "#F56C6C"],
      data: [
        { value: 156, name: "未提交" },
        { value: 46, name: "待审核" },
        { value: 213, name: "审核通过" },
        { value: 56, name: "打回修改" },
        { value: 12, name: "挂起/退修" }
      ]
    }
  ]
});

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(600).then(() => resize());
  }
);
</script>

<template>
  <div ref="pieChartRef" style="width: 100%; height: 35vh" />
</template>
