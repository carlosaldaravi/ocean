import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "lista-alumnos" */ '../views/Home.vue')
  },
  {
    path: '/lista-alumnos',
    name: 'alumnoLista',
    component: () => import(/* webpackChunkName: "lista-alumnos" */ '../views/student/StudentList.vue')
  },
  {
    path: '/alumno',
    name: 'alumnoIndex',
    component: () => import(/* webpackChunkName: "alumno" */ '../views/student/StudentIndex.vue')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
