import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取课题列表 */
export const topicList = (data?: object) => {
  return http.request<Result>("post", "/student/topicList", { data });
};

/** 获取已选课题 */
export const topicSelect = (data?: object) => {
  return http.request<Result>("post", "/student/topicSelect", { data });
};
