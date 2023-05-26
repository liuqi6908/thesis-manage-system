import { MockMethod } from "vite-plugin-mock";

const list = [
  {
    id: 1,
    oldTitle: "英文文本清理工具的设计与实现",
    newTitle: "文本清理工具的设计与实现",
    teacher: "吴老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  }
];

export default [
  {
    url: "/student/modifyList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: list
      };
    }
  }
] as MockMethod[];
