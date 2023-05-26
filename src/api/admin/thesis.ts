import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取评审列表 */
export const getAuditList = (data?: object) => {
  return http.request<Result>("post", "/admin/getAuditList", { data });
};

/** 获取课题列表 */
export const getTopicList = (data?: object) => {
  return http.request<Result>("post", "/admin/getTopicList", { data });
};
