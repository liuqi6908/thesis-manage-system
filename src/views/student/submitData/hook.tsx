import dayjs from "dayjs";
import { message } from "@/utils/message";
import { thesisList } from "@/api/student/thesis";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  /** 论文编号 */
  id?: number;
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
  /** 课题名称 */
  title?: string;
  /** 指导教师 */
  teacher?: string;
  /** 创建时间 */
  createTime?: number;
}

export function useThesis() {
  const dataList = ref<Info[]>();
  const multipleSelection = ref<Info>();
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
      width: 45,
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
      minWidth: 90
    },
    {
      label: "学号",
      prop: "userNo",
      minWidth: 90
    },
    {
      label: "课题名称",
      prop: "title",
      minWidth: 220
    },
    {
      label: "指导教师",
      prop: "teacher",
      minWidth: 90
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

  function handleSelectionChange(val: Info) {
    multipleSelection.value = val;
  }

  function onSearch() {
    loading.value = true;
    thesisList()
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
    pagination,
    multipleSelection,
    onSearch,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
