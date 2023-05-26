import dayjs from "dayjs";
import { message } from "@/utils/message";
import { topicList, topicSelect } from "@/api/student/topic";
import { ElMessageBox } from "element-plus";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  /** 课题编号 */
  id?: number;
  /** 课题名称 */
  title?: string;
  /** 指导教师 */
  teacher?: string;
  /** 可接收总人数 */
  total?: number;
  /** 状态（可选、已满、已选[待确认、驳回、接收]） */
  status?: number;
  /** 创建时间 */
  createTime?: number;
}

export function useTopic() {
  /** 已选课题 */
  const topicInfo = ref<Info[]>();
  const topicLoading = ref(true);
  /** 课题列表 */
  const dataList = ref<Info[]>();
  const statusList = reactive(["可选", "已满", "待确认", "驳回", "接收"]);
  const loading = ref(true);
  const loadingConfig = reactive<LoadingConfig>({
    text: "正在加载第1页...",
    viewBox: "-10, -10, 50, 50",
    spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
  });

  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns: TableColumnList = [
    {
      type: "selection",
      width: 50,
      align: "left",
      hide: ({ checkList }) => !checkList.includes("勾选列")
    },
    {
      label: "序号",
      type: "index",
      width: 70,
      hide: ({ checkList }) => !checkList.includes("序号列")
    },
    {
      label: "课题名称",
      prop: "title",
      minWidth: 260
    },
    {
      label: "指导教师",
      prop: "teacher",
      minWidth: 120
    },
    {
      label: "可接收总人数",
      prop: "total",
      minWidth: 120
    },
    {
      label: "状态",
      minWidth: 100,
      cellRenderer: scope => (
        <el-tag
          key={scope.row.id}
          type={
            ["success", "info", "warning", "danger", "primary"][
              scope.row.status
            ]
          }
          class="mx-1"
          effect="light"
        >
          {statusList[scope.row.status]}
        </el-tag>
      )
    },
    {
      label: "创建时间",
      minWidth: 160,
      prop: "createTime",
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "操作",
      fixed: "right",
      width: 100,
      slot: "operation"
    }
  ];

  /** 选题 */
  function handleSelect(row) {
    // 达选题数量上限
    if (topicInfo.value.length >= 3)
      return message("选题失败，已达选题数量上限", {
        type: "error",
        grouping: true
      });
    ElMessageBox.confirm(
      `确认要 <strong>选择</strong> <strong style='color:var(--el-color-primary)'>
      ${row.teacher}</strong> 的 <strong style='color:var(--el-color-primary)'>
      ${row.title}</strong> 课题吗?`,
      "选题提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        topicLoading.value = true;
        loading.value = true;
        setTimeout(() => {
          // 将 dataList 中对应的课题状态改为待确认（2）
          const i = dataList.value.map(item => item.id).indexOf(row.id);
          if (i > -1) dataList.value[i].status = 2;
          // 将课题添加到 topicInfo 中
          topicInfo.value.push(JSON.parse(JSON.stringify(dataList.value[i])));
          message("选题成功", {
            type: "success"
          });
          topicLoading.value = false;
          loading.value = false;
        }, 500);
      })
      .catch(() => {});
  }

  /** 退选 */
  function handleDelete(row) {
    ElMessageBox.confirm(
      `确认要 <strong>退选</strong> <strong style='color:var(--el-color-primary)'>
      ${row.teacher}</strong> 的 <strong style='color:var(--el-color-primary)'>
      ${row.title}</strong> 课题吗?`,
      "退选提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        topicLoading.value = true;
        loading.value = true;
        setTimeout(() => {
          // 将课题从 topicInfo 中删除
          const i = topicInfo.value.map(item => item.id).indexOf(row.id);
          if (i > -1) topicInfo.value.splice(i, 1);
          // 将 dataList 中对应的课题状态改为可选（0）
          const j = dataList.value.map(item => item.id).indexOf(row.id);
          if (j > -1) dataList.value[j].status = 0;
          message("退选成功", {
            type: "success"
          });
          topicLoading.value = false;
          loading.value = false;
        }, 500);
      })
      .catch(() => {});
  }

  function handleSizeChange() {
    loadingConfig.text = `正在加载...`;
    loading.value = true;
    delay(500).then(() => {
      loading.value = false;
    });
  }

  function handleCurrentChange(val: number) {
    loadingConfig.text = `正在加载第${val}页...`;
    loading.value = true;
    delay(500).then(() => {
      loading.value = false;
    });
  }

  function onSearchDataList() {
    loading.value = true;
    topicList()
      .then(res => {
        if (res.success) {
          dataList.value = res.data;
          pagination.total = res.data.length;
        } else {
          message(res.message, {
            type: "error"
          });
        }
      })
      .finally(() => {
        setTimeout(() => {
          loading.value = false;
        }, 500);
      });
  }

  function onSearchTopicInfo() {
    topicLoading.value = true;
    topicSelect()
      .then(res => {
        if (res.success) {
          topicInfo.value = res.data;
        } else {
          message(res.message, {
            type: "error"
          });
        }
      })
      .finally(() => {
        setTimeout(() => {
          topicLoading.value = false;
        }, 500);
      });
  }

  onMounted(() => {
    onSearchDataList();
    onSearchTopicInfo();
  });

  return {
    topicInfo,
    topicLoading,
    dataList,
    loading,
    loadingConfig,
    columns,
    statusList,
    pagination,
    onSearchDataList,
    onSearchTopicInfo,
    handleSelect,
    handleDelete,
    handleSizeChange,
    handleCurrentChange
  };
}
