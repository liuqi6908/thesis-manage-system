import dayjs from "dayjs";
import { message } from "@/utils/message";
import { getStudentList } from "@/api/teacher/student";
import { ElMessageBox } from "element-plus";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  /** 编号 */
  id?: number;
  /** 学生姓名 */
  username?: string;
  /** 学号 */
  userNo?: string;
  /** 性别 */
  gender?: string;
  /** 学院 */
  college?: string;
  /**专业 */
  major?: string;
  /** 班级 */
  class?: string;
  /** 课题名称 */
  title?: string;
  /** 选题状态（0待审核、1接收、2驳回） */
  status?: number;
  /** 创建时间 */
  createTime?: number;
}

export function useStudent() {
  const dataList = ref<Info[]>();
  const statusList = reactive(["待审核", "接收", "驳回"]);
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
      label: "课题名称",
      prop: "title",
      minWidth: 150
    },
    {
      label: "选题状态",
      minWidth: 100,
      cellRenderer: scope => (
        <el-tag
          key={scope.row.id}
          type={["warning", "primary", "danger"][scope.row.status]}
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

  function handleUpdate(row, flag) {
    ElMessageBox.confirm(
      `确认要 <strong>${
        flag === 1 ? "接收" : "驳回"
      }</strong> <strong style='color:var(--el-color-primary)'>
      ${row.username}</strong> 的选题申请吗?`,
      "审核提示",
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
          // 更改选题状态
          row.status = flag;
          message(`${flag === 1 ? "接收" : "驳回"}成功`, {
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

  function onSearch() {
    loading.value = true;
    getStudentList()
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
    statusList,
    pagination,
    onSearch,
    handleUpdate,
    handleSizeChange,
    handleCurrentChange
  };
}
