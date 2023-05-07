import { addIcon } from "@iconify/vue/dist/offline";

/**
 * 这里存放本地图标，在 src/layout/index.vue 文件中加载，避免在首启动加载
 */

// 本地菜单图标，后端在路由的icon中返回对应的图标字符串并且前端在此处使用addIcon添加即可渲染菜单图标
import home from "@iconify-icons/ri/home-3-line";
import system from "@iconify-icons/ri/settings-4-line";
import teacher from "@iconify-icons/ri/group-line";
import student from "@iconify-icons/ri/team-line";
import classManage from "@iconify-icons/ri/git-branch-line";
import thesis from "@iconify-icons/ri/draft-line";
import result from "@iconify-icons/ri/calendar-check-line";
import statistics01 from "@iconify-icons/ri/funds-box-line";
import statistics02 from "@iconify-icons/ri/bar-chart-box-line";
import statistics03 from "@iconify-icons/ri/pie-chart-line";
import review from "@iconify-icons/ri/list-check-2";
import pending from "@iconify-icons/ri/list-indefinite";
import reviewed from "@iconify-icons/ri/list-check-3";
import selection from "@iconify-icons/ri/clipboard-line";
import submit from "@iconify-icons/ri/send-plane-2-line";
import user from "@iconify-icons/ri/user-3-line";
import userinfo from "@iconify-icons/ri/folder-user-line";
import password from "@iconify-icons/ri/lock-password-line";
import school from "@iconify-icons/ep/school";
import guide from "@iconify-icons/ep/guide";
import information from "@iconify-icons/ri/information-line";

addIcon("home", home);
addIcon("system", system);
addIcon("teacher", teacher);
addIcon("student", student);
addIcon("class", classManage);
addIcon("thesis", thesis);
addIcon("result", result);
addIcon("statistics01", statistics01);
addIcon("statistics02", statistics02);
addIcon("statistics03", statistics03);
addIcon("review", review);
addIcon("pending", pending);
addIcon("reviewed", reviewed);
addIcon("selection", selection);
addIcon("submit", submit);
addIcon("user", user);
addIcon("userinfo", userinfo);
addIcon("password", password);
addIcon("school", school);
addIcon("guide", guide);
addIcon("information", information);
