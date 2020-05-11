<template>
  <div
    class="flex flex-col sm:flex-row h-auto bg-gray-100 sm:h-56 rounded shadow relative overflow-hidden"
  >
    <div class="absolute right-0">
      <img class="w-8 h-8 rounded" src="../assets/images/spain.png" alt />
    </div>

    <div class="w-full sm:w-1/3 h-full">
      <img
        v-if="course.level.name == 'Iniciación'"
        class="w-full h-40 sm:h-full object-cover"
        src="../assets/images/iniciacion.jpg"
        alt
      />
      <img
        v-else
        class="w-full h-40 sm:h-full object-cover"
        src="../assets/images/kitesurf.png"
        alt
      />
    </div>

    <div class="w-full sm:w-2/3 h-full p-4">
      <!-- hora fecha -->
      <div class="flex justify-between">
        <div class="flex items-center">
          <img src="../assets/images/calendario.svg" class="w-6 h-6" alt />
          <div class="pl-2">{{ formatDate(course.calendar[0].date) }}</div>
        </div>

        <div class="flex items-center sm:mr-4">
          <img src="../assets/images/reloj.svg" class="w-6 h-6" alt />
          <div class="pl-2">
            {{ formatTime(course.calendar[0].start_time) }} -
            {{ formatTime(course.calendar[0].end_time) }}
          </div>
        </div>
      </div>
      <!-- nivel  -->
      <div class="align-middle pt-2 flex">
        <div class="flex items-center">
          <div class="text-3xl">{{ course.level.name }}</div>
        </div>
      </div>
      <!-- instructor -->
      <div class="flex justify-between mt-2">
        <div class="flex items-center">
          <img
            v-if="course.instructors[0].details.gender == 'FEMALE'"
            class="w-10 h-10 object-cover object-top rounded-full"
            src="../assets/images/avatar/kaya.jpg"
            alt
          />
          <img
            v-if="course.instructors[0].details.gender == 'MALE'"
            class="w-10 h-10 object-cover object-top rounded-full"
            src="../assets/images/avatar/will.jpg"
            alt
          />
          <div class="pl-2">{{ course.instructors[0].details.firstname }}</div>
        </div>
        <div class="flex items-center">
          <img class="w-6 h-6 " src="../assets/images/logros.svg" alt />
          <div class=" pl-1">
            8/10
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate, formatTime } from "../helpers/functions";

export default {
  props: {
    course: { type: Object, required: true },
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
    },
  },
};
</script>

<style></style>
