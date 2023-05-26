import dayjs from "dayjs";
import { message } from "@/utils/message";
import { teacherInfo, applyList } from "@/api/student/teacher";
import { ElMessageBox } from "element-plus";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  /** 申请编号 */
  id?: number;
  /** 原课题名称 */
  oldTitle?: string;
  /** 原指导教师 */
  oldTeacher?: string;
  /** 新指导教师 */
  newTeacher?: string;
  /** 状态（待审核、驳回、通过） */
  status?: number;
  /** 创建时间 */
  createTime?: number;
}

export function useTeacher() {
  /** 指导教师 */
  const teacher = ref<any[]>();

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
      label: "原指导教师",
      prop: "oldTeacher",
      minWidth: 120
    },
    {
      label: "新指导教师",
      prop: "newTeacher",
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
      ${row.newTeacher}</strong> 的指导教师更换申请吗?`,
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

  function onSearch() {
    loading.value = true;
    applyList()
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

  function onSeacherTeacher() {
    teacherInfo().then(res => {
      if (res.success) {
        teacher.value = res.data;
      } else {
        message(res.message, {
          type: "error"
        });
      }
    });
  }

  onMounted(() => {
    onSearch();
    onSeacherTeacher();
  });

  return {
    teacher,
    dataList,
    loading,
    loadingConfig,
    columns,
    statusList,
    pagination,
    onSearch,
    handleDelete,
    handleSizeChange,
    handleCurrentChange
  };
}
