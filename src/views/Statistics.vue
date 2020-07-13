<template>
  <section class="container p-4 mx-auto md:p-8"></section>
</template>

<script>
import StudentIndex from "../components/student/StudentIndex.vue";
import AdminIndex from "../components/admin/AdminIndex.vue";
import { AUTH_LOGOUT } from "../store/actions/auth";

export default {
  data() {
    return {
      sidebarOpen: true,
    };
  },
  components: {},
  created() {
    if (this.$store.getters.getRole === "") {
      this.$store.dispatch(AUTH_LOGOUT);
    }
  },
};
</script>
