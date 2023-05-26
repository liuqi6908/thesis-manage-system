import { $t } from "@/plugins/i18n";
import { defenseManagement } from "@/router/enums";

export default {
  path: "/defense-management",
  redirect: "/defense-management/index",
  meta: {
    icon: "defense",
    title: $t("menus.defenseManagement"),
    rank: defenseManagement,
    keepAlive: true,
    roles: ["teacher"]
  },
  children: [
    {
      path: "/defense-management/index",
      name: "DefenseManagement",
      component: () => import("@/views/teacher/defenseManagement/index.vue"),
      meta: {
        icon: "defense",
        title: $t("menus.defenseManagement"),
        keepAlive: true,
        roles: ["teacher"]
      }
    }
  ]
} as RouteConfigsTable;
