import { MockMethod } from "vite-plugin-mock";

const list = [
  {
    id: 6,
    title: "EEG信号采集系统软件平台设计与实现",
    type: 1,
    introduce:
      "开发一套EEG信号采集系统，用于接收并存储由脑电设备采集到的被试的EEG数据，并能对采集到的EEG数据进行滤波、伪迹去除等处理，以及时域、频域特征的提取并能将时域特征，频域特征以及脑区信息进行可视化显示。",
    total: 1,
    status: 1,
    student: "王同学",
    createTime: 1609840000000
  },
  {
    id: 22,
    title: "基于声音评价的语言学习辅助系统设计与实现",
    type: 1,
    introduce: "系统，论文",
    total: 1,
    status: 1,
    student: "赵同学",
    createTime: 1609840000000
  },
  {
    id: 38,
    title: "基准测试数据的采集、分析与可视化系统设计与实现",
    type: 1,
    introduce: "对开源软件的基准测试数据进行采集，并进行分析和可视化展现",
    total: 1,
    status: 2,
    student: "",
    createTime: 1609840000000
  },
  {
    id: 54,
    title: "英文文本清理工具的设计与实现",
    type: 0,
    introduce:
      "1.	该课题来源于与外国语学院合作开展的研究课题，需要完成一个英文文本清理工具，为后续的语言研究提供基础文本。该英文文本处理工具接收pdf、word、txt形式的英文文档，用户可以选择去除封面、目录、参考文献、脚注、页眉、页脚、图片、链接、乱码、空行等各项内容，清理完成后的文本以txt形式输出。提供批量处理的功能。2.	学生需要学习文本处理相关技术，研究Clean Text这类文本处理工具的实现。",
    total: 1,
    status: 1,
    student: "张同学",
    createTime: 1609840000000
  },
  {
    id: 70,
    title: "引入激励机制的英语在线学习系统设计与实现",
    type: 1,
    introduce: "系统，论文",
    total: 1,
    status: 1,
    student: "李同学",
    createTime: 1609840000000
  },
  {
    id: 86,
    title: "基于Stable Diffusion的AIGC模型部署与测试设计与实现",
    type: 0,
    introduce:
      "生成内容一直被视为 AI 领域中最具有挑战性的能力，最近大火的 AI 绘画背后，是 Stable Diffusion 模型的开源，催生了众多 AI 绘画的应用，得益于 Stability AI 的开源精神，这一创变推动了整个以英文为主的下游文生图生态的蓬勃发展。然而在国内，目前大部分团队主要是基于翻译 API + 英文 stable diffusion 模型进行开发，但由于中英文之间所得存在文化差异导致遇到中文独特的叙事和表达时，这种模型就很难给出正确匹配的图片内容。因此，IDEA 研究院认知计算与自然语言研究中心（IDEA CCNL）开源了第一个中文版本的 stable diffusion 模型“太乙 Stable Diffusion”，让中文的世界真正拥有具备中国文化内核的 AIGC 模型。本毕业设计主要解决的问题包括：（1）搭建太乙stable diffusion模型部署环境（2）设计模型测试用例（3）设计模型部署推理的微服务系统参考链接：https://mp.weixin.qq.com/s/WrzkiJOxqNcFpdU24BKbMA",
    total: 1,
    status: 1,
    student: "刘同学",
    createTime: 1609840000000
  }
];

export default [
  {
    url: "/teacher/getTopicList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: list
      };
    }
  }
] as MockMethod[];
