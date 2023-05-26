import dayjs from "dayjs";
import { message } from "@/utils/message";
import { topicSelect } from "@/api/student/topic";
import { modifyList } from "@/api/student/modify";
import { ElMessageBox } from "element-plus";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  /** 申请编号 */
  id?: number;
  /** 原课题名称 */
  oldTitle?: string;
  /** 新课题名称 */
  newTitle?: string;
  /** 指导教师 */
  teacher?: string;
  /** 状态（待审核、驳回、通过） */
  status?: number;
  /** 创建时间 */
  createTime?: number;
}

export function useModify() {
  /** 已选课题 */
  const topicInfo = ref<any[]>();
  const topicLoading = ref(true);

  const topicColumns: TableColumnList = [
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
        <el-tag key={scope.row.id} type="primary" class="mx-1" effect="light">
          接收
        </el-tag>
      )
    },
    {
      label: "创建时间",
      minWidth: 160,
      prop: "createTime",
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
    }
  ];

  /** 申请列表 */
  const dataList = ref<Info[]>();
  const statusList = reactive(["待审核", "驳回", "通过"]);
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
      label: "原课题名称",
      prop: "oldTitle",
      minWidth: 260
    },
    {
      label: "新课题名称",
      prop: "newTitle",
      minWidth: 260
    },
    {
      label: "指导教师",
      prop: "teacher",
      minWidth: 120
    },
    {
      label: "状态",
      minWidth: 100,
      cellRenderer: scope => (
        <el-tag
          key={scope.row.id}
          type={["warning", "danger", "primary"][scope.row.status]}
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

  /** 删除申请 */
  function handleDelete(row) {
    ElMessageBox.confirm(
      `确认要 <strong>删除</strong> <strong style='color:var(--el-color-primary)'>
      ${row.newTitle}</strong> 的课题修改申请吗?`,
      "删除提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        loading.value = true;
        setTimeout(() => {
          // 将申请从 dataList 中删除
          const i = dataList.value.map(item => item.id).indexOf(row.id);
          if (i > -1) dataList.value.splice(i, 1);
          message("删除成功", {
            type: "success"
          });
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
    modifyList()
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
    topicSelect({ status: 4 })
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
    topicColumns,
    dataList,
    loading,
    loadingConfig,
    columns,
    statusList,
    pagination,
    onSearchDataList,
    onSearchTopicInfo,
    handleDelete,
    handleSizeChange,
    handleCurrentChange
  };
}
