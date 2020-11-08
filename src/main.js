import Vue from "vue";
import VueRouter from "vue-router";
import Auth from '@okta/okta-vue';

// app specific components
import App from "@/App.vue";
import vehicles from "@/components/vehicles";
import starships from "@/components/starships";
import Home from "@/components/Home";
import Login from "@/components/Login";

Vue.use(VueRouter);
Vue.use(Auth, {
  issuer: 'https://powerhour.okta.com/oauth2/default',
  clientId: '0oahyrzgOBx3e0pcP5d5',
  redirectUri: 'http://10.1.1.140:8080/login/callback',
  scopes: ['openid', 'profile', 'email']
})

const routes = [
  { path: "/", component: Home },
  { path: "/starships", component: starships },
  { path: "/vehicles", component: vehicles },
  { path: "/login", component: Login },
  { path: "/login/callback", component: Auth.handleCallback() },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
