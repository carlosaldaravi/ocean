<template>
  <section>
	  <div v-if="alumnos.length == 0">
		  No hay alumnos disponibles
	  </div>
	  <div v-else>
		  <alumno-card v-for="alumno in alumnos" :key="alumno.email" :alumno="alumno">
		  </alumno-card>
	  </div>
  </section>
</template>

<script>
import { API } from "../../classes/api";
import { Alumno } from "../../classes/alumno";
import AlumnoCard from "../alumnos/AlumnoCard.vue"

export default {
  name: "listado", // solo sirve para las devtools, nada más
  data() {
    return {
      	api: new API(),
      	alumnos: []
    };
  },
  async mounted() {
    this.api.setBaseURL("https://randomuser.me/");
    let result = await this.api.get("api/?results=5");

	if(!result.success) return;
    result.data.results.forEach(alumno => {
		this.alumnos.push(new Alumno(alumno));
	});
  },
  components: {
      'alumno-card': AlumnoCard
  }
}
</script>

<style>
</style>