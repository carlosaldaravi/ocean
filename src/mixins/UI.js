export const UI = {
  data() {
    return {
      fromMixin: true,
    };
  },
  methods: {
    openModal(id) {
      if (id) {
        document.body.style.overflow = "hidden";
        document.getElementById(id).classList.remove("hidden-modal");
      }
    },
    closeModal(id) {
      if (id) {
        document.body.style.overflow = "auto";
        document.getElementById(id).classList.add("hidden-modal");
      }
    },
  },
};
