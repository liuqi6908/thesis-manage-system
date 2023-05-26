import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/** 获取评审列表 */
export const getPendingReviewList = (data?: object) => {
  return http.request<Result>("post", "/teacher/getPendingReviewList", {
    data
  });
};

/** 获取已评审列表 */
export const getReviewedList = (data?: object) => {
  return http.request<Result>("post", "/teacher/getReviewedList", { data });
};
