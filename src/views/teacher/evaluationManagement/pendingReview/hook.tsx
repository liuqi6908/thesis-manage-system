import dayjs from "dayjs";
import { message } from "@/utils/message";
import { getPendingReviewList } from "@/api/teacher/evaluation";
import { ElMessageBox } from "element-plus";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  /** 评审编号 */
  id?: number;
  /** 课题名称 */
  title?: string;
  /** 学生姓名 */
  username?: string;
  /** 学号 */
  userNo?: string;
  /** 性别 */
  gender?: string;
  /** 学院 */
  college?: string;
  /** 专业 */
  major?: string;
  /** 班级 */
  class?: string;
  /** 下载链接 */
  url?: string;
  /** 创建时间 */
  createTime?: number;
}

export function useEvaluation() {
  const dataList = ref<Info[]>();
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
      minWidth: 150
    },
    {
      label: "姓名",
      prop: "username",
      minWidth: 100
    },
    {
      label: "学号",
      prop: "userNo",
      minWidth: 100
    },
    {
      label: "性别",
      prop: "gender",
      minWidth: 70
    },
    {
      label: "学院",
      prop: "college",
      minWidth: 150
    },
    {
      label: "专业",
      prop: "major",
      minWidth: 150
    },
    {
      label: "班级",
      prop: "class",
      minWidth: 100
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
      width: 150,
      slot: "operation"
    }
  ];

  function handleDownload(val: Info) {
    if (val.url) window.open(val.url);
    else
      message("下载失败，暂无文件", {
        type: "error",
        grouping: true
      });
  }

  function handleAudit(row) {
    ElMessageBox.prompt("请输入该课题的评审评分：", "评审提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      inputType: "number",
      inputErrorMessage: "请输入正确格式"
    })
      .then(() => {
        loading.value = true;
        setTimeout(() => {
          // 将该条评审从 dataList 移除
          const index = dataList.value.findIndex(item => item.id === row.id);
          if (index > -1) dataList.value.splice(index, 1);
          loading.value = false;
        }, 1000);
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

  function onSearch() {
    loading.value = true;
    getPendingReviewList()
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

  onMounted(() => {
    onSearch();
  });

  return {
    loading,
    loadingConfig,
    columns,
    dataList,
    pagination,
    onSearch,
    handleDownload,
    handleAudit,
    handleSizeChange,
    handleCurrentChange
  };
}
