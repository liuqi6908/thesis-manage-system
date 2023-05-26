import { MockMethod } from "vite-plugin-mock";
const list = [
  {
    id: 1,
    username: "王同学",
    userNo: "19051205",
    gender: "女",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052312",
    title: "EEG信号采集系统软件平台设计与实现",
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 2,
    username: "赵同学",
    userNo: "19051504",
    gender: "男",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052315",
    title: "基于声音评价的语言学习辅助系统设计与实现",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 3,
    username: "张同学",
    userNo: "19051101",
    gender: "男",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052311",
    title: "英文文本清理工具的设计与实现",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 4,
    username: "李同学",
    userNo: "19051808",
    gender: "男",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052318",
    title: "引入激励机制的英语在线学习系统设计与实现",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 5,
    username: "刘同学",
    userNo: "19051605",
    gender: "男",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052316",
    title: "基于Stable Diffusion的AIGC模型部署与测试设计与实现",
    status: 2,
    createTime: 1609840000000
  }
];

export default [
  {
    url: "/teacher/getStudentList",
    method: "post",
    response: ({ body }) => {
      return {
        success: true,
        data: list.filter(item => {
          if (body && [0, 1, 2].includes(body.status))
            return item.status === body.status;
          else return true;
        })
      };
    }
  }
] as MockMethod[];
