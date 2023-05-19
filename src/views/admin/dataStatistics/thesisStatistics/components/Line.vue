<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";
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
  return isDark.value ? "dark" : "default";
});

const lineChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, getInstance, resize } = useECharts(
  lineChartRef as Ref<HTMLDivElement>,
  { theme }
);

const xData = (() => {
  const data: any[] = [];
  const dateFormat = /\d{1,2}月\d{1,2}日/;

  const currentDate = new Date(); // 当前日期
  for (let i = 30; i > 0; i--) {
    const date = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000);
    const dateString = `${date.getMonth() + 1}月${date.getDate()}日`;
    if (dateFormat.exec(dateString)) {
      data.push(dateString);
    }
  }
  return data;
})();

const yData = (() => {
  const data: any[] = [];

  for (let i = 0; i < 30; i++) {
    data.push(Math.floor(Math.random() * 100) + 1);
  }
  return data;
})();

setOptions({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  grid: {
    top: 30,
    left: 50,
    bottom: 20,
    right: 10
  },
  legend: {
    right: 0,
    data: ["提交量"]
  },
  calculable: true,
  xAxis: [
    {
      triggerEvent: true,
      type: "category",
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      data: xData
    }
  ],
  yAxis: [
    {
      triggerEvent: true,
      type: "value",
      splitLine: {
        show: false
      },
      axisLine: {
        show: true
      }
    }
  ],
  dataZoom: [
    {
      type: "slider",
      show: false,
      realtime: true,
      startValue: 0,
      endValue: 24
    }
  ],
  series: [
    {
      name: "提交量",
      type: "line",
      symbolSize: 10,
      symbol: "circle",
      color: "#53a7ff",
      markPoint: {
        label: {
          color: "#fff"
        },
        data: [
          {
            type: "max",
            name: "最大值"
          },
          {
            type: "min",
            name: "最小值"
          }
        ]
      },
      data: yData
    }
  ],
  addTooltip: true
});

let a = 1;
useIntervalFn(() => {
  if (a == xData.length - 24) {
    a = 0;
  }
  getInstance()!.dispatchAction({
    type: "dataZoom",
    startValue: a,
    endValue: a + 24
  });
  a++;
}, 2000);

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(600).then(() => resize());
  }
);
</script>

<template>
  <div ref="lineChartRef" style="width: 100%; height: 35vh" />
</template>
