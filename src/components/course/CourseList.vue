<template>
  <section>
    <div v-if="courses.length > 0" class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div v-for="course of courses" :key="course.id">
        <CourseCard :course="course" />
      </div>
    </div>
    <div v-else>No tienes ningún curso pendiente, ve a calendario para ver los cursos disponibles</div>
  </section>
</template>

<script>
import CourseCard from "./CourseCard.vue";
export default {
  props: {
    courses: { type: Array, required: true }
  },
  components: { CourseCard }
};
</script>
