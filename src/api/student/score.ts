import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取成绩列表 */
export const scoreList = (data?: object) => {
  return http.request<Result>("post", "/student/scoreList", { data });
};
