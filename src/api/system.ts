import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取教师管理列表 */
export const teacherList = (data?: object) => {
  return http.request<Result>("post", "/teacherList", { data });
};

/** 获取学生管理列表 */
export const studentList = (data?: object) => {
  return http.request<Result>("post", "/studentList", { data });
};

/** 获取班级管理列表 */
export const classList = (data?: object) => {
  return http.request<Result>("post", "/classList", { data });
};
