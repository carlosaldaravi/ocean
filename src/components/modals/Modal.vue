<template>
  <div
    :id="id"
    class="fixed inset-0 inset-x-0 z-10 flex items-center justify-center px-4 pb-4 overflow-y-auto hidden-modal"
  >
    <!--
    Background overlay, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
    -->
    <div class="fixed inset-0 transition-opacity" @click="closeModal">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <!--
    Modal panel, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0 translate-y-4 xs:translate-y-0 xs:scale-95"
      To: "opacity-100 translate-y-0 xs:scale-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100 translate-y-0 xs:scale-100"
      To: "opacity-0 translate-y-4 xs:translate-y-0 xs:scale-95"
    -->
    <div
      class="px-4 pt-5 pb-4 overflow-auto transition-all transform bg-white rounded-lg shadow-xl max-h-3/4 xs:max-w-xl xs:w-full xs:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div class="xs:flex xs:items-start">
        <div class="mt-3 text-center xs:mt-0 xs:ml-4 xs:text-left">
          <slot name="header"></slot>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
  },
  methods: {
    closeModal() {
      document.body.style.overflow = "auto";
      document.getElementById(this.id).classList.add("hidden-modal");
    },
  },
};
</script>
