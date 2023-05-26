import dayjs from "dayjs";
import { message } from "@/utils/message";
import { teacherList } from "@/api/admin/system";
import { ElMessageBox } from "element-plus";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  id?: number;
  username?: string;
  userNo?: string;
  gender?: string;
  college?: string;
  jobTitle?: string;
  phone?: string;
  email?: string;
  status?: number;
  createTime?: number;
}

export function useTeacher() {
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

  const switchLoadMap = ref({});
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
      label: "职工号",
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
      label: "职称",
      prop: "jobTitle",
      minWidth: 100
    },
    {
      label: "手机号",
      prop: "phone",
      minWidth: 120
    },
    {
      label: "电子邮箱",
      prop: "email",
      minWidth: 120
    },
    {
      label: "状态",
      minWidth: 75,
      cellRenderer: scope => (
        <el-switch
          size={scope.props.size === "small" ? "small" : "default"}
          loading={switchLoadMap.value[scope.index]?.loading}
          v-model={scope.row.status}
          active-value={1}
          inactive-value={0}
          active-text="启用"
          inactive-text="禁用"
          inline-prompt
          onChange={() => onChange(scope as any)}
        />
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
      width: 150,
      slot: "operation"
    }
  ];

  function onChange({ row, index }) {
    ElMessageBox.confirm(
      `确认要 <strong>${
        row.status === 0 ? "禁用" : "启用"
      }</strong> <strong style='color:var(--el-color-primary)'>${
        row.username
      }</strong> 教师账号吗?`,
      "系统提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        switchLoadMap.value[index] = Object.assign(
          {},
          switchLoadMap.value[index],
          {
            loading: true
          }
        );
        setTimeout(() => {
          switchLoadMap.value[index] = Object.assign(
            {},
            switchLoadMap.value[index],
            {
              loading: false
            }
          );
          message("已成功修改账号状态", {
            type: "success"
          });
        }, 300);
      })
      .catch(() => {
        row.status === 0 ? (row.status = 1) : (row.status = 0);
      });
  }

  function handleUpdate(row) {
    console.log(row);
  }

  function handleDelete(row) {
    const index = dataList.value.map(item => item.id).indexOf(row.id);
    if (index >= 0) dataList.value.splice(index, 1);
    message("删除成功", {
      type: "success"
    });
  }

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    loadingConfig.text = `正在加载第${val}页...`;
    loading.value = true;
    delay(500).then(() => {
      loading.value = false;
    });
  }

  async function onSearch() {
    loading.value = true;
    await teacherList()
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
    handleUpdate,
    handleDelete,
    handleSizeChange,
    handleCurrentChange
  };
}
