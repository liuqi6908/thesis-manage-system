import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/**
 * 指导学生
 */
/** 获取学生列表 */
export const studentList = (data?: object) => {
  return http.request<Result>("post", "/supervisedStudents", { data });
};

/**
 * 评审管理
 */
/** 获取评审列表 */
export const evaluationList = (data?: object) => {
  return http.request<Result>("post", "/pendingReview", { data });
};

/** 获取已审核列表 */
export const reviewedList = (data?: object) => {
  return http.request<Result>("post", "/reviewed", { data });
};
