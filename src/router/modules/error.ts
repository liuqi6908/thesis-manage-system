import { error } from "@/router/enums";

export default {
  path: "/error",
  redirect: "/error/403",
  meta: {
    title: "",
    rank: error,
    showLink: false
  },
  children: [
    {
      path: "/error/403",
      name: "403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        title: ""
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: ""
      }
    },
    {
      path: "/error/500",
      name: "500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: ""
      }
    }
  ]
} as RouteConfigsTable;
