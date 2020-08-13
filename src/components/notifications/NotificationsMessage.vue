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
  <div class="z-50 w-full p-1">
    <div
      :class="{ 'bg-green-300': this.notification.type == 'success',
          'bg-red-300': this.notification.type == 'error',
          'bg-yellow-100 yell': this.notification.type == 'warning',
           }"
      class="p-4 rounded-md shadow"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            :class="{ 'text-green-600': this.notification.type == 'success',
          'text-red-600': this.notification.type == 'error',
          'text-yellow-400': this.notification.type == 'warning',
           }"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              v-if="notification.type == 'success'"
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
            <path
              v-if="notification.type == 'error'"
              fill-rule="evenodd"
              d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"
              clip-rule="evenodd"
            />
            <path
              v-if="notification.type == 'warning'"
              fill-rule="evenodd"
              d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <p
            :class="{ 'text-green-800': this.notification.type == 'success',
          'text-red-800': this.notification.type == 'error',
          'text-yellow-800': this.notification.type == 'warning',
           }"
            class="text-sm font-medium leading-5"
          >{{ this.notification.message }}</p>
        </div>
        <div class="pl-3 ml-auto">
          <div class="-mx-1.5 -my-1.5">
            <button
              @click="closeNotification()"
              :class="{ 'text-green-800 hover:bg-green-500 focus:bg-green-100': this.notification.type == 'success',
          'text-red-800 hover:bg-red-500 focus:bg-red-100': this.notification.type == 'error',
          'text-yellow-800 hover:bg-yellow-500 focus:bg-yellow-100': this.notification.type == 'warning',
           }"
              class="inline-flex rounded-md p-1.5 focus:outline-none transition ease-in-out duration-150"
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
    this.timeout = setTimeout(() => {
      this.REMOVE_NOTIFICATION(this.notification);
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: {
    ...mapActions(["REMOVE_NOTIFICATION"]),
    closeNotification() {
      this.REMOVE_NOTIFICATION(this.notification);
    },
  },
};
</script>

<style></style>
