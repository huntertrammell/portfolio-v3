import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { transitionName: "slide" }
    },
    {
      path: "/about",
      name: "about",
      meta: { transitionName: "slide" },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/portfolio",
      name: "portfolio",
      meta: { transitionName: "slide" },
      component: () =>
        import(/* webpackChunkName: "portfolio" */ "./views/Portfolio.vue")
    },
    {
      path: "/contact",
      name: "contact",
      meta: { transitionName: "slide" },
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    }
  ]
});
