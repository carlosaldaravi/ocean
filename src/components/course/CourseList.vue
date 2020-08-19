<template>
  <section>
    <div v-if="courses.length > 0" class="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <div v-for="course of courses" :key="course.id">
        <CourseCard :course="course" />
      </div>
    </div>
    <div v-else>No hay cursos que mostrar</div>
  </section>
</template>

<script>
import CourseCard from "./CourseCard.vue";
export default {
  props: {
    courses: { type: Array, required: true },
  },
  components: { CourseCard },
};
</script>
