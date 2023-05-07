import { $t } from "@/plugins/i18n";
import { supervisedTeacher } from "@/router/enums";

export default {
  path: "/supervised-teacher",
  redirect: "/supervised-teacher/index",
  meta: {
    icon: "teacher",
    title: $t("menus.supervisedTeacher"),
    rank: supervisedTeacher,
    keepAlive: true,
    roles: ["student"]
  },
  children: [
    {
      path: "/supervised-teacher/index",
      name: "SupervisedTeacher",
      component: () => import("@/views/student/supervisedTeacher/index.vue"),
      meta: {
        icon: "teacher",
        title: $t("menus.supervisedTeacher"),
        keepAlive: true,
        roles: ["student"]
      }
    }
  ]
} as RouteConfigsTable;
