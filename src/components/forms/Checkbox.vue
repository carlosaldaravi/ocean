<template>
  <div class="flex items-start">
    <div class="absolute flex items-center h-5">
      <input
        v-model="checked"
        type="checkbox"
        class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
        :disabled="disabled"
      />
    </div>
    <div class="text-sm leading-5 pl-7">
      <label :for="title" class="font-medium text-gray-700">{{ title }}</label>
    </div>
  </div>
</template>

<script>
export default {
  // Vue magic so we can use v-model on the parent instead of the :value binding and the @data emitter
  model: {
    prop: "value",
    event: "data"
  },
  props: {
    value: {
      required: true
    },
    title: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    // MODIFIERS
    // possible modifiers: uppercase, lowercase, no_space
    modifiers: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  watch: {
    value() {
      this.data = this.value;
    },
    data() {
      this.$emit("data", this.data);
    }
  },
  data() {
    return {
      data: this.value
    };
  },
  updated() {
    this.validate();
  },
  mounted() {
    this.$nextTick(() => {
      this.validate();
    });
  },
  methods: {
    validate() {
      if (!this.data) {
        this.isValid = null;
        return;
      }

      //   modifiers
      // if(this.modifiers.includes('uppercase'))

      let item = document.getElementById(this.id);
      if (!item) return;

      let type = item.type;

      if (!item.value) {
        this.isValid = false;
        this.validityMessage = null;
        return;
      }

      return true;
      //     switch (type) {
      //     case "text":
      //       // Si no se ha introducido nada, no debe avisar del error
      //       if (item.checkValidity()) {
      //         this.isValid = true;
      //         this.validityMessage = item.validationMessage;
      //       } else {
      //         this.isValid = false;
      //         this.validityMessage = "Complete este campo";
      //       }
      //       break;
      //   }
    },
    sanetizeText(text) {
      if (!text) return;
      // TODO: optimizar performance
      for (let ch of badTextChars) {
        if (text.includes(ch)) text = text.replace(ch, "");
      }
      return text;
    }
  }
};
</script>
