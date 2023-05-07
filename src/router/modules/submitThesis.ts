import { $t } from "@/plugins/i18n";
import { submitThesis } from "@/router/enums";

export default {
  path: "/submit-thesis",
  redirect: "/submit-thesis/index",
  meta: {
    icon: "submit",
    title: $t("menus.submitThesis"),
    rank: submitThesis,
    keepAlive: true,
    roles: ["student"]
  },
  children: [
    {
      path: "/submit-thesis/index",
      name: "SubmitThesis",
      component: () => import("@/views/student/submitThesis/index.vue"),
      meta: {
        icon: "submit",
        title: $t("menus.submitThesis"),
        keepAlive: true,
        roles: ["student"]
      }
    }
  ]
} as RouteConfigsTable;
