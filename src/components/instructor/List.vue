<template>
  <section>
    <div v-if="instructors.length == 0">No hay instructors disponibles</div>
    <div v-else>
      <card v-for="instructor in instructors" :key="instructor.id" :instructor="instructor"></card>
    </div>
  </section>
</template>

<script>
import { API } from "../../classes/api";
import Card from "./Card.vue";

export default {
  name: "List", // used to devtools, nothing more
  data() {
    return {
      api: new API()
    };
  },
  props: {
    instructors: { type: Array, required: true }
  },
  components: {
    Card
  }
};
</script>