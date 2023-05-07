import { $t } from "@/plugins/i18n";
import { dataStatistics } from "@/router/enums";

export default {
  path: "/data-statistics",
  redirect: "/data-statistics/thesis-statistics",
  meta: {
    icon: "statistics01",
    title: $t("menus.dataStatistics"),
    rank: dataStatistics,
    keepAlive: true,
    roles: ["admin"]
  },
  children: [
    {
      path: "/data-statistics/thesis-statistics",
      name: "ThesisStatistics",
      component: () =>
        import("@/views/admin/dataStatistics/thesisStatistics/index.vue"),
      meta: {
        icon: "statistics02",
        title: $t("menus.thesisStatistics"),
        keepAlive: true,
        roles: ["admin"]
      }
    },
    {
      path: "/data-statistics/evaluation-statistics",
      name: "EvaluationStatistics",
      component: () =>
        import("@/views/admin/dataStatistics/evaluationStatistics/index.vue"),
      meta: {
        icon: "statistics03",
        title: $t("menus.evaluationStatistics"),
        keepAlive: true,
        roles: ["admin"]
      }
    }
  ]
} as RouteConfigsTable;
