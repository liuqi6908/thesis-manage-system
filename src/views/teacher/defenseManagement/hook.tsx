import dayjs from "dayjs";
import { message } from "@/utils/message";
import { getDefenseList } from "@/api/teacher/defense";
import { ElMessageBox } from "element-plus";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  /** 答辩编号 */
  id?: number;
  /** 课题名称 */
  title?: string;
  /** 指导教师答辩资格（0待审核、1有资格、无资格） */
  qualification_01?: number;
  /** 指导教师评语 */
  teacherRemark?: string;
  /** 答辩资格 */
  qualification_02?: number;
  /** 答辩资格审核备注 */
  desc?: string;
  /** 答辩类型 */
  type?: string;
  /** 答辩成绩 */
  grade?: number | string;
  /** 答辩评语 */
  defenseRemark?: string;
  /** 组号 */
  groupNumber?: string;
  /** 答辩日期 */
  date?: string;
  /** 答辩时间 */
  time?: string;
  /** 答辩地点 */
  place?: string;
  /** 答辩组成员 */
  groupMembers?: string;
  /** 姓名 */
  username?: string;
  /** 学院 */
  college?: string;
  /** 专业 */
  major?: string;
  /** 班级 */
  class?: string;
  /** 学号 */
  userNo?: string;
  /** 课题英文名称 */
  englishTitle?: string;
  /** 评阅教师 */
  evaluator?: string;
  /** 创建时间 */
  createTime?: number;
}

export function useDefense() {
  /** 答辩列表 */
  const dataList = ref<Info[]>();
  const statusList = reactive(["待审核", "有资格", "无资格"]);
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
      label: "指导教师答辩资格",
      minWidth: 140,
      cellRenderer: scope => (
        <el-tag
          key={scope.row.id}
          type={["warning", "primary", "danger"][scope.row.qualification_01]}
          class="mx-1"
          effect="light"
        >
          {statusList[scope.row.qualification_01]}
        </el-tag>
      )
    },
    {
      label: "指导教师评语",
      prop: "teacherRemark",
      minWidth: 120
    },
    {
      label: "答辩资格",
      minWidth: 90,
      cellRenderer: scope => (
        <el-tag
          key={scope.row.id}
          type={["warning", "primary", "danger"][scope.row.qualification_02]}
          class="mx-1"
          effect="light"
        >
          {statusList[scope.row.qualification_02]}
        </el-tag>
      )
    },
    {
      label: "答辩资格审核备注",
      prop: "desc",
      minWidth: 140
    },
    {
      label: "答辩类型",
      prop: "type",
      minWidth: 90
    },
    {
      label: "答辩成绩",
      prop: "grade",
      minWidth: 90
    },
    {
      label: "答辩评语",
      prop: "defenseRemark",
      minWidth: 100
    },
    {
      label: "组号",
      prop: "groupNumber",
      minWidth: 120
    },
    {
      label: "答辩日期",
      prop: "date",
      minWidth: 100
    },
    {
      label: "答辩时间",
      prop: "time",
      minWidth: 110
    },
    {
      label: "答辩地点",
      prop: "place",
      minWidth: 120
    },
    {
      label: "答辩组成员",
      prop: "groupMembers",
      minWidth: 100
    },
    {
      label: "姓名",
      prop: "username",
      minWidth: 90
    },
    {
      label: "学院",
      prop: "college",
      minWidth: 120
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
      label: "学号",
      prop: "userNo",
      minWidth: 100
    },
    {
      label: "课题英文名称",
      prop: "englishTitle",
      minWidth: 120
    },
    {
      label: "评阅教师",
      prop: "evaluator",
      minWidth: 90
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

  function handleSizeChange() {
    loadingConfig.text = `正在加载...`;
    loading.value = true;
    delay(500).then(() => {
      loading.value = false;
    });
  }

  function handleUpdate(row, flag) {
    ElMessageBox.confirm(
      `确认要将 <strong style='color:var(--el-color-primary)'>
      ${row.username}</strong> 的 <strong style='color:var(--el-color-primary)'>
      ${row.type}</strong> 答辩设置为 <strong>${
        flag === 1 ? "有资格" : "无资格"
      }</strong> 吗?`,
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
          // 更改答辩资格
          row.qualification_01 = flag;
          if (flag === 1) row.qualification_02 = 0;
          message(`审核成功`, {
            type: "success"
          });
          loading.value = false;
        }, 500);
      })
      .catch(() => {});
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
    getDefenseList()
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
    dataList,
    loading,
    loadingConfig,
    columns,
    statusList,
    pagination,
    onSearch,
    handleUpdate,
    handleSizeChange,
    handleCurrentChange
  };
}
