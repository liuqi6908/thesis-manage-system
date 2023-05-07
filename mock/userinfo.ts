// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/userinfo",
    method: "post",
    response: ({ body }) => {
      if (body.userNo === "admin") {
        return {
          success: true,
          data: [
            {
              label: "姓名",
              field: "超级管理员"
            },
            {
              label: "工号",
              field: "0519856"
            },
            {
              label: "身份",
              field: "管理员"
            },
            {
              label: "性别",
              field: "男"
            },
            {
              label: "出生日期",
              field: "1963-10-01"
            },
            {
              label: "民族",
              field: "汉族"
            },
            {
              label: "部门",
              field: "教务处"
            },
            {
              label: "手机号",
              field: "18512346666"
            },
            {
              label: "电子邮箱",
              field: "wang6666@163.com"
            },
            {
              label: "联系地址",
              field: "浙江省杭州市钱塘新区白杨街道"
            },
            {
              label: "证件类型",
              field: "居民身份证"
            },
            {
              label: "证件号码",
              field: "330100196310018435"
            },
            {
              label: "政治面貌",
              field: "党员"
            }
          ]
        };
      } else if (body.userNo === "teacher") {
        const publicData = [
          {
            label: "姓名",
            field: "刘老师"
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
        const privateData = [
          {
            label: "联系地址",
            field: "浙江省杭州市钱塘新区白杨街道"
          },
          {
            label: "出生日期",
            field: "1973-10-01"
          },
          {
            label: "民族",
            field: "汉族"
          },
          {
            label: "证件类型",
            field: "居民身份证"
          },
          {
            label: "证件号码",
            field: "330100197310018651"
          },
          {
            label: "政治面貌",
            field: "党员"
          }
        ];
        if (body.role === "student")
          return {
            success: true,
            data: publicData
          };
        else
          return {
            success: true,
            data: publicData.concat(privateData)
          };
      } else if (body.userNo === "student") {
        return {
          success: true,
          data: [
            {
              label: "姓名",
              field: "张同学"
            },
            {
              label: "学号",
              field: "19050101"
            },
            {
              label: "身份",
              field: "学生"
            },
            {
              label: "性别",
              field: "男"
            },
            {
              label: "出生日期",
              field: "2000-01-01"
            },
            {
              label: "民族",
              field: "汉族"
            },
            {
              label: "学院",
              field: "计算机学院"
            },
            {
              label: "专业",
              field: "计算机科学与技术"
            },
            {
              label: "班级",
              field: "19052317"
            },
            {
              label: "手机号",
              field: "17866668888"
            },
            {
              label: "电子邮箱",
              field: "zhang8888@163.com"
            },
            {
              label: "联系地址",
              field: "浙江省杭州市钱塘新区白杨街道"
            },
            {
              label: "证件类型",
              field: "居民身份证"
            },
            {
              label: "证件号码",
              field: "640321200001010510"
            },
            {
              label: "政治面貌",
              field: "共青团员"
            },
            {
              label: "指导教师",
              field: "刘老师",
              teacherNo: "teacher"
            }
          ]
        };
      } else {
        return {
          success: false,
          message: "用户不存在"
        };
      }
    }
  }
] as MockMethod[];
