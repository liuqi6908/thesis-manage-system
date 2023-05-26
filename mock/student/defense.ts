import { MockMethod } from "vite-plugin-mock";

const list = [
  {
    id: 1,
    title: "英文文本清理工具的设计与实现",
    qualification_01: 1,
    teacherRemark: "",
    qualification_02: 1,
    desc: "",
    type: "开题报告",
    grade: 96,
    defenseRemark: "",
    groupNumber: "2019050524",
    date: "2023-03-08",
    time: "13:00-18:00",
    place: "第六教学楼",
    groupMembers: "李老师",
    username: "张同学",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052311",
    userNo: "19051101",
    englishTitle: "",
    teacher: "吴老师",
    evaluator: "李老师",
    createTime: 1609840000000
  },
  {
    id: 2,
    title: "英文文本清理工具的设计与实现",
    qualification_01: 1,
    teacherRemark: "",
    qualification_02: 1,
    desc: "",
    type: "论文",
    grade: null,
    defenseRemark: "",
    groupNumber: "2019050524",
    date: "2023-05-26",
    time: "8:30-12:00",
    place: "第六教学楼",
    groupMembers: "李老师",
    username: "张同学",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052311",
    userNo: "19051101",
    englishTitle: "",
    teacher: "吴老师",
    evaluator: "",
    createTime: 1609840000000
  }
];

export default [
  {
    url: "/student/defenseList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: list
      };
    }
  }
] as MockMethod[];
