<template>
  <div
    class="relative flex flex-col h-auto overflow-hidden bg-gray-100 bg-opacity-75 rounded shadow sm:flex-row md:h-28"
  >
    <div class="w-full h-full p-4">
      <!-- target  -->
      <div class="flex align-middle">
        <div class="flex items-center">
          <div class="text-xl">{{ target.name }}</div>
        </div>
      </div>
      <!-- instructor -->
      <!-- <div class="flex justify-between mt-2 align-baseline">
        <div class="flex items-center">
          <div>
            <img
              v-if="target.validatedBy && target.instructor.details.gender == 'FEMALE'"
              class="object-cover object-top rounded-full w-9 h-9"
              src="../../assets/images/avatar/kaya.jpg"
              alt
            />
            <img
              v-if="target.validatedBy && target.instructor.details.gender == 'MALE'"
              class="object-cover object-top rounded-full w-9 h-9"
              src="../../assets/images/avatar/will.jpg"
              alt
            />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium leading-5">{{ target.instructor.details.firstname }}</p>
            <p
              v-if="target.validatedBy && target.instructor.details.gender == 'FEMALE'"
              class="text-xs font-medium leading-4 transition duration-150 ease-in-out"
            >Instructora</p>
            <p
              v-if="target.validatedBy && target.instructor.details.gender == 'MALE'"
              class="text-xs font-medium leading-4 transition duration-150 ease-in-out"
            >Instructor</p>
          </div>
        </div>
        <div v-if="target.validatedBy" class="flex items-center">
          <img class="w-4 h-4 text-green-500" src="../../assets/icons/checkmark.svg" alt />
          <div class="pl-1 text-green-600">Validado</div>
        </div>
        <div v-else class="flex items-center">
          <img class="w-4 h-4 text-red-500" src="../../assets/icons/close.svg" alt />
          <div class="pl-1 text-red-600">Sin Validar</div>
        </div>
      </div>-->

      <!-- <div v-if="moreCard" class="mt-4">
      <div class="flex justify-between -mt-3">-->
      <!-- fecha -->
      <!-- <div class="flex items-center -ml-3">
            Realizado el:
            <div class="ml-1 text-xs">{{ formatDate(target.date) }}</div>
          </div>
        </div>
        <div class="italic">Descripción</div>
        <div>{{target.target.description}}</div>
      </div>-->

      <div class="flex justify-center -mb-3">
        <button @click="moreCard = !moreCard">
          <img
            v-if="!moreCard"
            class="w-4 h-4 text-red-500"
            src="../../assets/icons/cheveron-outline-down.svg"
            alt
          />
          <img
            v-else
            class="w-4 h-4 text-red-500"
            src="../../assets/icons/cheveron-outline-up.svg"
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
      moreCard: false
    };
  },
  props: {
    target: { type: Object, required: true }
  },
  methods: {
    formatDate,
    formatTime,
    getGender(instructor) {
      if (instructor.details.gender && instructor.details.gender === "FEMALE") {
        return "instructora";
      } else {
        return "instructor";
      }
    }
  }
};
</script>
