<template>
  <section class="container p-4 mx-auto md:p-8">
    <AdminIndex v-if="this.$store.getters.getRole === 'ADMIN'" />
    <StudentIndex v-if="this.$store.getters.getRole === 'STUDENT'" />
    <div v-if="this.$store.getters.getRole === 'INSTRUCTOR'">
      INSTRUCTOR home
    </div>
    <div
      @click="logout()"
      class="relative flex items-center justify-center h-24 overflow-hidden text-center transition duration-300 ease-in-out transform bg-red-700 bg-opacity-75 rounded-lg shadow-2xl cursor-pointer hover:scale-105 hover:bg-opacity-75 md:h-56"
    >
      <div
        class="absolute font-mono text-3xl font-black sm:text-4xl md:text-5xl"
      >
        LOGOUT
      </div>
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
  methods: {
    logout() {
      this.$store.dispatch(AUTH_LOGOUT);
    },
  },
};
</script>
