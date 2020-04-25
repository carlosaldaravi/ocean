<template>
  <section>
    <div v-if="alumnos.length == 0">No hay alumnos disponibles</div>
    <div v-else>
      <card v-for="alumno in alumnos" :key="alumno.email" :alumno="alumno"></card>
    </div>
  </section>
</template>

<script>
import { API } from "../../classes/api";
import { Student } from "../../classes/student";
import Card from "./Card.vue";

export default {
  name: "List", // solo sirve para las devtools, nada más
  data() {
    return {
      api: new API(),
      alumnos: []
    };
  },
  async mounted() {
    this.api.setBaseURL("https://randomuser.me/");
    let result = await this.api.get("api/?results=5");

    if (!result.success) return;
    result.data.results.forEach(alumno => {
      this.alumnos.push(new Student(alumno));
    });
  },
  components: {
    Card
  }
};
</script>

<style>
</style>