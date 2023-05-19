import { http } from "@/utils/http";

type Result = {
  success: boolean;
  message?: string;
  data?: Array<any>;
};

/**
 * 系统管理
 */
/** 获取教师管理列表 */
export const teacherList = (data?: object) => {
  return http.request<Result>("post", "/teacherList", { data });
};

/** 获取学生管理列表 */
export const studentList = (data?: object) => {
  return http.request<Result>("post", "/studentList", { data });
};

/** 获取班级管理列表 */
export const classList = (data?: object) => {
  return http.request<Result>("post", "/classList", { data });
};

/**
 * 论文管理
 */
/** 获取论文列表 */
export const thesisList = (data?: object) => {
  return http.request<Result>("post", "/thesisList", { data });
};

/** 获取评审列表 */
export const evaluationList = (data?: object) => {
  return http.request<Result>("post", "/evaluationList", { data });
};

/**
 * 数据统计
 */
/** 获取管理流程 */
export const processManagement = (data?: object) => {
  return http.request<Result>("post", "/processManagement", { data });
};
