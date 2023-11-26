import { createRouter, createWebHashHistory } from "vue-router";
import FormView from "@/views/FormView.vue";
import HomeView from "@/views/HomeView.vue";
import InspectorView from "@/views/InspectorView.vue";
import DownloadView from "@/views/DownloadView.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/form",
      name: "form",
      component: FormView
    },
    {
      path: "/inspector",
      name: "inspector",
      component: InspectorView
    },
    {
      path: "/download",
      name: "download",
      component: DownloadView
    }
  ]
});

export default router;
