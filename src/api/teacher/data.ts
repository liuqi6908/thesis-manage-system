import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取课题资料 */
export const getTopicData = (data?: object) => {
  return http.request<Result>("post", "/teacher/getTopicData", { data });
};
