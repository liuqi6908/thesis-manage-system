import { $t } from "@/plugins/i18n";
import { submitData } from "@/router/enums";

export default {
  path: "/submit-data",
  redirect: "/submit-data/index",
  meta: {
    icon: "submit",
    title: $t("menus.submitData"),
    rank: submitData,
    keepAlive: true,
    roles: ["student"]
  },
  children: [
    {
      path: "/submit-data/index",
      name: "SubmitData",
      component: () => import("@/views/student/submitData/index.vue"),
      meta: {
        icon: "submit",
        title: $t("menus.submitData"),
        keepAlive: true,
        roles: ["student"]
      }
    }
  ]
} as RouteConfigsTable;
