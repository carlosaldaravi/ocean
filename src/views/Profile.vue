<template>
  <section>
    <oc-input label="test" v-model="msg"></oc-input>

    <p>my message is {{ msg }}</p>
  </section>
</template>

<script>
import oc_input from "../components/forms/Input.vue";
export default {
  components: {
    "oc-input": oc_input,
  },

  data() {
    return {
      msg: "",
    };
  },
};
</script>
