import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/pendingReview",
    method: "post",
    response: ({ body }) => {
      const list = [
        {
          id: 1,
          thesis: "病理性语音信号的分类研究",
          teacherNo: "teacher",
          studentName: "张同学",
          studentNo: "19051101",
          createTime: 1609840000000
        },
        {
          id: 2,
          thesis: "基于文本语义的可视化方法建模及系统设计",
          teacherNo: "teacher01",
          studentName: "刘同学",
          studentNo: "19051102",
          createTime: 1609840000000
        },
        {
          id: 3,
          thesis: "基于脑电EEG信号的睡眠分期识别方法研究",
          teacherNo: "teacher02",
          studentName: "赵同学",
          studentNo: "19051103",
          createTime: 1609840000000
        },
        {
          id: 4,
          thesis: "基于深度学习模型的语音情绪识别设计与实现",
          teacherNo: "teacher03",
          studentName: "钱同学",
          studentNo: "19051104",
          createTime: 1609840000000
        },
        {
          id: 5,
          thesis: "基于EEG信号的视频偏好评价方法研究",
          teacherNo: "teacher04",
          studentName: "王同学",
          studentNo: "19051105",
          createTime: 1609840000000
        },
        {
          id: 6,
          thesis: "EEG信号采集系统软件平台设计与实现",
          teacherNo: "teacher05",
          studentName: "李同学",
          studentNo: "19051106",
          createTime: 1609840000000
        },
        {
          id: 7,
          thesis: "基于springboot和vue开发大学生体育测试管理系统设计与实现",
          teacherNo: "teacher06",
          studentName: "郑同学",
          studentNo: "19051107",
          createTime: 1609840000000
        },
        {
          id: 8,
          thesis: "基于Spring与Vue的在线聊天室的设计与开发",
          teacherNo: "teacher",
          studentName: "孙同学",
          studentNo: "19051108",
          createTime: 1609840000000
        },
        {
          id: 9,
          thesis: "基于Golang的课室多媒体设备报障系统设计与实现",
          teacherNo: "teacher01",
          studentName: "张同学",
          studentNo: "19051109",
          createTime: 1609840000000
        },
        {
          id: 10,
          thesis: "基于微信小程序开发大学生体育课后锻炼系统设计与实现",
          teacherNo: "teacher02",
          studentName: "刘同学",
          studentNo: "19051110",
          createTime: 1609840000000
        },
        {
          id: 11,
          thesis: "基于springboot的在线社区供销系统设计与实现",
          teacherNo: "teacher03",
          studentName: "赵同学",
          studentNo: "19051201",
          createTime: 1609840000000
        },
        {
          id: 12,
          thesis: "基于SpringBoot的人才培养系统设计与实现",
          teacherNo: "teacher04",
          studentName: "钱同学",
          studentNo: "19051202",
          createTime: 1609840000000
        },
        {
          id: 13,
          thesis: "基于协同过滤算法的游戏虚拟物品交易平台的设计与实现",
          teacherNo: "teacher05",
          studentName: "王同学",
          studentNo: "19051203",
          createTime: 1609840000000
        },
        {
          id: 14,
          thesis: "儿童托管管理系统设计与实现",
          teacherNo: "teacher06",
          studentName: "李同学",
          studentNo: "19051204",
          createTime: 1609840000000
        },
        {
          id: 15,
          thesis: "基于MQTT的智能家居系统设计与实现",
          teacherNo: "teacher",
          studentName: "郑同学",
          studentNo: "19051205",
          createTime: 1609840000000
        },
        {
          id: 16,
          thesis: "基于ARM的嵌入式实验系统设计与实现",
          teacherNo: "teacher01",
          studentName: "孙同学",
          studentNo: "19051206",
          createTime: 1609840000000
        },
        {
          id: 17,
          thesis: "基于边缘计算的相片手绘化设计与实现",
          teacherNo: "teacher02",
          studentName: "张同学",
          studentNo: "19051207",
          createTime: 1609840000000
        },
        {
          id: 18,
          thesis: "基于深度学习的车牌识别与管理系统设计与实现",
          teacherNo: "teacher03",
          studentName: "刘同学",
          studentNo: "19051208",
          createTime: 1609840000000
        },
        {
          id: 19,
          thesis: "基于双目立体视觉的机动车车距监测的设计与实现",
          teacherNo: "teacher04",
          studentName: "赵同学",
          studentNo: "19051209",
          createTime: 1609840000000
        },
        {
          id: 20,
          thesis: "基于linux的嵌入式音视频智能监控系统设计与实现",
          teacherNo: "teacher05",
          studentName: "钱同学",
          studentNo: "19051210",
          createTime: 1609840000000
        }
      ];
      return {
        success: true,
        data: list.filter(item => item.teacherNo === body.userNo)
      };
    }
  },
  {
    url: "/reviewed",
    method: "post",
    response: ({ body }) => {
      const list = [
        {
          id: 1,
          thesis: "病理性语音信号的分类研究",
          teacherNo: "teacher",
          studentName: "张同学",
          studentNo: "19051101",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 2,
          thesis: "基于文本语义的可视化方法建模及系统设计",
          teacherNo: "teacher01",
          studentName: "刘同学",
          studentNo: "19051102",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 3,
          thesis: "基于脑电EEG信号的睡眠分期识别方法研究",
          teacherNo: "teacher02",
          studentName: "赵同学",
          studentNo: "19051103",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 4,
          thesis: "基于深度学习模型的语音情绪识别设计与实现",
          teacherNo: "teacher03",
          studentName: "钱同学",
          studentNo: "19051104",
          status: 3,
          feedback: "论文字数不足，打回修改",
          createTime: 1609840000000
        },
        {
          id: 5,
          thesis: "基于EEG信号的视频偏好评价方法研究",
          teacherNo: "teacher04",
          studentName: "王同学",
          studentNo: "19051105",
          status: 4,
          feedback: "严重违规违纪，不予答辩",
          createTime: 1609840000000
        },
        {
          id: 6,
          thesis: "EEG信号采集系统软件平台设计与实现",
          teacherNo: "teacher05",
          studentName: "李同学",
          studentNo: "19051106",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 7,
          thesis: "基于springboot和vue开发大学生体育测试管理系统设计与实现",
          teacherNo: "teacher06",
          studentName: "郑同学",
          studentNo: "19051107",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 8,
          thesis: "基于Spring与Vue的在线聊天室的设计与开发",
          teacherNo: "teacher",
          studentName: "孙同学",
          studentNo: "19051108",
          status: 3,
          feedback: "论文字数不足，打回修改",
          createTime: 1609840000000
        },
        {
          id: 9,
          thesis: "基于Golang的课室多媒体设备报障系统设计与实现",
          teacherNo: "teacher01",
          studentName: "张同学",
          studentNo: "19051109",
          status: 3,
          feedback: "论文格式不符合要求，打回修改",
          createTime: 1609840000000
        },
        {
          id: 10,
          thesis: "基于微信小程序开发大学生体育课后锻炼系统设计与实现",
          teacherNo: "teacher02",
          studentName: "刘同学",
          studentNo: "19051110",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 11,
          thesis: "基于springboot的在线社区供销系统设计与实现",
          teacherNo: "teacher03",
          studentName: "赵同学",
          studentNo: "19051201",
          status: 3,
          feedback: "论文格式不符合要求，打回修改",
          createTime: 1609840000000
        },
        {
          id: 12,
          thesis: "基于SpringBoot的人才培养系统设计与实现",
          teacherNo: "teacher04",
          studentName: "钱同学",
          studentNo: "19051202",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 13,
          thesis: "基于协同过滤算法的游戏虚拟物品交易平台的设计与实现",
          teacherNo: "teacher05",
          studentName: "王同学",
          studentNo: "19051203",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 14,
          thesis: "儿童托管管理系统设计与实现",
          teacherNo: "teacher06",
          studentName: "李同学",
          studentNo: "19051204",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 15,
          thesis: "基于MQTT的智能家居系统设计与实现",
          teacherNo: "teacher",
          studentName: "郑同学",
          studentNo: "19051205",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 16,
          thesis: "基于ARM的嵌入式实验系统设计与实现",
          teacherNo: "teacher01",
          studentName: "孙同学",
          studentNo: "19051206",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 17,
          thesis: "基于边缘计算的相片手绘化设计与实现",
          teacherNo: "teacher02",
          studentName: "张同学",
          studentNo: "19051207",
          status: 3,
          feedback: "论文格式不符合要求，打回修改",
          createTime: 1609840000000
        },
        {
          id: 18,
          thesis: "基于深度学习的车牌识别与管理系统设计与实现",
          teacherNo: "teacher03",
          studentName: "刘同学",
          studentNo: "19051208",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 19,
          thesis: "基于双目立体视觉的机动车车距监测的设计与实现",
          teacherNo: "teacher04",
          studentName: "赵同学",
          studentNo: "19051209",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 20,
          thesis: "基于linux的嵌入式音视频智能监控系统设计与实现",
          teacherNo: "teacher05",
          studentName: "钱同学",
          studentNo: "19051210",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 21,
          thesis: "基于图像分割的视频会议场景构建软件设计与实现",
          teacherNo: "teacher06",
          studentName: "王同学",
          studentNo: "19051301",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 22,
          thesis: "基于声音评价的语言学习辅助系统设计与实现",
          teacherNo: "teacher",
          studentName: "李同学",
          studentNo: "19051302",
          status: 3,
          feedback: "论文字数不足，打回修改",
          createTime: 1609840000000
        },
        {
          id: 23,
          thesis: "3D思维导图编辑系统的设计与实现",
          teacherNo: "teacher01",
          studentName: "郑同学",
          studentNo: "19051303",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 24,
          thesis: "基于Vue和nodejs的全栈跨境贸易系统设计与实现",
          teacherNo: "teacher02",
          studentName: "孙同学",
          studentNo: "19051304",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 25,
          thesis: "基于node.js的在线练题应用的设计与实现",
          teacherNo: "teacher03",
          studentName: "张同学",
          studentNo: "19051305",
          status: 3,
          feedback: "论文格式不符合要求，打回修改",
          createTime: 1609840000000
        },
        {
          id: 26,
          thesis: "基于echarts的就业信息可视化站点的设计与实现",
          teacherNo: "teacher04",
          studentName: "刘同学",
          studentNo: "19051306",
          status: 4,
          feedback: "严重违规违纪，不予答辩",
          createTime: 1609840000000
        },
        {
          id: 27,
          thesis: "基于视觉分析的多种类交通违法行为识别管理系统的设计与实现",
          teacherNo: "teacher05",
          studentName: "赵同学",
          studentNo: "19051307",
          status: 2,
          feedback: "达到要求，通过",
          createTime: 1609840000000
        },
        {
          id: 28,
          thesis: "基于移动端的非遗传承平台的设计与实现",
          teacherNo: "teacher06",
          studentName: "钱同学",
          studentNo: "19051308",
          status: 3,
          feedback: "论文字数不足，打回修改",
          createTime: 1609840000000
        }
      ];
      return {
        success: true,
        data: list.filter(item => item.teacherNo === body.userNo)
      };
    }
  }
] as MockMethod[];
