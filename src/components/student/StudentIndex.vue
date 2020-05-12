<template>
  <div class="flex justify-between mx-4">
    <div
      @click="goToCourses()"
      class="w-36 h-36 bg-gray-200 rounded-lg shadow-2xl relative overflow-hidden"
    >
      Cursos
    </div>
    <div
      class="w-36 h-36 bg-gray-200 rounded-lg shadow-2xl relative overflow-hidden"
    ></div>
  </div>
</template>

<script>
import Menu from "../../components/layout/Menu";
export default {
  methods: {
    goToCourses() {
      this.$router.push(`/cursos`);
    },
  },
  components: {
    Menu,
  },
};
</script>
