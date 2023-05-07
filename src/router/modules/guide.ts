import { $t } from "@/plugins/i18n";
import { guide } from "@/router/enums";

export default {
  path: "/guide",
  redirect: "/guide/index",
  meta: {
    icon: "guide",
    title: $t("menus.guide"),
    rank: guide,
    keepAlive: true
  },
  children: [
    {
      path: "/guide/index",
      name: "Guide",
      component: () => import("@/views/common/guide/index.vue"),
      meta: {
        title: $t("menus.guide"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
