import { $t } from "@/plugins/i18n";
import { checkTheScore } from "@/router/enums";

export default {
  path: "/check-the-score",
  redirect: "/check-the-score/index",
  meta: {
    icon: "check",
    title: $t("menus.checkTheScore"),
    rank: checkTheScore,
    keepAlive: true,
    roles: ["student"]
  },
  children: [
    {
      path: "/check-the-score/index",
      name: "checkTheScore",
      component: () => import("@/views/student/checkTheScore/index.vue"),
      meta: {
        icon: "check",
        title: $t("menus.checkTheScore"),
        keepAlive: true,
        roles: ["student"]
      }
    }
  ]
} as RouteConfigsTable;
