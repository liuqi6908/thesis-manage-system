import { $t } from "@/plugins/i18n";
import { noticeManagement } from "@/router/enums";

export default {
  path: "/notice-management",
  redirect: "/notice-management/index",
  meta: {
    icon: "notice",
    title: $t("menus.noticeManagement"),
    rank: noticeManagement,
    keepAlive: true,
    roles: ["admin"]
  },
  children: [
    {
      path: "/notice-management/index",
      name: "NoticeManagement",
      component: () => import("@/views/admin/noticeManagement/index.vue"),
      meta: {
        icon: "notice",
        title: $t("menus.noticeManagement"),
        keepAlive: true,
        roles: ["admin"]
      }
    }
  ]
} as RouteConfigsTable;
