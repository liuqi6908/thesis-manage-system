import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取学生列表 */
export const getStudentList = (data?: object) => {
  return http.request<Result>("post", "/teacher/getStudentList", { data });
};
