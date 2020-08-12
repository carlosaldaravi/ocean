<template>
  <div
    @click="openCloseCard()"
    :class="[
      target.studentTargets.length > 0
        ? isValidated(target)
          ? 'bg-secondary-200'
          : 'bg-primary-400'
        : 'bg-primary-200',
    ]"
    class="relative flex flex-col h-auto mt-3 bg-opacity-75 rounded shadow sm:flex-row"
  >
    <div class="w-full h-full p-4">
      <!-- target  -->
      <div class="flex justify-between">
        <div class="flex items-center">
          <div class="text-xl">{{ target.name }}</div>
        </div>
        <div
          v-if="target.studentTargets.length > 0 && !isValidated(target)"
          class="absolute right-0 flex items-center p-2 bg-white rounded-full -top-4"
        >
          <img
            v-if="!moreCard"
            class="w-4 h-4"
            src="../../assets/icons/lock-open.svg"
            alt
          />
        </div>
        <div
          v-if="target.studentTargets.length > 0 && isValidated(target)"
          class="absolute right-0 flex items-center p-2 bg-white rounded-full -top-4"
        >
          <img
            v-if="!moreCard"
            class="w-4 h-4"
            src="../../assets/icons/checkmark.svg"
            alt
          />
        </div>
        <div
          v-if="target.studentTargets.length === 0"
          class="absolute right-0 flex items-center p-2 bg-white rounded-full -top-4"
        >
          <img
            v-if="!moreCard"
            class="w-4 h-4"
            src="../../assets/icons/lock-closed.svg"
            alt
          />
        </div>
      </div>

      <div v-if="moreCard" class="mt-4">
        <div v-if="isValidated(target)" class="flex justify-between">
          <!-- instructor -->
          <div class="flex justify-between mt-2 align-baseline">
            <div class="flex items-center">
              <div>
                <img
                  v-if="getInstructorGender(target) == 'FEMALE'"
                  class="object-cover object-top rounded-full w-9 h-9"
                  src="../../assets/images/avatar/kaya.jpg"
                  alt
                />
                <img
                  v-if="getInstructorGender(target) == 'MALE'"
                  class="object-cover object-top rounded-full w-9 h-9"
                  src="../../assets/images/avatar/will.jpg"
                  alt
                />
              </div>
              <div class="ml-3">
                <p
                  v-if="getInstructorGender(target) == 'FEMALE'"
                  class="text-xs font-medium leading-4 transition duration-150 ease-in-out"
                >
                  Validado por:
                </p>
                <p class="text-sm font-medium leading-5">
                  {{ getInstructorName(target) }}
                </p>
              </div>
            </div>
          </div>
          <!-- fecha -->
          <div class="flex items-center ml-1 text-sm">
            {{ getValidationDate(target) }}
          </div>
        </div>
        <div class="mt-2 italic">Descripción</div>
        <div class="text-sm">{{ target.description }}</div>
        <div v-if="isValidated(target)">
          <div class="mt-2 italic">Materiales</div>
          <div class="flex justify-between">
            <div class="text-xs italic">Estamos trabajando en ello</div>
          </div>
        </div>
      </div>

      <div
        v-if="target.studentTargets.length > 0"
        class="flex justify-center -mb-3"
      >
        <button>
          <img
            v-if="!moreCard"
            class="w-4 h-4 text-red-500"
            src="../../assets/icons/cheveron-down.svg"
            alt
          />
          <img
            v-else
            class="w-4 h-4 text-red-500"
            src="../../assets/icons/cheveron-up.svg"
            alt
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate, formatTime } from "../../helpers/functions";

export default {
  data() {
    return {
      moreCard: false,
    };
  },
  props: {
    target: { type: Object, required: true },
  },
  methods: {
    formatDate,
    formatTime,
    isValidated(target) {
      let studentIsIn = target.studentTargets.find(
        (student) => student.studentId === this.$store.getters.getUserId
      );
      if (studentIsIn && studentIsIn.instructor) return true;
    },

    getValidationDate(target) {
      let studentIsIn = target.studentTargets.find(
        (student) => student.studentId === this.$store.getters.getUserId
      );
      return this.formatDate(studentIsIn.date);
    },

    getInstructorName(target) {
      let studentIsIn = target.studentTargets.find(
        (student) => student.studentId === this.$store.getters.getUserId
      );
      return studentIsIn.instructor.details.firstname;
    },

    getInstructorGender(target) {
      let studentIsIn = target.studentTargets.find(
        (student) => student.studentId === this.$store.getters.getUserId
      );
      return studentIsIn.instructor.details.gender;
    },
    openCloseCard() {
      if (this.target.studentTargets.length > 0) {
        this.moreCard = !this.moreCard;
      }
    },
  },
};
</script>
