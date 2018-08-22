import Vue from 'vue'
import Router from 'vue-router'
import IndexWelcome from './views/WelcomeViews/Index.vue'
import AfterLive from './views/WelcomeViews/AfterLive.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'IndexWelcome',
      component: IndexWelcome
    },
    {
      path: '/pn/AfterLive',
      name: 'AfterLive',
      component: AfterLive
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
