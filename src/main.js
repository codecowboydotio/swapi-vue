import Vue from "vue";
import VueRouter from "vue-router";

// app specific components
import App from "@/App.vue";
import vehicles from "@/components/vehicles";
import starships from "@/components/starships";
import people from "@/components/people";
import planets from "@/components/planets";
import Home from "@/components/Home";

Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
  { path: "/starships", component: starships },
  { path: "/vehicles", component: vehicles },
  { path: "/people", component: people },
  { path: "/planets", component: planets },
]

const router = new VueRouter({
  routes: routes,
  mode: "history",
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
