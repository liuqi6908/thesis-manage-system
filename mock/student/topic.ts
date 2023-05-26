import { MockMethod } from "vite-plugin-mock";

const list = [
  {
    id: 1,
    title: "病理性语音信号的分类研究",
    teacher: "赵老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 2,
    title: "基于文本语义的可视化方法建模及系统设计",
    teacher: "钱老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 3,
    title: "基于脑电EEG信号的睡眠分期识别方法研究",
    teacher: "孙老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 4,
    title: "基于深度学习模型的语音情绪识别设计与实现",
    teacher: "李老师",
    total: 1,
    status: 2,
    createTime: 1609840000000
  },
  {
    id: 5,
    title: "基于EEG信号的视频偏好评价方法研究",
    teacher: "周老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 6,
    title: "EEG信号采集系统软件平台设计与实现",
    teacher: "吴老师",
    total: 1,
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 7,
    title: "基于springboot和vue开发大学生体育测试管理系统设计与实现",
    teacher: "郑老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 8,
    title: "基于Spring与Vue的在线聊天室的设计与开发",
    teacher: "王老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 9,
    title: "基于Golang的课室多媒体设备报障系统设计与实现",
    teacher: "冯老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 10,
    title: "基于微信小程序开发大学生体育课后锻炼系统设计与实现",
    teacher: "陈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 11,
    title: "基于springboot的在线社区供销系统设计与实现",
    teacher: "褚老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 12,
    title: "基于SpringBoot的人才培养系统设计与实现",
    teacher: "卫老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 13,
    title: "基于协同过滤算法的游戏虚拟物品交易平台的设计与实现",
    teacher: "蒋老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 14,
    title: "儿童托管管理系统设计与实现",
    teacher: "沈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 15,
    title: "基于MQTT的智能家居系统设计与实现",
    teacher: "韩老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 16,
    title: "基于ARM的嵌入式实验系统设计与实现",
    teacher: "杨老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 17,
    title: "基于边缘计算的相片手绘化设计与实现",
    teacher: "赵老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 18,
    title: "基于深度学习的车牌识别与管理系统设计与实现",
    teacher: "钱老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 19,
    title: "基于双目立体视觉的机动车车距监测的设计与实现",
    teacher: "孙老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 20,
    title: "基于linux的嵌入式音视频智能监控系统设计与实现",
    teacher: "李老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 21,
    title: "基于图像分割的视频会议场景构建软件设计与实现",
    teacher: "周老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 22,
    title: "基于声音评价的语言学习辅助系统设计与实现",
    teacher: "吴老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 23,
    title: "3D思维导图编辑系统的设计与实现",
    teacher: "郑老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 24,
    title: "基于Vue和nodejs的全栈跨境贸易系统设计与实现",
    teacher: "王老师",
    total: 1,
    status: 3,
    createTime: 1609840000000
  },
  {
    id: 25,
    title: "基于node.js的在线练题应用的设计与实现",
    teacher: "冯老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 26,
    title: "基于echarts的就业信息可视化站点的设计与实现",
    teacher: "陈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 27,
    title: "基于视觉分析的多种类交通违法行为识别管理系统的设计与实现",
    teacher: "褚老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 28,
    title: "基于移动端的非遗传承平台的设计与实现",
    teacher: "卫老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 29,
    title: "基于Docker Compose的持续集成部署平台的设计与实现",
    teacher: "蒋老师",
    total: 1,
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 30,
    title: "弱监督下医学图像数据增强方法的设计与实现",
    teacher: "沈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 31,
    title: "室内复杂场景3D点云构建方法的设计与实现",
    teacher: "韩老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 32,
    title: "基于可移动相机视频目标识别及测距系统设计与实现",
    teacher: "杨老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 33,
    title: "基于ROS的智能小车室内目标识别及导航系统设计与实现",
    teacher: "赵老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 34,
    title: "基于树莓派的智能小车障碍物识别及定位技术设计与实现",
    teacher: "钱老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 35,
    title: "基于仿生式算法的小车路径规划算法设计与实现",
    teacher: "孙老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 36,
    title: "四旋翼无人机运动学建模及仿真设计与实现",
    teacher: "李老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 37,
    title: "基于视觉的无人机障碍物识别方法研究与实现",
    teacher: "周老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 38,
    title: "基准测试数据的采集、分析与可视化系统设计与实现",
    teacher: "吴老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 39,
    title: "测试覆盖率数据的采集、分析与可视化系统设计与实现",
    teacher: "郑老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 40,
    title: "开源社区求助任务的采集、分析与可视化系统设计与实现",
    teacher: "王老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 41,
    title: "开源软件开发流程数据的采集、分析与可视化系统设计与实现",
    teacher: "冯老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 42,
    title: "开源社区wontfix任务的采集、分析与可视化系统设计与实现",
    teacher: "陈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 43,
    title: "Steam游戏用户评论数据的采集、分析与可视化系统设计与实现",
    teacher: "褚老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 44,
    title: "Metacritic游戏专业评价数据的采集、分析与可视化系设计与实现",
    teacher: "卫老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 45,
    title: "Steam游戏更新日志的采集、分析与可视化系统设计与实现",
    teacher: "蒋老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 46,
    title: "基于JAVA的花卉识别系统的设计与实现",
    teacher: "沈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 47,
    title: "赋能共享充电宝商业拓展的CRM系统设计与实现",
    teacher: "韩老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 48,
    title: "基于深度学习的视频人像分割软件系统设计与实现",
    teacher: "杨老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 49,
    title: "城市道路交通信号灯调度系统设计与实现",
    teacher: "赵老师",
    total: 1,
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 50,
    title: "算法调用服务化系统的设计与实现",
    teacher: "钱老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 51,
    title: "基于深度学习的主板缺陷检测系统设计与实现",
    teacher: "孙老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 52,
    title: "羽毛球场地预约和管理系统的设计与实现",
    teacher: "李老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 53,
    title: "考研数学刷题小程序的设计与实现",
    teacher: "周老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 54,
    title: "英文文本清理工具的设计与实现",
    teacher: "吴老师",
    total: 1,
    status: 4,
    createTime: 1609840000000
  },
  {
    id: 55,
    title: "研究生导师信息分享平台的设计与实现",
    teacher: "郑老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 56,
    title: "基于SpringBoot的校园快递代领平台设计与实现",
    teacher: "王老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 57,
    title: "基于容器化技术的机器学习运维自动化系统设计与实现",
    teacher: "冯老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 58,
    title: "智能出行规划小助手的设计与实现",
    teacher: "陈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 59,
    title: "通用游戏化学习平台的设计与实现",
    teacher: "褚老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 60,
    title: "基于Vue的校园招聘平台的设计与实现",
    teacher: "卫老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 61,
    title: "基于低代码生成技术的脑电信号分析平台设计与实现",
    teacher: "蒋老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 62,
    title: "基于Web的物流管理系统的设计与开发",
    teacher: "沈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 63,
    title: "基于ASP的反垃圾邮件管理系统的设计与实现",
    teacher: "韩老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 64,
    title: "BBS论坛管理系统的设计与实现",
    teacher: "杨老师",
    total: 1,
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 65,
    title: "毕业论文管理系统设计与实现",
    teacher: "赵老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 66,
    title: "小型企业办公耗材库存管理软件的设计与实现",
    teacher: "钱老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 67,
    title: "智能网吧管理系统的设计与分析",
    teacher: "孙老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 68,
    title: "车队调度管理系统的设计与实现",
    teacher: "李老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 69,
    title: "人事工资管理系统的设计与分析",
    teacher: "周老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 70,
    title: "引入激励机制的英语在线学习系统设计与实现",
    teacher: "吴老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 71,
    title: "基于微信二维码的课堂自助签到系统设计与实现",
    teacher: "郑老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 72,
    title: "基于微信小程序的助宠系统设计与实现",
    teacher: "王老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 73,
    title: "基于校企合作的产教融合质量管理系统设计与实现",
    teacher: "冯老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 74,
    title: "疫情防控信息填报与收集系统设计与实现",
    teacher: "陈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 75,
    title: "医院患者满意度问卷调查系统设计与实现",
    teacher: "褚老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 76,
    title: "面向高校就业管理的数据可视化系统设计与实现",
    teacher: "卫老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 77,
    title: "评奖管理系统设计与实现",
    teacher: "蒋老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 78,
    title: "基于稀疏特征的MRI图像压缩感知系统设计与实现",
    teacher: "沈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 79,
    title: "基于多种图像复原任务的照片修复系统开发",
    teacher: "韩老师",
    total: 1,
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 80,
    title: "针对夜景图像的图像增强系统设计",
    teacher: "杨老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 81,
    title: "基于关键点检测的健身指导系统开发",
    teacher: "赵老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 82,
    title: "基于菜品识别的美食推荐系统开发",
    teacher: "钱老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 83,
    title: "数据中心流量时序预测算法设计与实现",
    teacher: "孙老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 84,
    title: "云原生分时调度算法设计与实现",
    teacher: "李老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 85,
    title: "基于Hugging face预训练模型的新闻标题智能生成系统设计与实现",
    teacher: "周老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 86,
    title: "基于Stable Diffusion的AIGC模型部署与测试设计与实现",
    teacher: "吴老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 87,
    title: "新闻图片按需智能裁切方法设计与实现",
    teacher: "郑老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 88,
    title: "陪伴学习虚拟自习室APP设计实现",
    teacher: "王老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 89,
    title: "陪伴学习在线智能推荐系统设计与实现",
    teacher: "冯老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 90,
    title: "冷链物联网管理平台设计及实现",
    teacher: "陈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 91,
    title: "智慧停车场预约管理系统设计及实现",
    teacher: "褚老师",
    total: 1,
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 92,
    title: "城市公交线路智能查询系统设计及实现",
    teacher: "卫老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 93,
    title: "矿井设备监测管理系统设计与实现",
    teacher: "蒋老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 94,
    title: "超市管理系统设计及实现",
    teacher: "沈老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 95,
    title: "房屋租赁管理系统设计与实现",
    teacher: "韩老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 96,
    title: "基于人脸识别的身份验证系统设计及实现",
    teacher: "杨老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 97,
    title: "外卖订餐平台设计与实现",
    teacher: "赵老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 98,
    title: "三维物体重建算法研究与实现",
    teacher: "钱老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 99,
    title: "基于引擎的三维可视化工具设计与开发",
    teacher: "孙老师",
    total: 1,
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 100,
    title: "相机标定软件工具设计与开发",
    teacher: "李老师",
    total: 1,
    status: 0,
    createTime: 1609840000000
  }
];

export default [
  {
    url: "/student/topicList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: list
      };
    }
  },
  {
    url: "/student/topicSelect",
    method: "post",
    response: ({ body }) => {
      return {
        success: true,
        data: list.filter(item => {
          if (
            ![0, 1, 2, 3, 4].includes(body.status) &&
            item.status !== 0 &&
            item.status !== 1
          )
            return item;
          else if (
            [0, 1, 2, 3, 4].includes(body.status) &&
            item.status === body.status
          )
            return item;
        })
      };
    }
  }
] as MockMethod[];
