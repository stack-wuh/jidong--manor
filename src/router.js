import Vue from 'vue'
import Router from 'vue-router'
import Home from './App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  baseUrl: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: '/index/runing',
          name: 'index-runing',
          component: () => import ('@/views/runingManage/main.vue')
        },
        {
          path: '/index/search',
          name: 'index-search',
          component: () => import('@/views/searchManage/main.vue')
        },
        {
          path: '/index/working',
          name: 'index-working',
          component: () => import ('@/views/workManage/main.vue')
        },
        {
          path: '/index/package',
          name: 'index-package',
          component: () => import ('@/views/packageManage/index.vue')
        },
        {
          path: '/index/stage',
          name: 'index-stage',
          component: () => import ('@v/stageManage/main.vue')
        }
      ]
    }
  ]
})
