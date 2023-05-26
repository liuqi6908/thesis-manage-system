import { $t } from "@/plugins/i18n";
import { defenseInformation } from "@/router/enums";

export default {
  path: "/defense-information",
  redirect: "/defense-information/index",
  meta: {
    icon: "defense",
    title: $t("menus.defenseInformation"),
    rank: defenseInformation,
    keepAlive: true,
    roles: ["student"]
  },
  children: [
    {
      path: "/defense-information/index",
      name: "defenseInformation",
      component: () => import("@/views/student/defenseInformation/index.vue"),
      meta: {
        icon: "defense",
        title: $t("menus.defenseInformation"),
        keepAlive: true,
        roles: ["student"]
      }
    }
  ]
} as RouteConfigsTable;
