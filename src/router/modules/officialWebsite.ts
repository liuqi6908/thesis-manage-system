import { $t } from "@/plugins/i18n";
import { schoolWebsite } from "@/router/enums";

export default {
  path: "/school-website",
  redirect: "/school-website/index",
  meta: {
    icon: "school",
    title: $t("menus.schoolWebsite"),
    rank: schoolWebsite,
    keepAlive: true
  },
  children: [
    {
      path: "/school-website/index",
      name: "SchoolWebsite",
      component: () => import("@/layout/frameView.vue"),
      meta: {
        title: $t("menus.schoolWebsite"),
        frameSrc: "https://www.hdu.edu.cn/main.htm",
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
