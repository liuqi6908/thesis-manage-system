import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取教师列表 */
export const teacherList = (data?: object) => {
  return http.request<Result>("post", "/admin/teacherList", { data });
};

/** 获取学生列表 */
export const studentList = (data?: object) => {
  return http.request<Result>("post", "/admin/studentList", { data });
};

/** 获取班级列表 */
export const classList = (data?: object) => {
  return http.request<Result>("post", "/admin/classList", { data });
};
