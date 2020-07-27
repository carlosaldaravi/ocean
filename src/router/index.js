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
  next("/login");
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
    path: "/login",
    name: "login",
    beforeEnter: ifNotAuthenticated,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },

  // - PARA TODOS
  //  index
  //  cursos
  //  perfil
  //  calendario
  //  objetivos
  //  estadísticas
  // - Alumnos
  //  disponibilidad
  // + info
  // - Profesor
  // disponibilidad (vacaciones)
  // - Admin
  // lista de alumnos
  // lista de instructores
  // lista de deportes
  // lista de objetivos
  // lista de niveles
  // lista de tipos de cursos
  {
    path: "/welcome",
    name: "Bienvenido",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Enrollment.vue"),
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
        /* webpackChunkName: "alumno" */ "../views/student/StudentCourses.vue"
      ),
  },
  {
    path: "/calendario",
    name: "Calendario",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(/* webpackChunkName: "alumno" */ "../views/Calendar.vue"),
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: () =>
      import(/* webpackChunkName: "alumno" */ "../views/Profile.vue"),
  },
  {
    path: "/objetivos",
    name: "Objetivos",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(/* webpackChunkName: "alumno" */ "../views/Targets.vue"),
  },
  {
    path: "/estadisticas",
    name: "Estadísticas",
    beforeEnter: ifAuthenticated,
    component: () =>
      import(/* webpackChunkName: "estadisticas" */ "../views/Statistics.vue"),
  },
  { path: "*", redirect: "/login" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
