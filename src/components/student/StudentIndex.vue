<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-32">
    <div
      @click="goToCourses()"
      class="cursor-pointer h-28 bg-gray-200 sm:h-56 rounded-lg shadow-2xl relative overflow-hidden"
    >
      <img src="../../assets/images/index_mis_clases.png" alt="Cursos" />
    </div>
    <div
      @click="goToCalendar()"
      class="relative text-center cursor-pointer h-28 bg-gray-200 sm:h-56 rounded-lg shadow-2xl relative overflow-hidden"
    >
      <img src="../../assets/images/calendario.png" alt="Calendario" />
      <div
        class="font-black top-1/2 font-mono absolute text-5xl -translate-x-1/2 -translate-y-1/2"
      >CALENDARIO</div>
    </div>
    <div
      @click="goToTargets()"
      class="relative text-center cursor-pointer h-28 bg-gray-200 sm:h-56 rounded-lg shadow-2xl relative overflow-hidden flex items-center justify-center"
    >
      <img
        class="h-full w-full object-cover object-center"
        src="../../assets/images/targets.png"
        alt="Objetivos"
      />
      <div class="font-black font-mono text-5xl absolute">OBJETIVOS</div>
    </div>
    <div
      @click="goToProfile()"
      class="cursor-pointer h-28 bg-gray-200 sm:h-56 rounded-lg shadow-2xl relative overflow-hidden"
    >
      <img src="../../assets/images/perfil.png" alt="Perfil" />
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
    }
  },
  components: {
    Menu
  }
};
</script>
