<template>
  <div class="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-32">
    <div
      @click="goToCalendar()"
      class="relative flex items-center justify-center h-24 overflow-hidden text-center transition duration-300 ease-in-out transform bg-gray-100 bg-opacity-25 rounded-lg shadow-2xl cursor-pointer hover:scale-105 hover:bg-opacity-75 md:h-56"
    >
      <div
        class="absolute font-mono text-3xl font-black sm:text-4xl md:text-5xl"
      >
        CALENDARIO
      </div>
    </div>
    <div
      @click="goToStatistics()"
      class="relative flex items-center justify-center h-24 overflow-hidden text-center transition duration-300 ease-in-out transform bg-gray-100 bg-opacity-25 rounded-lg shadow-2xl cursor-pointer hover:scale-105 hover:bg-opacity-75 md:h-56"
    >
      <div
        class="absolute font-mono text-3xl font-black sm:text-4xl md:text-5xl"
      >
        ESTADÍSTICAS
      </div>
    </div>
    <div
      @click="goToProfile()"
      class="relative flex items-center justify-center h-24 overflow-hidden text-center transition duration-300 ease-in-out transform bg-gray-100 bg-opacity-25 rounded-lg shadow-2xl cursor-pointer hover:scale-105 hover:bg-opacity-75 md:h-56"
    >
      <div
        class="absolute font-mono text-3xl font-black sm:text-4xl md:text-5xl"
      >
        PERFIL
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../components/layout/Menu";
export default {
  methods: {
    goToCalendar() {
      this.$router.push(`/calendar`);
    },
    goToStatistics() {
      this.$router.push(`/statistics`);
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
