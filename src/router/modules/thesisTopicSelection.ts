import { $t } from "@/plugins/i18n";
import { thesisTopicSelection } from "@/router/enums";

export default {
  path: "/thesis-topic-selection",
  redirect: "/thesis-topic-selection/index",
  meta: {
    icon: "selection",
    title: $t("menus.thesisTopicSelection"),
    rank: thesisTopicSelection,
    keepAlive: true,
    roles: ["student"]
  },
  children: [
    {
      path: "/thesis-topic-selection/index",
      name: "ThesisTopicSelection",
      component: () => import("@/views/student/thesisTopicSelection/index.vue"),
      meta: {
        icon: "selection",
        title: $t("menus.thesisTopicSelection"),
        keepAlive: true,
        roles: ["student"]
      }
    }
  ]
} as RouteConfigsTable;
