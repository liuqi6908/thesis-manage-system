import { $t } from "@/plugins/i18n";
import { dataManagement } from "@/router/enums";

export default {
  path: "/data-management",
  redirect: "/data-management/index",
  meta: {
    icon: "submit",
    title: $t("menus.dataManagement"),
    rank: dataManagement,
    keepAlive: true,
    roles: ["teacher"]
  },
  children: [
    {
      path: "/data-management/index",
      name: "DataManagement",
      component: () => import("@/views/teacher/dataManagement/index.vue"),
      meta: {
        icon: "submit",
        title: $t("menus.dataManagement"),
        keepAlive: true,
        roles: ["teacher"]
      }
    }
  ]
} as RouteConfigsTable;
