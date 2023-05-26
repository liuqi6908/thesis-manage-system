import { MockMethod } from "vite-plugin-mock";

const list = [
  {
    id: 1,
    username: "张同学",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052311",
    userNo: "19051101",
    title: "英文文本清理工具的设计与实现",
    teacher: "吴老师",
    createTime: 1609840000000
  }
];

const data = [
  {
    title: "英文文本清理工具的设计与实现",
    data: [
      {
        name: "开题报告",
        fileName: "张同学-19051101-开题报告.doc",
        fileUrl:
          "https://computer.hdu.edu.cn/_upload/article/files/c1/f7/bb7a07e141938f562825e881562f/2a2a73a1-9e58-4558-a68e-1e767ef6d080.doc",
        feedback: "",
        username: "张同学",
        createTime: 1609840000000
      },
      {
        name: "任务书",
        fileName: "张同学-19051101-任务书.doc",
        fileUrl:
          "https://computer.hdu.edu.cn/_upload/article/files/26/39/91edb2494b89906086c20e91beb3/05ed9b87-6811-429b-b2d6-bfa54b82307d.doc",
        feedback: "请尽快下载任务书！",
        username: "吴老师",
        createTime: 1609840000000
      }
    ]
  }
];

export default [
  {
    url: "/student/thesisList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: list
      };
    }
  },
  {
    url: "/student/thesisData",
    method: "post",
    response: ({ body }) => {
      return {
        success: true,
        data: data.filter(item => {
          if (item.title === body.title) return item;
        })[0]?.data
      };
    }
  }
] as MockMethod[];
