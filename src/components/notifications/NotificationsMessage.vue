<template>
  <!-- <div
    :class="typeClass"
    class="alert alert-dismissible fade show"
    role="alert"
  >
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{ notification.message }}
  </div>-->
  <div class="fixed bottom-0 left-0 right-0 z-50 w-full p-4 m-0">
    <div class="p-4 rounded-md shadow bg-green-50">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="w-5 h-5 text-green-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium leading-5 text-green-800">
            {{ this.notification.message }}Registrado satisfactoriamente
          </p>
        </div>
        <div class="pl-3 ml-auto">
          <div class="-mx-1.5 -my-1.5">
            <button
              class="inline-flex rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
            >
              <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["notification"],
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
  },
  created() {
    console.log("notification: ", this.notification);

    this.timeout = setTimeout(() => {
      this.REMOVE_NOTIFICATION(this.notification);
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: mapActions(["REMOVE_NOTIFICATION"]),
};
</script>

<style></style>
