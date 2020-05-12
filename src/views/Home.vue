<template>
  <section class="container p-4 md:p-8 mx-auto">
    <div v-if="getRole() === 'ADMIN'"></div>
    <StudentIndex v-if="getRole() === 'STUDENT'" />
    <div v-if="getRole() === 'INSTRUCTOR'">INSTRUCTOR home</div>
  </section>
</template>

<script>
import Shell from "../components/layout/Shell";
import StudentIndex from "../components/student/StudentIndex.vue";
import { AUTH_LOGOUT } from "../store/actions/auth";

export default {
  data() {
    return {
      roles: [],
      sidebarOpen: true,
    };
  },
  components: {
    Shell,
    StudentIndex,
  },
  created() {
    this.roles = this.$store.getters.getRoles;
    if (this.roles.length == 0) {
      this.$store.dispatch(AUTH_LOGOUT);
    }
  },
  methods: {
    getRole() {
      if (this.roles.includes("ADMIN")) {
        return "ADMIN";
      } else if (this.roles.includes("STUDENT")) {
        return "STUDENT";
      } else if (this.roles.includes("INSTRUCTOR")) {
        return "INSTRUCTOR";
      }
    },
  },
};
</script>
