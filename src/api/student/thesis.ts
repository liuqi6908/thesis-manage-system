import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取论文列表 */
export const thesisList = (data?: object) => {
  return http.request<Result>("post", "/student/thesisList", { data });
};

/** 获取论文资料 */
export const thesisData = (data?: object) => {
  return http.request<Result>("post", "/student/thesisData", { data });
};
