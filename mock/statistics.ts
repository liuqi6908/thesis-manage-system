import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/processManagement",
    method: "post",
    response: () => {
      return {
        success: true,
        data: [
          {
            id: 12,
            dateTime: "2023-05-26",
            content: "答辩报告会"
          },
          {
            id: 11,
            dateTime: "2023-04-28",
            content: "毕业设计学术不端检测"
          },
          {
            id: 10,
            dateTime: "2023-04-27",
            content: "毕业论文（设计）校外评审"
          },
          {
            id: 9,
            dateTime: "2023-04-24",
            content: "毕业论文（设计）校外评审"
          },
          {
            id: 8,
            dateTime: "2023-04-11",
            content: "毕业设计期中检查"
          },
          {
            id: 7,
            dateTime: "2023-03-10",
            content: "开题报告会"
          },
          {
            id: 6,
            dateTime: "2023-02-28",
            content: "毕业设计学生学分核查"
          },
          {
            id: 5,
            dateTime: "2023-02-24",
            content: "审议替代论文学生成绩"
          },
          {
            id: 4,
            dateTime: "2023-02-22",
            content: "成立2023届本科毕业设计答辩委员会"
          },
          {
            id: 3,
            dateTime: "2022-12-26",
            content: "接收任务书"
          },
          {
            id: 2,
            dateTime: "2022-12-01",
            content: "毕业设计（论文）选题"
          },
          {
            id: 1,
            dateTime: "2022-11-30",
            content: "科研作品替代毕业论文（设计）"
          }
        ]
      };
    }
  }
] as MockMethod[];
