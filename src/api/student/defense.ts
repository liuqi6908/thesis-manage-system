import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取答辩列表 */
export const defenseList = (data?: object) => {
  return http.request<Result>("post", "/student/defenseList", { data });
};
