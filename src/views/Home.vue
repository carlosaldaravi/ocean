<template>
  <div>
    <div v-if="getRole() === 'ADMIN'">ADMIN home</div>
    <div v-if="getRole() === 'STUDENT'">STUDENT home</div>
    <div v-if="getRole() === 'INSTRUCTOR'">INSTRUCTOR home</div>
  </div>
</template>

<script>
import Shell from "../components/layout/Shell";
import { mapState } from "vuex";
export default {
  data() {
    return {
      roles: [],
      sidebarOpen: true,
    };
  },
  components: {
    Shell,
  },
  created() {
    this.roles = this.$store.getters.getRoles;
    console.log("roles: ", this.roles);
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
