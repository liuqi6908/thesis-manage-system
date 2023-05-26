import { message } from "@/utils/message";
import { getNoticeList } from "@/api/admin/notice";
import { ElMessageBox } from "element-plus";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  id?: number;
  title?: string;
  datetime?: string;
  description?: string;
  link?: string;
}

export function useNotice() {
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
      label: "标题",
      prop: "title",
      minWidth: 200
    },
    {
      label: "描述",
      prop: "description",
      minWidth: 150
    },
    {
      label: "发布时间",
      prop: "datetime",
      minWidth: 120
    },
    {
      label: "跳转链接",
      prop: "link",
      minWidth: 180
    },
    {
      label: "操作",
      fixed: "right",
      width: 100,
      slot: "operation"
    }
  ];

  function handleDelete(row) {
    ElMessageBox.confirm(
      `确认要 <strong>删除</strong> <strong style='color:var(--el-color-primary)'>
      ${row.title}</strong> 通知吗?`,
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
          // 将通知从 dataList 中删除
          const index = dataList.value.findIndex(item => item.id === row.id);
          if (index > -1) dataList.value.splice(index, 1);
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
    getNoticeList()
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
    handleDelete,
    handleSizeChange,
    handleCurrentChange
  };
}
