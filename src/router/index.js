import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: "main"},
    component: ()=>import('../views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main'},
    component: () => import('../views/Categories')
  },
  {
    path: '/detail-record',
    name: 'DetailRecord',
    meta: {layout: 'main'},
    component: ()=>import('../views/DetailRecord')
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'main'},
    component: ()=>import('../views/History')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'main'},
    component: ()=>import('../views/Planning')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main'},
    component: ()=>import('../views/Profile')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'main'},
    component: ()=>import('../views/Record')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
