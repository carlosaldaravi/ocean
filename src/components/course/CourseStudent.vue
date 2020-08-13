<template>
  <div v-if="courseStudent">
    <div class="flex justify-between mt-2 align-baseline">
      <div class="flex items-center">
        <div>
          <img
            class="object-cover object-top rounded-full w-9 h-9"
            src="../../assets/images/avatar/will.jpg"
            alt
          />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium leading-5">
            {{ courseStudent.student.details.firstname }}
            {{ courseStudent.student.details.lastname }}
          </p>
        </div>
      </div>
      <!-- targets -->
      <div class="flex justify-between align-baseline">
        <div class="flex items-center">
          <img class="w-5 h-5" src="../../assets/images/logros.svg" alt />
          <div class="pl-1 mb-1 text-sm">{{ getTargetsValidated(courseStudent.student) }}</div>
        </div>
        <div v-if="$store.getters.getRole === 'INSTRUCTOR'" class="mt-1 ml-2">
          <button
            @click="openModal(courseStudent.student)"
            type="button"
            class="inline-flex justify-center w-full px-1 transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm text-xxs text-primary-400 bg-primary-200 hover:bg-primary-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
          >Validar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    courseStudent: { type: Object, required: true },
    courseId: { type: Number, required: true },
  },
  methods: {
    getTargetsValidated(student) {
      let totalTargets = 0;
      let validatedTargets = 0;
      let studentTargets = student.studentTargets;
      if (studentTargets) {
        totalTargets = studentTargets.length;
        studentTargets.forEach((st) => {
          if (st.validatedBy) {
            validatedTargets++;
          }
        });
      }

      return validatedTargets + "/" + totalTargets;
    },
    openModal(student) {
      this.$emit("isMoreCard");
      this.$emit("setCourseStudent", this.courseStudent);
    },
  },
};
</script>

<style></style>
