// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/login",
    method: "post",
    response: ({ body }) => {
      if (body.userNo === "admin") {
        if (body.password === "admin123") {
          return {
            success: true,
            data: {
              username: "超级管理员",
              userNo: "admin",
              roles: ["admin"],
              accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
              refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
              expires: "2023/10/30 00:00:00"
            }
          };
        } else {
          return {
            success: false,
            message: "密码错误"
          };
        }
      } else if (body.userNo === "teacher") {
        if (body.password === "teacher123") {
          return {
            success: true,
            data: {
              username: "刘老师",
              userNo: "teacher",
              roles: ["teacher"],
              accessToken: "eyJhbGciOiJIUzUxMiJ9.teacher",
              refreshToken: "eyJhbGciOiJIUzUxMiJ9.teacherRefresh",
              expires: "2023/10/30 00:00:00"
            }
          };
        } else {
          return {
            success: false,
            message: "密码错误"
          };
        }
      } else if (body.userNo === "student") {
        if (body.password === "student123") {
          return {
            success: true,
            data: {
              username: "张同学",
              userNo: "student",
              roles: ["student"],
              accessToken: "eyJhbGciOiJIUzUxMiJ9.student",
              refreshToken: "eyJhbGciOiJIUzUxMiJ9.studentRefresh",
              expires: "2023/10/30 00:00:00"
            }
          };
        } else {
          return {
            success: false,
            message: "密码错误"
          };
        }
      } else {
        return {
          success: false,
          message: "账号不存在"
        };
      }
    }
  }
] as MockMethod[];
