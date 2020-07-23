<template>
  <div class="flex flex-col" style="min-height: 100vh;">
    <ocean-menu></ocean-menu>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  components: {
    "ocean-menu": Menu,
  },
};
</script>
