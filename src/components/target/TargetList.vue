<template>
  <div>
    <section class="grid grid-cols-1 gap-8 xl:grid-cols-2">
      <div v-for="target of targets" :key="target.id">
        <TargetCard v-if="$store.getters.getRole === 'ALUMNO'" :target="target" />
        <TargetCardAdmin v-if="$store.getters.getRole === 'ADMIN'" :target="target" />
      </div>
    </section>
  </div>
</template>

<script>
import TargetCard from "./TargetCard.vue";
import TargetCardAdmin from "./TargetCardAdmin.vue";
export default {
  data() {
    return {};
  },
  props: {
    targets: { type: Array, required: true },
  },
  components: { TargetCard, TargetCardAdmin },
};
</script>
