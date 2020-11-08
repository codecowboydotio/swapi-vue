import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import vehicles from "@/components/vehicles";
import starships from "@/components/starships";
import RootSite from "@/components/RootSite";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: RootSite },
  { path: "/starships", component: starships },
  { path: "/vehicles", component: vehicles },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
