import { $t } from "@/plugins/i18n";
import { user } from "@/router/enums";

export default {
  path: "/user",
  redirect: "/user/userinfo",
  meta: {
    icon: "user",
    title: $t("menus.user"),
    rank: user,
    keepAlive: true
  },
  children: [
    {
      path: "/user/userinfo",
      name: "Userinfo",
      component: () => import("@/views/common/user/userinfo/index.vue"),
      meta: {
        icon: "userinfo",
        title: $t("menus.userinfo"),
        keepAlive: true
      }
    },
    {
      path: "/user/change-password",
      name: "ChangePassword",
      component: () => import("@/views/common/user/changePassword/index.vue"),
      meta: {
        icon: "password",
        title: $t("menus.changePassword"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
