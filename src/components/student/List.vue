<template>
  <section>
    <div v-if="students.length == 0" class="mt-4">
      No hay alumnos disponibles
    </div>
    <div v-else>
      <card
        v-for="student in students"
        :key="student.id"
        :student="student"
        :sportSelected="sportSelected"
      ></card>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "List", // used to devtools, nothing more
  props: {
    students: { type: Array, required: true },
    sportSelected: { type: Object, required: true },
  },
  components: {
    Card,
  },
};
</script>
