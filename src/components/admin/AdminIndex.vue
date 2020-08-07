<template>
  <div class="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-32">
    <div
      @click="goToCalendar()"
      class="relative flex items-center justify-center h-24 overflow-hidden text-center transition duration-300 ease-in-out transform bg-gray-100 bg-opacity-25 rounded-lg shadow-2xl cursor-pointer hover:scale-105 hover:bg-opacity-75 md:h-56"
    >
      <div class="absolute font-mono text-xl font-black sm:text- md:text-3xl">
        CALENDARIO
      </div>
    </div>
    <div
      @click="goToStatistics()"
      class="relative flex items-center justify-center h-24 overflow-hidden text-center transition duration-300 ease-in-out transform bg-gray-100 bg-opacity-25 rounded-lg shadow-2xl cursor-pointer hover:scale-105 hover:bg-opacity-75 md:h-56"
    >
      <div
        class="absolute font-mono text-xl font-black sm:text-2xl md:text-3xl"
      >
        ESTADÍSTICAS
      </div>
    </div>
    <div
      @click="goToTargets()"
      class="relative flex items-center justify-center h-24 overflow-hidden text-center transition duration-300 ease-in-out transform bg-gray-100 bg-opacity-25 rounded-lg shadow-2xl cursor-pointer hover:scale-105 hover:bg-opacity-75 md:h-56"
    >
      <div
        class="absolute font-mono text-xl font-black sm:text-2xl md:text-3xl"
      >
        OBJETIVOS
      </div>
    </div>
    <div
      @click="goToStudents()"
      class="relative flex items-center justify-center h-24 overflow-hidden text-center transition duration-300 ease-in-out transform bg-gray-100 bg-opacity-25 rounded-lg shadow-2xl cursor-pointer hover:scale-105 hover:bg-opacity-75 md:h-56"
    >
      <div
        class="absolute font-mono text-xl font-black sm:text-2xl md:text-3xl"
      >
        ALUMNOS
      </div>
    </div>
    <div
      @click="goToInstructors()"
      class="relative flex items-center justify-center h-24 overflow-hidden text-center transition duration-300 ease-in-out transform bg-gray-100 bg-opacity-25 rounded-lg shadow-2xl cursor-pointer hover:scale-105 hover:bg-opacity-75 md:h-56"
    >
      <div
        class="absolute font-mono text-xl font-black sm:text-2xl md:text-3xl"
      >
        INSTRUCTORS
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../components/layout/Menu";
export default {
  methods: {
    goToCalendar() {
      this.$router.push(`/calendario`);
    },
    goToStatistics() {
      this.$router.push(`/estadisticas`);
    },
    goToStudents() {
      this.$router.push(`/alumnos`);
    },
    goToInstructors() {
      this.$router.push(`/instructores`);
    },
    goToTargets() {
      this.$router.push(`/objetivos`);
    },
  },
  components: {
    Menu,
  },
};
</script>
