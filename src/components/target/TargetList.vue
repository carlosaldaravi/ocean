<template>
  <div>
    <section class="grid grid-cols-1 gap-8 xl:grid-cols-2">
      <div v-for="target of targets" :key="target.id">
        <TargetCard
          v-if="$store.getters.getRole === 'STUDENT'"
          :target="target"
        />
        <TargetCardAdmin
          v-if="$store.getters.getRole === 'ADMIN'"
          :target="target"
        />
      </div>
    </section>
    <span class="flex justify-center mt-4 xl:mt-8">
      <button
        @click="editing = true"
        v-if="!editing"
        type="button"
        class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >
        Nuevo
      </button>
      <button
        @click="editing = false"
        v-if="editing"
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >
        Cancelar
      </button>
      <button
        @click="createInstructor()"
        v-if="editing"
        type="button"
        class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >
        Guardar
      </button>
    </span>
  </div>
</template>

<script>
import TargetCard from "./TargetCard.vue";
import TargetCardAdmin from "./TargetCardAdmin.vue";
import { API } from "../../classes/api";
export default {
  data() {
    return {
      api: new API(),
      active: true,
      editing: false,
      userError: "",
    };
  },
  props: {
    targets: { type: Array, required: true },
  },
  components: { TargetCard, TargetCardAdmin },
};
</script>
