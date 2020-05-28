<template>
  <div>
    <div>
      <label :for="id" class="block text-sm font-medium leading-5 text-gray-700">{{ title }}</label>
      <div class="relative mt-1 rounded-md shadow-sm">
        <input
          v-model="data"
          class="block w-full form-input sm:text-sm sm:leading-5"
          :type="type"
          :id="id"
          :placeholder="placeholder"
          :required="required"
          :value="value"
        />
      </div>
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
      required: false
    },
    id: {
      type: String,
      default: "input_" + Math.floor(Math.random() * 100)
    },
    label: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // MODIFIERS
    // possible modifiers: uppercase, lowercase, no_space
    modifiers: {
      type: Array,
      required: false,
      default: []
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
