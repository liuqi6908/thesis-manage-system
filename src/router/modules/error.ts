import { error } from "@/router/enums";

export default {
  path: "/error",
  redirect: "/error/403",
  meta: {
    title: "",
    rank: error,
    showLink: false,
    keepAlive: true
  },
  children: [
    {
      path: "/error/403",
      name: "403",
      component: () => import("@/views/common/error/403.vue"),
      meta: {
        title: "",
        keepAlive: true
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/common/error/404.vue"),
      meta: {
        title: "",
        keepAlive: true
      }
    },
    {
      path: "/error/500",
      name: "500",
      component: () => import("@/views/common/error/500.vue"),
      meta: {
        title: "",
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
