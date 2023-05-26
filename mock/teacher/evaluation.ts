import { MockMethod } from "vite-plugin-mock";

const pendingReviewList = [
  {
    id: 1,
    title: "基于声音评价的语言学习辅助系统设计与实现",
    username: "赵同学",
    userNo: "19051504",
    gender: "男",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052315",
    url: "https://computer.hdu.edu.cn/_upload/article/files/c1/f7/bb7a07e141938f562825e881562f/2a2a73a1-9e58-4558-a68e-1e767ef6d080.doc",
    createTime: 1609840000000
  },
  {
    id: 2,
    title: "英文文本清理工具的设计与实现",
    username: "张同学",
    userNo: "19051101",
    gender: "男",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052311",
    url: "https://computer.hdu.edu.cn/_upload/article/files/c1/f7/bb7a07e141938f562825e881562f/2a2a73a1-9e58-4558-a68e-1e767ef6d080.doc",
    createTime: 1609840000000
  }
];

const getReviewedList = [
  {
    id: 1,
    title: "引入激励机制的英语在线学习系统设计与实现",
    username: "李同学",
    userNo: "19051808",
    gender: "男",
    college: "计算机学院",
    major: "计算机科学与技术",
    class: "19052318",
    url: "https://computer.hdu.edu.cn/_upload/article/files/c1/f7/bb7a07e141938f562825e881562f/2a2a73a1-9e58-4558-a68e-1e767ef6d080.doc",
    score: 94,
    createTime: 1609840000000
  }
];

export default [
  {
    url: "/teacher/getPendingReviewList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: pendingReviewList
      };
    }
  },
  {
    url: "/teacher/getReviewedList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: getReviewedList
      };
    }
  }
] as MockMethod[];
