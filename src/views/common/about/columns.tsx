export function useColumns() {
  const { pkg, lastBuildTime } = __APP_INFO__;
  const { version } = pkg;
  const columns = [
    {
      label: "名称",
      cellRenderer: () => {
        return (
          <span style="color: var(--el-color-primary)">毕业论文管理系统</span>
        );
      }
    },
    {
      label: "版本",
      cellRenderer: () => {
        return <el-tag size="small">{version}</el-tag>;
      }
    },
    {
      label: "最后编译时间",
      cellRenderer: () => {
        return <el-tag size="small">{lastBuildTime}</el-tag>;
      }
    },
    {
      label: "预览地址",
      cellRenderer: () => {
        return (
          <a
            href="https://liuqi6908.github.io/thesis-manage-system/"
            target="_blank"
          >
            <span style="color: var(--el-color-primary)">预览地址</span>
          </a>
        );
      }
    },
    {
      label: "Github",
      cellRenderer: () => {
        return (
          <a
            href="https://github.com/liuqi6908/thesis-manage-system"
            target="_blank"
          >
            <span style="color: var(--el-color-primary)">Github</span>
          </a>
        );
      }
    }
  ];

  return {
    columns
  };
}
