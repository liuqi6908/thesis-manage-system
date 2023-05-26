import { MockMethod } from "vite-plugin-mock";

const list = [
  {
    id: 1,
    title: "英文文本清理工具的设计与实现",
    username: "张同学",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052311",
    userNo: "19051101",
    teacher: "吴老师",
    score: "优",
    url: "https://computer.hdu.edu.cn/_upload/article/files/53/55/cf1e8ba74d9c9650acf9e1874ce4/77816312-9e19-4b01-b57e-9254eacf5f0e.docx",
    createTime: 1609840000000
  }
];

export default [
  {
    url: "/student/scoreList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: list
      };
    }
  }
] as MockMethod[];
