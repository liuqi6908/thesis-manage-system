import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取申请列表 */
export const applyList = (data?: object) => {
  return http.request<Result>("post", "/student/applyList", { data });
};

/** 获取指导教师信息 */
export const teacherInfo = (data?: object) => {
  return http.request<Result>("post", "/student/teacherInfo", { data });
};
