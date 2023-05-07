import { $t } from "@/plugins/i18n";
import { supervisedStudents } from "@/router/enums";

export default {
  path: "/supervised-students",
  redirect: "/supervised-students/index",
  meta: {
    icon: "student",
    title: $t("menus.supervisedStudents"),
    rank: supervisedStudents,
    keepAlive: true,
    roles: ["teacher"]
  },
  children: [
    {
      path: "/supervised-students/index",
      name: "SupervisedStudents",
      component: () => import("@/views/teacher/supervisedStudents/index.vue"),
      meta: {
        icon: "student",
        title: $t("menus.supervisedStudents"),
        keepAlive: true,
        roles: ["teacher"]
      }
    }
  ]
} as RouteConfigsTable;
