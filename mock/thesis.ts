import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/thesisList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: [
          {
            id: 1,
            name: "病理性语音信号的分类研究",
            teacherName: "刘老师",
            total: 1,
            selected: 1,
            studentName: "张同学",
            studentNo: "19051101",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 2,
            name: "基于文本语义的可视化方法建模及系统设计",
            teacherName: "王老师",
            total: 1,
            selected: 1,
            studentName: "刘同学",
            studentNo: "19051102",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 3,
            name: "基于脑电EEG信号的睡眠分期识别方法研究",
            teacherName: "李老师",
            total: 1,
            selected: 1,
            studentName: "赵同学",
            studentNo: "19051103",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 4,
            name: "基于深度学习模型的语音情绪识别设计与实现",
            teacherName: "陈老师",
            total: 1,
            selected: 1,
            studentName: "钱同学",
            studentNo: "19051104",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 5,
            name: "基于EEG信号的视频偏好评价方法研究",
            teacherName: "赵老师",
            total: 1,
            selected: 1,
            studentName: "王同学",
            studentNo: "19051105",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 6,
            name: "EEG信号采集系统软件平台设计与实现",
            teacherName: "孙老师",
            total: 1,
            selected: 1,
            studentName: "李同学",
            studentNo: "19051106",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 7,
            name: "基于springboot和vue开发大学生体育测试管理系统设计与实现",
            teacherName: "郑老师",
            total: 1,
            selected: 1,
            studentName: "郑同学",
            studentNo: "19051107",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 8,
            name: "基于Spring与Vue的在线聊天室的设计与开发",
            teacherName: "刘老师",
            total: 1,
            selected: 1,
            studentName: "孙同学",
            studentNo: "19051108",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 9,
            name: "基于Golang的课室多媒体设备报障系统设计与实现",
            teacherName: "王老师",
            total: 1,
            selected: 1,
            studentName: "张同学",
            studentNo: "19051109",
            status: 3,
            createTime: 1609840000000
          },
          {
            id: 10,
            name: "基于微信小程序开发大学生体育课后锻炼系统设计与实现",
            teacherName: "李老师",
            total: 1,
            selected: 1,
            studentName: "刘同学",
            studentNo: "19051110",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 11,
            name: "基于springboot的在线社区供销系统设计与实现",
            teacherName: "陈老师",
            total: 1,
            selected: 1,
            studentName: "赵同学",
            studentNo: "19051201",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 12,
            name: "基于SpringBoot的人才培养系统设计与实现",
            teacherName: "赵老师",
            total: 1,
            selected: 1,
            studentName: "钱同学",
            studentNo: "19051202",
            status: 4,
            createTime: 1609840000000
          },
          {
            id: 13,
            name: "基于协同过滤算法的游戏虚拟物品交易平台的设计与实现",
            teacherName: "孙老师",
            total: 1,
            selected: 1,
            studentName: "王同学",
            studentNo: "19051203",
            status: 3,
            createTime: 1609840000000
          },
          {
            id: 14,
            name: "儿童托管管理系统设计与实现",
            teacherName: "郑老师",
            total: 1,
            selected: 1,
            studentName: "李同学",
            studentNo: "19051204",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 15,
            name: "基于MQTT的智能家居系统设计与实现",
            teacherName: "刘老师",
            total: 1,
            selected: 1,
            studentName: "郑同学",
            studentNo: "19051205",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 16,
            name: "基于ARM的嵌入式实验系统设计与实现",
            teacherName: "王老师",
            total: 1,
            selected: 1,
            studentName: "孙同学",
            studentNo: "19051206",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 17,
            name: "基于边缘计算的相片手绘化设计与实现",
            teacherName: "李老师",
            total: 1,
            selected: 1,
            studentName: "张同学",
            studentNo: "19051207",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 18,
            name: "基于深度学习的车牌识别与管理系统设计与实现",
            teacherName: "陈老师",
            total: 1,
            selected: 1,
            studentName: "刘同学",
            studentNo: "19051208",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 19,
            name: "基于双目立体视觉的机动车车距监测的设计与实现",
            teacherName: "赵老师",
            total: 1,
            selected: 1,
            studentName: "赵同学",
            studentNo: "19051209",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 20,
            name: "基于linux的嵌入式音视频智能监控系统设计与实现",
            teacherName: "孙老师",
            total: 1,
            selected: 1,
            studentName: "钱同学",
            studentNo: "19051210",
            status: 3,
            createTime: 1609840000000
          },
          {
            id: 21,
            name: "基于图像分割的视频会议场景构建软件设计与实现",
            teacherName: "郑老师",
            total: 1,
            selected: 1,
            studentName: "王同学",
            studentNo: "19051301",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 22,
            name: "基于声音评价的语言学习辅助系统设计与实现",
            teacherName: "刘老师",
            total: 1,
            selected: 1,
            studentName: "李同学",
            studentNo: "19051302",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 23,
            name: "3D思维导图编辑系统的设计与实现",
            teacherName: "王老师",
            total: 1,
            selected: 1,
            studentName: "郑同学",
            studentNo: "19051303",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 24,
            name: "基于Vue和nodejs的全栈跨境贸易系统设计与实现",
            teacherName: "李老师",
            total: 1,
            selected: 1,
            studentName: "孙同学",
            studentNo: "19051304",
            status: 3,
            createTime: 1609840000000
          },
          {
            id: 25,
            name: "基于node.js的在线练题应用的设计与实现",
            teacherName: "陈老师",
            total: 1,
            selected: 1,
            studentName: "张同学",
            studentNo: "19051305",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 26,
            name: "基于echarts的就业信息可视化站点的设计与实现",
            teacherName: "赵老师",
            total: 1,
            selected: 1,
            studentName: "刘同学",
            studentNo: "19051306",
            status: 4,
            createTime: 1609840000000
          },
          {
            id: 27,
            name: "基于视觉分析的多种类交通违法行为识别管理系统的设计与实现",
            teacherName: "孙老师",
            total: 1,
            selected: 1,
            studentName: "赵同学",
            studentNo: "19051307",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 28,
            name: "基于移动端的非遗传承平台的设计与实现",
            teacherName: "郑老师",
            total: 1,
            selected: 1,
            studentName: "钱同学",
            studentNo: "19051308",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 29,
            name: "基于Docker Compose的持续集成部署平台的设计与实现",
            teacherName: "刘老师",
            total: 1,
            selected: 1,
            studentName: "王同学",
            studentNo: "19051309",
            status: 3,
            createTime: 1609840000000
          },
          {
            id: 30,
            name: "弱监督下医学图像数据增强方法的设计与实现",
            teacherName: "王老师",
            total: 1,
            selected: 1,
            studentName: "李同学",
            studentNo: "19051310",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 31,
            name: "室内复杂场景3D点云构建方法的设计与实现",
            teacherName: "李老师",
            total: 1,
            selected: 1,
            studentName: "郑同学",
            studentNo: "19051401",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 32,
            name: "基于可移动相机视频目标识别及测距系统设计与实现",
            teacherName: "陈老师",
            total: 1,
            selected: 1,
            studentName: "孙同学",
            studentNo: "19051402",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 33,
            name: "基于ROS的智能小车室内目标识别及导航系统设计与实现",
            teacherName: "赵老师",
            total: 1,
            selected: 1,
            studentName: "张同学",
            studentNo: "19051403",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 34,
            name: "基于树莓派的智能小车障碍物识别及定位技术设计与实现",
            teacherName: "孙老师",
            total: 1,
            selected: 1,
            studentName: "刘同学",
            studentNo: "19051404",
            status: 3,
            createTime: 1609840000000
          },
          {
            id: 35,
            name: "基于仿生式算法的小车路径规划算法设计与实现",
            teacherName: "郑老师",
            total: 1,
            selected: 1,
            studentName: "赵同学",
            studentNo: "19051405",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 36,
            name: "四旋翼无人机运动学建模及仿真设计与实现",
            teacherName: "刘老师",
            total: 1,
            selected: 1,
            studentName: "钱同学",
            studentNo: "19051406",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 37,
            name: "基于视觉的无人机障碍物识别方法研究与实现",
            teacherName: "王老师",
            total: 1,
            selected: 1,
            studentName: "王同学",
            studentNo: "19051407",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 38,
            name: "基准测试数据的采集、分析与可视化系统设计与实现",
            teacherName: "李老师",
            total: 1,
            selected: 1,
            studentName: "李同学",
            studentNo: "19051408",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 39,
            name: "测试覆盖率数据的采集、分析与可视化系统设计与实现",
            teacherName: "陈老师",
            total: 1,
            selected: 1,
            studentName: "郑同学",
            studentNo: "19051409",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 40,
            name: "开源社区求助任务的采集、分析与可视化系统设计与实现",
            teacherName: "赵老师",
            total: 1,
            selected: 1,
            studentName: "孙同学",
            studentNo: "19051410",
            status: 3,
            createTime: 1609840000000
          },
          {
            id: 41,
            name: "开源软件开发流程数据的采集、分析与可视化系统设计与实现",
            teacherName: "孙老师",
            total: 1,
            selected: 1,
            studentName: "张同学",
            studentNo: "19051501",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 42,
            name: "开源社区wontfix任务的采集、分析与可视化系统设计与实现",
            teacherName: "郑老师",
            total: 1,
            selected: 1,
            studentName: "刘同学",
            studentNo: "19051502",
            status: 4,
            createTime: 1609840000000
          },
          {
            id: 43,
            name: "Steam游戏用户评论数据的采集、分析与可视化系统设计与实现",
            teacherName: "刘老师",
            total: 1,
            selected: 1,
            studentName: "赵同学",
            studentNo: "19051503",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 44,
            name: "Metacritic游戏专业评价数据的采集、分析与可视化系设计与实现",
            teacherName: "王老师",
            total: 1,
            selected: 1,
            studentName: "钱同学",
            studentNo: "19051504",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 45,
            name: "Steam游戏更新日志的采集、分析与可视化系统设计与实现",
            teacherName: "李老师",
            total: 1,
            selected: 1,
            studentName: "王同学",
            studentNo: "19051505",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 46,
            name: "基于JAVA的花卉识别系统的设计与实现",
            teacherName: "陈老师",
            total: 1,
            selected: 1,
            studentName: "李同学",
            studentNo: "19051506",
            status: 3,
            createTime: 1609840000000
          },
          {
            id: 47,
            name: "赋能共享充电宝商业拓展的CRM系统设计与实现",
            teacherName: "赵老师",
            total: 1,
            selected: 1,
            studentName: "郑同学",
            studentNo: "19051507",
            status: 0,
            createTime: 1609840000000
          },
          {
            id: 48,
            name: "基于深度学习的视频人像分割软件系统设计与实现",
            teacherName: "孙老师",
            total: 1,
            selected: 1,
            studentName: "孙同学",
            studentNo: "19051508",
            status: 1,
            createTime: 1609840000000
          },
          {
            id: 49,
            name: "城市道路交通信号灯调度系统设计与实现",
            teacherName: "郑老师",
            total: 1,
            selected: 1,
            studentName: "张同学",
            studentNo: "19051509",
            status: 2,
            createTime: 1609840000000
          },
          {
            id: 50,
            name: "算法调用服务化系统的设计与实现",
            teacherName: "刘老师",
            total: 1,
            selected: 1,
            studentName: "刘同学",
            studentNo: "19051510",
            status: 1,
            createTime: 1609840000000
          }
        ]
      };
    }
  },
  {
    url: "/evaluationList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: [
          {
            id: 1,
            name: "病理性语音信号的分类研究",
            teacherName: "刘老师",
            studentName: "张同学",
            studentNo: "19051101",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 2,
            name: "基于文本语义的可视化方法建模及系统设计",
            teacherName: "王老师",
            studentName: "刘同学",
            studentNo: "19051102",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 3,
            name: "基于脑电EEG信号的睡眠分期识别方法研究",
            teacherName: "李老师",
            studentName: "赵同学",
            studentNo: "19051103",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 4,
            name: "基于深度学习模型的语音情绪识别设计与实现",
            teacherName: "陈老师",
            studentName: "钱同学",
            studentNo: "19051104",
            status: 3,
            feedback: "论文字数不足，打回修改",
            createTime: 1609840000000
          },
          {
            id: 5,
            name: "基于EEG信号的视频偏好评价方法研究",
            teacherName: "赵老师",
            studentName: "王同学",
            studentNo: "19051105",
            status: 4,
            feedback: "严重违规违纪，不予答辩",
            createTime: 1609840000000
          },
          {
            id: 6,
            name: "EEG信号采集系统软件平台设计与实现",
            teacherName: "孙老师",
            studentName: "李同学",
            studentNo: "19051106",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 7,
            name: "基于springboot和vue开发大学生体育测试管理系统设计与实现",
            teacherName: "郑老师",
            studentName: "郑同学",
            studentNo: "19051107",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 8,
            name: "基于Spring与Vue的在线聊天室的设计与开发",
            teacherName: "刘老师",
            studentName: "孙同学",
            studentNo: "19051108",
            status: 3,
            feedback: "论文字数不足，打回修改",
            createTime: 1609840000000
          },
          {
            id: 9,
            name: "基于Golang的课室多媒体设备报障系统设计与实现",
            teacherName: "王老师",
            studentName: "张同学",
            studentNo: "19051109",
            status: 3,
            feedback: "论文格式不符合要求，打回修改",
            createTime: 1609840000000
          },
          {
            id: 10,
            name: "基于微信小程序开发大学生体育课后锻炼系统设计与实现",
            teacherName: "李老师",
            studentName: "刘同学",
            studentNo: "19051110",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 11,
            name: "基于springboot的在线社区供销系统设计与实现",
            teacherName: "陈老师",
            studentName: "赵同学",
            studentNo: "19051201",
            status: 3,
            feedback: "论文格式不符合要求，打回修改",
            createTime: 1609840000000
          },
          {
            id: 12,
            name: "基于SpringBoot的人才培养系统设计与实现",
            teacherName: "赵老师",
            studentName: "钱同学",
            studentNo: "19051202",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 13,
            name: "基于协同过滤算法的游戏虚拟物品交易平台的设计与实现",
            teacherName: "孙老师",
            studentName: "王同学",
            studentNo: "19051203",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 14,
            name: "儿童托管管理系统设计与实现",
            teacherName: "郑老师",
            studentName: "李同学",
            studentNo: "19051204",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 15,
            name: "基于MQTT的智能家居系统设计与实现",
            teacherName: "刘老师",
            studentName: "郑同学",
            studentNo: "19051205",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 16,
            name: "基于ARM的嵌入式实验系统设计与实现",
            teacherName: "王老师",
            studentName: "孙同学",
            studentNo: "19051206",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 17,
            name: "基于边缘计算的相片手绘化设计与实现",
            teacherName: "李老师",
            studentName: "张同学",
            studentNo: "19051207",
            status: 3,
            feedback: "论文格式不符合要求，打回修改",
            createTime: 1609840000000
          },
          {
            id: 18,
            name: "基于深度学习的车牌识别与管理系统设计与实现",
            teacherName: "陈老师",
            studentName: "刘同学",
            studentNo: "19051208",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 19,
            name: "基于双目立体视觉的机动车车距监测的设计与实现",
            teacherName: "赵老师",
            studentName: "赵同学",
            studentNo: "19051209",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 20,
            name: "基于linux的嵌入式音视频智能监控系统设计与实现",
            teacherName: "孙老师",
            studentName: "钱同学",
            studentNo: "19051210",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 21,
            name: "基于图像分割的视频会议场景构建软件设计与实现",
            teacherName: "郑老师",
            studentName: "王同学",
            studentNo: "19051301",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 22,
            name: "基于声音评价的语言学习辅助系统设计与实现",
            teacherName: "刘老师",
            studentName: "李同学",
            studentNo: "19051302",
            status: 3,
            feedback: "论文字数不足，打回修改",
            createTime: 1609840000000
          },
          {
            id: 23,
            name: "3D思维导图编辑系统的设计与实现",
            teacherName: "王老师",
            studentName: "郑同学",
            studentNo: "19051303",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 24,
            name: "基于Vue和nodejs的全栈跨境贸易系统设计与实现",
            teacherName: "李老师",
            studentName: "孙同学",
            studentNo: "19051304",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 25,
            name: "基于node.js的在线练题应用的设计与实现",
            teacherName: "陈老师",
            studentName: "张同学",
            studentNo: "19051305",
            status: 3,
            feedback: "论文格式不符合要求，打回修改",
            createTime: 1609840000000
          },
          {
            id: 26,
            name: "基于echarts的就业信息可视化站点的设计与实现",
            teacherName: "赵老师",
            studentName: "刘同学",
            studentNo: "19051306",
            status: 4,
            feedback: "严重违规违纪，不予答辩",
            createTime: 1609840000000
          },
          {
            id: 27,
            name: "基于视觉分析的多种类交通违法行为识别管理系统的设计与实现",
            teacherName: "孙老师",
            studentName: "赵同学",
            studentNo: "19051307",
            status: 2,
            feedback: "达到要求，通过",
            createTime: 1609840000000
          },
          {
            id: 28,
            name: "基于移动端的非遗传承平台的设计与实现",
            teacherName: "郑老师",
            studentName: "钱同学",
            studentNo: "19051308",
            status: 3,
            feedback: "论文字数不足，打回修改",
            createTime: 1609840000000
          }
        ]
      };
    }
  }
] as MockMethod[];
