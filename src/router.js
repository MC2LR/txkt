import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: "/index",
        name: "index",
        component:()=>import('./views/Index.vue'),
      },
      {
        path: "/",
        redirect: '/index',
      },
      {
        path: "/searchDetail",
        name: "searchDetail",
        component:()=>import('./views/searchDetail.vue'),
      },
  ]
})
