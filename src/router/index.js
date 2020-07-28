import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/home");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "login",
    beforeEnter: ifNotAuthenticated,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/welcome",
    name: "Bienvenido",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(/* webpackChunkName: "welcome" */ "../views/Enrollment.vue"),
  },
  {
    path: "/home",
    name: "Inicio",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/alumnos",
    name: "Alumnos",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(
        /* webpackChunkName: "alumnos" */ "../views/student/StudentList.vue"
      ),
  },
  {
    path: "/instructores",
    name: "Instructores",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(
        /* webpackChunkName: "instructores" */ "../views/instructor/InstructorList.vue"
      ),
  },
  {
    path: "/cursos",
    name: "Mis Cursos",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(
        /* webpackChunkName: "cursos" */ "../views/student/StudentCourses.vue"
      ),
  },
  {
    path: "/calendario",
    name: "Calendario",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(/* webpackChunkName: "calendario" */ "../views/Calendar.vue"),
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: () =>
      import(/* webpackChunkName: "perfil" */ "../views/Profile.vue"),
  },
  {
    path: "/objetivos",
    name: "Objetivos",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(/* webpackChunkName: "objetivos" */ "../views/Targets.vue"),
  },
  {
    path: "/estadisticas",
    name: "Estadísticas",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(/* webpackChunkName: "estadisticas" */ "../views/Statistics.vue"),
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
