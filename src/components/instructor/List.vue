<template>
  <section>
    <div v-if="instructors.length == 0" class="mt-4">
      No hay instructors disponibles
    </div>
    <div v-else>
      <card
        v-for="instructor in instructors"
        :key="instructor.id"
        :instructor="instructor"
      ></card>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "List", // used to devtools, nothing more
  props: {
    instructors: { type: Array, required: true },
  },
  components: {
    Card,
  },
};
</script>
