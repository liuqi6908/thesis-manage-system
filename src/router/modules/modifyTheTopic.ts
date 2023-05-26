import { $t } from "@/plugins/i18n";
import { modifyTheTopic } from "@/router/enums";

export default {
  path: "/modify-the-topic",
  redirect: "/modify-the-topic/index",
  meta: {
    icon: "modify",
    title: $t("menus.modifyTheTopic"),
    rank: modifyTheTopic,
    keepAlive: true,
    roles: ["student"]
  },
  children: [
    {
      path: "/modify-the-topic/index",
      name: "ModifyTheTopic",
      component: () => import("@/views/student/modifyTheTopic/index.vue"),
      meta: {
        icon: "modify",
        title: $t("menus.modifyTheTopic"),
        keepAlive: true,
        roles: ["student"]
      }
    }
  ]
} as RouteConfigsTable;
