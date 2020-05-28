<template>
  <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div v-for="course of courses" :key="course.id">
      <CourseCard :course="course" />
    </div>
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
