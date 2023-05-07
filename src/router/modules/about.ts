import { $t } from "@/plugins/i18n";
import { about } from "@/router/enums";

export default {
  path: "/about",
  redirect: "/about/index",
  meta: {
    icon: "information",
    title: $t("menus.about"),
    rank: about,
    keepAlive: true
  },
  children: [
    {
      path: "/about/index",
      name: "About",
      component: () => import("@/views/common/about/index.vue"),
      meta: {
        title: $t("menus.about"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
