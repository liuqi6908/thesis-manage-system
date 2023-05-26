import dayjs from "dayjs";
import { message } from "@/utils/message";
import { handleTree } from "@/utils/tree";
import { classList } from "@/api/admin/system";
import { ElMessageBox } from "element-plus";
import { ref, onMounted } from "vue";

export interface Info {
  id?: number;
  name?: string;
  type?: number;
  parentId?: number;
  status?: number;
  createTime?: number;
  desc?: string;
  children?: Array<Info>;
}

export function useClass() {
  const dataList = ref<Info[]>();
  const loading = ref(true);

  const switchLoadMap = ref({});
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
      minWidth: 70,
      hide: ({ checkList }) => !checkList.includes("序号列")
    },
    {
      label: "部门",
      prop: "name",
      align: "left",
      minWidth: 150
    },
    {
      label: "类型",
      minWidth: 70,
      prop: "type",
      formatter: ({ type }) => ["学院", "专业", "班级"][type - 1]
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
          disabled={scope.row.type !== 3}
          onChange={() => onChange(scope as any)}
        />
      )
    },
    {
      label: "创建时间",
      minWidth: 150,
      prop: "createTime",
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "备注",
      prop: "desc",
      minWidth: 150
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
        row.name
      }</strong> 班级吗?`,
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
          message("已成功修改班级状态", {
            type: "success"
          });
        }, 300);
      })
      .catch(() => {
        row.status === 0 ? (row.status = 1) : (row.status = 0);
      });
  }

  function handleUpdate(row) {
    if (row.type !== 3)
      return message("禁止对学院/专业进行修改", {
        type: "warning"
      });
  }

  function handleDelete(row) {
    if (row.type !== 3)
      return message("禁止对学院/专业进行删除", {
        type: "warning"
      });
    for (let i = 0; i < dataList.value.length; i++) {
      for (let j = 0; j < dataList.value[i].children.length; j++) {
        if (row.parentId === dataList.value[i].children[j].id) {
          const index = dataList.value[i].children[j].children
            .map(item => item.id)
            .indexOf(row.id);
          if (index >= 0)
            dataList.value[i].children[j].children.splice(index, 1);
          message("删除成功", {
            type: "success"
          });
          return;
        }
      }
    }
  }

  async function onSearch() {
    loading.value = true;
    await classList()
      .then(res => {
        if (res.success) {
          dataList.value = handleTree(res.data);
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
    columns,
    dataList,
    onSearch,
    handleUpdate,
    handleDelete
  };
}
