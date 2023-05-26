import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取修改课题申请列表 */
export const modifyList = (data?: object) => {
  return http.request<Result>("post", "/student/modifyList", { data });
};
