import { $t } from "@/plugins/i18n";
import { thesisManagement } from "@/router/enums";

export default {
  path: "/thesis-management",
  redirect: "/thesis-management/topic-audit",
  meta: {
    icon: "thesis",
    title: $t("menus.thesisManagement"),
    rank: thesisManagement,
    keepAlive: true,
    roles: ["admin"]
  },
  children: [
    {
      path: "/thesis-management/topic-audit",
      name: "TopicAudit",
      component: () =>
        import("@/views/admin/thesisManagement/topicAudit/index.vue"),
      meta: {
        icon: "thesis",
        title: $t("menus.topicAudit"),
        keepAlive: true,
        roles: ["admin"]
      }
    },
    {
      path: "/thesis-management/topic-list",
      name: "TopicList",
      component: () =>
        import("@/views/admin/thesisManagement/topicList/index.vue"),
      meta: {
        icon: "result",
        title: $t("menus.topicList"),
        keepAlive: true,
        roles: ["admin"]
      }
    }
  ]
} as RouteConfigsTable;
