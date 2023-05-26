import dayjs from "dayjs";
import { message } from "@/utils/message";
import { getTopicList } from "@/api/admin/thesis";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  /** 编号 */
  id?: number;
  /** 课题名称 */
  title?: string;
  /** 课题类型（0结合生产实际或经济建设、1结合科研、2结合实验室建设、3教师自拟） */
  type?: number;
  /** 课题简介 */
  introduce?: string;
  /** 指导教师 */
  teacher?: string;
  /** 可接收人数 */
  total?: number;
  /** 已选人数 */
  selected?: number;
  /** 学生姓名 */
  student?: string;
  /** 学号 */
  studentNo?: string;
  /** 课题状态（0待审核、1通过、2驳回） */
  status?: number;
  /** 创建时间 */
  createTime?: number;
}

export function useTopic() {
  const dataList = ref<Info[]>();
  const typeList = reactive([
    "结合生产实际或经济建设",
    "结合科研",
    "结合实验室建设",
    "教师自拟"
  ]);
  const statusList = reactive(["待审核", "通过", "驳回"]);
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
      minWidth: 300
    },
    {
      label: "课题类型",
      minWidth: 150,
      cellRenderer: scope => <el-text>{typeList[scope.row.type]}</el-text>
    },
    {
      label: "课题简介",
      prop: "introduce",
      minWidth: 400
    },
    {
      label: "指导教师",
      prop: "teacher",
      minWidth: 100
    },
    {
      label: "可接收总人数",
      prop: "total",
      minWidth: 120
    },
    {
      label: "已选人数",
      prop: "selected",
      minWidth: 100
    },
    {
      label: "选题学生",
      prop: "student",
      minWidth: 100
    },
    {
      label: "学号",
      prop: "studentNo",
      minWidth: 100
    },
    {
      label: "课题状态",
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
    }
  ];

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
    getTopicList()
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
    typeList,
    statusList,
    pagination,
    onSearch,
    handleSizeChange,
    handleCurrentChange
  };
}
