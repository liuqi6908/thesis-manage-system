import { $t } from "@/plugins/i18n";
import { systemManagement } from "@/router/enums";

export default {
  path: "/system-management",
  redirect: "/system-management/teacher-management",
  meta: {
    icon: "system",
    title: $t("menus.systemManagement"),
    rank: systemManagement,
    keepAlive: true,
    roles: ["admin"]
  },
  children: [
    {
      path: "/system-management/teacher-management",
      name: "TeacherManagement",
      component: () =>
        import("@/views/admin/systemManagement/teacherManagement/index.vue"),
      meta: {
        icon: "teacher",
        title: $t("menus.teacherManagement"),
        keepAlive: true,
        roles: ["admin"]
      }
    },
    {
      path: "/system-management/student-management",
      name: "StudentManagement",
      component: () =>
        import("@/views/admin/systemManagement/studentManagement/index.vue"),
      meta: {
        icon: "student",
        title: $t("menus.studentManagement"),
        keepAlive: true,
        roles: ["admin"]
      }
    },
    {
      path: "/system-management/class-management",
      name: "ClassManagement",
      component: () =>
        import("@/views/admin/systemManagement/classManagement/index.vue"),
      meta: {
        icon: "class",
        title: $t("menus.classManagement"),
        keepAlive: true,
        roles: ["admin"]
      }
    }
  ]
} as RouteConfigsTable;
