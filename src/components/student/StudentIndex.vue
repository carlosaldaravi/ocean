<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-32">
    <div
      @click="goToCourses()"
      class="h-28 bg-gray-200 sm:h-56 rounded-lg shadow-2xl relative overflow-hidden"
    >
      <img src="../../assets/images/index_mis_clases.png" alt="" />
    </div>
    <div
      @click="goToCalendar()"
      class="h-28 bg-gray-200 sm:h-56 rounded-lg shadow-2xl relative overflow-hidden"
    >
      <img src="../../assets/images/index_calendario.png" alt="" />
    </div>
    <div
      @click="goToTargets()"
      class="h-28 bg-gray-200 sm:h-56 rounded-lg shadow-2xl relative overflow-hidden"
    >
      <img src="../../assets/images/index_objetivos.png" alt="" />
    </div>
    <div
      @click="goToProfile()"
      class="h-28 bg-gray-200 sm:h-56 rounded-lg shadow-2xl relative overflow-hidden"
    >
      <img src="../../assets/images/perfil.png" alt="" />
    </div>
  </div>
</template>

<script>
import Menu from "../../components/layout/Menu";
export default {
  methods: {
    goToCourses() {
      this.$router.push(`/cursos`);
    },
    goToCalendar() {
      this.$router.push(`/calendar`);
    },
    goToTargets() {
      this.$router.push(`/targets`);
    },
    goToProfile() {
      this.$router.push(`/profile`);
    },
  },
  components: {
    Menu,
  },
};
</script>
