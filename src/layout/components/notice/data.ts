export interface ListItem {
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  description: string;
  link?: string;
  status?: "" | "success" | "warning" | "info" | "danger";
  extra?: string;
}

export interface TabItem {
  notice: ListItem[];
  task: ListItem[];
  completed: ListItem[];
}

export const noticesData: TabItem = {
  notice: [
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于2023届本科毕业设计学术不端检测的通知",
      datetime: "2023-04-28",
      description: "",
      link: "https://computer.hdu.edu.cn/2023/0428/c6764a245386/page.htm",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于做好2023届本科毕业论文（设计）自查和抽查工作的通知",
      datetime: "2023-04-27",
      description: "",
      link: "https://computer.hdu.edu.cn/2023/0427/c6764a245245/page.htm",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于2023届本科毕业设计答辩阶段的工作安排",
      datetime: "2023-04-25",
      description: "",
      link: "https://computer.hdu.edu.cn/2023/0425/c6764a245077/page.htm",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于开展2023届本科毕业论文（设计）校外评审工作的通知",
      datetime: "2023-04-24",
      description: "",
      link: "https://computer.hdu.edu.cn/2023/0424/c6764a245033/page.htm",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于开展2023届本科毕业设计期中检查的通知",
      datetime: "2023-04-11",
      description: "",
      link: "https://computer.hdu.edu.cn/2023/0411/c6764a243797/page.htm",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于2023届本科毕业设计经费报销的通知",
      datetime: "2023-03-30",
      description: "",
      link: "https://computer.hdu.edu.cn/2023/0330/c6764a243314/page.htm",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于2023届本科毕业设计开题时间地点的通知",
      datetime: "2023-03-01",
      description: "",
      link: "https://computer.hdu.edu.cn/2023/0301/c6764a242275/page.htm",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于2023届本科毕业设计学生学分核查结果公示",
      datetime: "2023-02-28",
      description: "",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title:
        "关于召开2023届本科毕业设计答辩委员会审议替代论文学生成绩会议的通知",
      datetime: "2023-02-24",
      description: "",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于成立2023届本科毕业设计答辩委员会的通知",
      datetime: "2023-02-22",
      description: "",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于做好2023届毕业设计（论文）工作的通知",
      datetime: "2023-02-15",
      description: "",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于2023届本科毕业设计选题情况及开题时间的通知",
      datetime: "2023-01-09",
      description: "",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于2023届本科毕业设计题目信息网上登录通知",
      datetime: "2022-12-19",
      description: "",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于2023届本科毕业设计（论文）工作计划的通知",
      datetime: "2022-12-02",
      description: "",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于做好2023届本科毕业设计（论文）选题工作的通知",
      datetime: "2022-12-01",
      description: "",
      type: "1"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "关于2023届本科生科研作品替代毕业论文（设计）提前答辩通知",
      datetime: "2022-11-30",
      description: "",
      type: "1"
    }
  ],
  task: [
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      title: "答辩报告会",
      description: "",
      datetime: "2023.5.26-2023.5.29",
      extra: "未开始",
      status: "info",
      type: "2"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      title: "论文自查、专家抽查论文",
      description: "",
      datetime: "2023.5.20-2023.5.25",
      extra: "未开始",
      status: "info",
      type: "2"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      title: "论文审核及查重",
      description: "",
      datetime: "2023.5.13-2023.5.19",
      extra: "未开始",
      status: "info",
      type: "2"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      title: "系统调试检查与论文定稿",
      description: "",
      datetime: "2023.5.06-2023.5.12",
      extra: "进行中",
      type: "2"
    },
    {
      avatar:
        "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      title: "毕业论文撰写",
      description: "",
      datetime: "2023.4.14-2023.5.09",
      extra: "即将到期",
      status: "danger",
      type: "2"
    }
  ],
  completed: [
    {
      avatar: "",
      title: "系统设计与实现",
      description: "",
      datetime: "2023.3.13-2023.5.05",
      extra: "已完成",
      status: "success",
      type: "3"
    },
    {
      avatar: "",
      title: "开题报告会",
      description: "",
      datetime: "2023.3.6-2023.3.12",
      extra: "已完成",
      status: "success",
      type: "3"
    },
    {
      avatar: "",
      title: "搜集资料，准备开题报告",
      description: "",
      datetime: "2023.1.10-2023.3.5",
      extra: "已完成",
      status: "success",
      type: "3"
    },
    {
      avatar: "",
      title: "接受任务书",
      description: "",
      datetime: "2022.12.26-2023.1.9",
      extra: "已完成",
      status: "success",
      type: "3"
    },
    {
      avatar: "",
      title: "选好毕业设计题目并准备相关资料",
      description: "",
      datetime: "2022.12.2-2022.12.25",
      extra: "已完成",
      status: "success",
      type: "3"
    }
  ]
};
