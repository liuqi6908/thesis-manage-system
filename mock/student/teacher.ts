import { MockMethod } from "vite-plugin-mock";

const teacher = [
  {
    label: "姓名",
    field: "吴老师"
  },
  {
    label: "职工号",
    field: "0523175"
  },
  {
    label: "身份",
    field: "教师"
  },
  {
    label: "性别",
    field: "男"
  },
  {
    label: "学院",
    field: "计算机学院"
  },
  {
    label: "职称",
    field: "教授"
  },
  {
    label: "手机号",
    field: "17888886666"
  },
  {
    label: "电子邮箱",
    field: "liu6666@163.com"
  }
];

const list = [
  {
    id: 1,
    oldTitle: "英文文本清理工具的设计与实现",
    oldTeacher: "吴老师",
    newTeacher: "赵老师",
    status: 0,
    createTime: 1609840000000
  }
];

export default [
  {
    url: "/student/applyList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: list
      };
    }
  },
  {
    url: "/student/teacherInfo",
    method: "post",
    response: () => {
      return {
        success: true,
        data: teacher
      };
    }
  }
] as MockMethod[];
