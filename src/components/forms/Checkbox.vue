<template>
  <div class="flex items-start">
    <div class="absolute flex items-center h-5">
      <input
        v-model="isChecked"
        type="checkbox"
        class="w-4 h-4 transition duration-150 ease-in-out text-primary-300 form-checkbox"
        :disabled="disabled"
      />
    </div>
    <div class="text-sm leading-5 pl-7">
      <label :for="label" class="font-medium text-gray-700">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  // Vue magic so we can use v-model on the parent instead of the :value binding and the @data emitter
  model: {
    prop: "checked",
    event: "isChecked",
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    checked: {
      type: [Boolean, Number, String],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isChecked() {
      this.$emit("isChecked", this.isChecked);
    },
  },
  data() {
    return {
      isChecked: this.checked,
    };
  },
};
</script>
