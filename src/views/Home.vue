<template>
  <section class="container p-4 mx-auto md:p-8">
    <AdminIndex v-if="this.$store.getters.getRole === 'ADMIN'" />
    <StudentIndex v-if="this.$store.getters.getRole === 'STUDENT'" />
    <div v-if="this.$store.getters.getRole === 'INSTRUCTOR'">
      INSTRUCTOR home
    </div>
  </section>
</template>

<script>
import Shell from "../components/layout/Shell";
import StudentIndex from "../components/student/StudentIndex.vue";
import AdminIndex from "../components/admin/AdminIndex.vue";
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
    AdminIndex,
  },
  created() {
    if (this.$store.getters.getRole === "") {
      this.$store.dispatch(AUTH_LOGOUT);
    }
  },
};
</script>
