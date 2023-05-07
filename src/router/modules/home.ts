import { $t } from "@/plugins/i18n";
import { home } from "@/router/enums";

export default {
  path: "/",
  name: "Home",
  component: () => import("@/layout/index.vue"),
  redirect: "/welcome",
  meta: {
    icon: "home",
    title: $t("menus.home"),
    rank: home,
    keepAlive: true
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/common/welcome/index.vue"),
      meta: {
        title: $t("menus.home"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
