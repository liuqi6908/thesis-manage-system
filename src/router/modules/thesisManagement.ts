import { $t } from "@/plugins/i18n";
import { thesisManagement } from "@/router/enums";

export default {
  path: "/thesis-management",
  redirect: "/thesis-management/index",
  meta: {
    icon: "thesis",
    title: $t("menus.thesisManagement"),
    rank: thesisManagement,
    keepAlive: true,
    roles: ["admin"]
  },
  children: [
    {
      path: "/thesis-management/index",
      name: "ThesisManagement",
      component: () =>
        import("@/views/admin/thesisManagement/thesisManagement/index.vue"),
      meta: {
        icon: "thesis",
        title: $t("menus.thesisManagement"),
        keepAlive: true,
        roles: ["admin"]
      }
    },
    {
      path: "/thesis-management/evaluation-results",
      name: "EvaluationResults",
      component: () =>
        import("@/views/admin/thesisManagement/evaluationResults/index.vue"),
      meta: {
        icon: "result",
        title: $t("menus.evaluationResults"),
        keepAlive: true,
        roles: ["admin"]
      }
    }
  ]
} as RouteConfigsTable;
