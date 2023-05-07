import { $t } from "@/plugins/i18n";
import { evaluationManagement } from "@/router/enums";

export default {
  path: "/evaluation-management",
  redirect: "/evaluation-management/pending-review",
  meta: {
    icon: "review",
    title: $t("menus.evaluationManagement"),
    rank: evaluationManagement,
    keepAlive: true,
    roles: ["teacher"]
  },
  children: [
    {
      path: "/evaluation-management/pending-review",
      name: "EvaluationManagement",
      component: () =>
        import("@/views/teacher/evaluationManagement/pendingReview/index.vue"),
      meta: {
        icon: "pending",
        title: $t("menus.pendingReview"),
        keepAlive: true,
        roles: ["teacher"]
      }
    },
    {
      path: "/evaluation-management/reviewed",
      name: "Reviewed",
      component: () =>
        import("@/views/teacher/evaluationManagement/reviewed/index.vue"),
      meta: {
        icon: "reviewed",
        title: $t("menus.reviewed"),
        keepAlive: true,
        roles: ["teacher"]
      }
    }
  ]
} as RouteConfigsTable;
