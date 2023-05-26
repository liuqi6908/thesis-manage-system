import { $t } from "@/plugins/i18n";
import { topicManagement } from "@/router/enums";

export default {
  path: "/topic-management",
  redirect: "/topic-management/index",
  meta: {
    icon: "selection",
    title: $t("menus.topicManagement"),
    rank: topicManagement,
    keepAlive: true,
    roles: ["teacher"]
  },
  children: [
    {
      path: "/topic-managements/index",
      name: "TopicManagement",
      component: () => import("@/views/teacher/topicManagement/index.vue"),
      meta: {
        icon: "selection",
        title: $t("menus.topicManagement"),
        keepAlive: true,
        roles: ["teacher"]
      }
    }
  ]
} as RouteConfigsTable;
