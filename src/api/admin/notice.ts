import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取公告列表 */
export const getNoticeList = (data?: object) => {
  return http.request<Result>("post", "/admin/getNoticeList", { data });
};
