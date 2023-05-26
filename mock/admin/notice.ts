import { MockMethod } from "vite-plugin-mock";

const data = [
  {
    id: 1,
    title: "关于2023届本科毕业设计学术不端检测的通知",
    datetime: "2023-04-28",
    description: "",
    link: "https://computer.hdu.edu.cn/2023/0428/c6764a245386/page.htm"
  },
  {
    id: 2,
    title: "关于做好2023届本科毕业论文（设计）自查和抽查工作的通知",
    datetime: "2023-04-27",
    description: "",
    link: "https://computer.hdu.edu.cn/2023/0427/c6764a245245/page.htm"
  },
  {
    id: 3,
    title: "关于2023届本科毕业设计答辩阶段的工作安排",
    datetime: "2023-04-25",
    description: "",
    link: "https://computer.hdu.edu.cn/2023/0425/c6764a245077/page.htm"
  },
  {
    id: 4,
    title: "关于开展2023届本科毕业论文（设计）校外评审工作的通知",
    datetime: "2023-04-24",
    description: "",
    link: "https://computer.hdu.edu.cn/2023/0424/c6764a245033/page.htm"
  },
  {
    id: 5,
    title: "关于开展2023届本科毕业设计期中检查的通知",
    datetime: "2023-04-11",
    description: "",
    link: "https://computer.hdu.edu.cn/2023/0411/c6764a243797/page.htm"
  },
  {
    id: 6,
    title: "关于2023届本科毕业设计经费报销的通知",
    datetime: "2023-03-30",
    description: "",
    link: "https://computer.hdu.edu.cn/2023/0330/c6764a243314/page.htm"
  },
  {
    id: 7,
    title: "关于2023届本科毕业设计开题时间地点的通知",
    datetime: "2023-03-01",
    description: "",
    link: "https://computer.hdu.edu.cn/2023/0301/c6764a242275/page.htm"
  },
  {
    id: 8,
    title: "关于2023届本科毕业设计学生学分核查结果公示",
    datetime: "2023-02-28",
    description: ""
  },
  {
    id: 9,
    title: "关于召开2023届本科毕业设计答辩委员会审议替代论文学生成绩会议的通知",
    datetime: "2023-02-24",
    description: ""
  },
  {
    id: 10,
    title: "关于成立2023届本科毕业设计答辩委员会的通知",
    datetime: "2023-02-22",
    description: ""
  },
  {
    id: 11,
    title: "关于做好2023届毕业设计（论文）工作的通知",
    datetime: "2023-02-15",
    description: ""
  },
  {
    id: 12,
    title: "关于2023届本科毕业设计选题情况及开题时间的通知",
    datetime: "2023-01-09",
    description: ""
  },
  {
    id: 13,
    title: "关于2023届本科毕业设计题目信息网上登录通知",
    datetime: "2022-12-19",
    description: ""
  },
  {
    id: 14,
    title: "关于2023届本科毕业设计（论文）工作计划的通知",
    datetime: "2022-12-02",
    description: ""
  },
  {
    id: 15,
    title: "关于做好2023届本科毕业设计（论文）选题工作的通知",
    datetime: "2022-12-01",
    description: ""
  },
  {
    id: 16,
    title: "关于2023届本科生科研作品替代毕业论文（设计）提前答辩通知",
    datetime: "2022-11-30",
    description: ""
  }
];

export default [
  {
    url: "/admin/getNoticeList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: data
      };
    }
  }
] as MockMethod[];
