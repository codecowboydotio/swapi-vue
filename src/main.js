import Vue from "vue";
import VueRouter from "vue-router";
import Auth from '@okta/okta-vue';

// app specific components
import App from "@/App.vue";
import vehicles from "@/components/vehicles";
import starships from "@/components/starships";
import Home from "@/components/Home";
import Login from "@/components/Login";

Vue.use(Auth, {
  issuer: 'https://powerhour.okta.com/oauth2/default',
  clientId: '0oahyrzgOBx3e0pcP5d5',
  redirectUri: 'http://localhost:8080/callback',
  scopes: ['openid', 'profile', 'email']
})
Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
  { path: "/starships", component: starships, meta: { requiresAuth: true } },
  { path: "/vehicles", component: vehicles },
  { path: "/login", component: Login },
  { path: "/callback", component: Auth.handleCallback() },
]

const router = new VueRouter({
  routes: routes,
  mode: "history",
})
router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
