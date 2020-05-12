<template>
  <div class="p-4">
    <div v-if="getRole() === 'ADMIN'"></div>
    <StudentIndex v-if="getRole() === 'STUDENT'" />
    <div v-if="getRole() === 'INSTRUCTOR'">INSTRUCTOR home</div>
  </div>
</template>

<script>
import Shell from "../components/layout/Shell";
import { mapState } from "vuex";
import StudentIndex from "../components/student/StudentIndex.vue";
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
