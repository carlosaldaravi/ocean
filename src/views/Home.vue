<template>
  <section class="container p-4 md:p-8 mx-auto">
    <div v-if="this.$store.getters.getRole === 'ADMIN'"></div>
    <StudentIndex v-if="this.$store.getters.getRole === 'STUDENT'" />
    <div v-if="this.$store.getters.getRole === 'INSTRUCTOR'">
      INSTRUCTOR home
    </div>
  </section>
</template>

<script>
import Shell from "../components/layout/Shell";
import StudentIndex from "../components/student/StudentIndex.vue";
import { AUTH_LOGOUT } from "../store/actions/auth";

export default {
  data() {
    return {
      sidebarOpen: true,
    };
  },
  components: {
    Shell,
    StudentIndex,
  },
  created() {
    if (this.$store.getters.getRole === "") {
      this.$store.dispatch(AUTH_LOGOUT);
    }
  },
};
</script>
