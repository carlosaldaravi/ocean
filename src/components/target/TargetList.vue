<template>
  <section class="grid grid-cols-1 gap-8 md:grid-cols-2">
    <div v-for="target of targets" :key="target.id">
      <TargetCard :target="target" />
    </div>
  </section>
</template>

<script>
import TargetCard from "./TargetCard.vue";
export default {
  props: {
    targets: { type: Array, required: true }
  },
  components: { TargetCard }
};
</script>
