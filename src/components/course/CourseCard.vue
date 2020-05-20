<template>
  <div
    class="relative flex flex-col h-auto overflow-hidden bg-gray-100 bg-opacity-75 rounded shadow sm:flex-row bg-opa sm:h-56"
  >
    <div class="absolute right-0">
      <img class="w-8 h-8 rounded" src="../../assets/images/spain.png" alt />
    </div>

    <div class="w-full h-full sm:w-1/3">
      <img
        v-if="course.level.name == 'Iniciación'"
        class="object-cover w-full h-40 sm:h-full"
        src="../../assets/images/iniciacion.jpg"
        alt
      />
      <img
        v-else
        class="object-cover w-full h-40 sm:h-full"
        src="../../assets/images/kitesurf.png"
        alt
      />
    </div>

    <div class="w-full h-full p-4 sm:w-2/3">
      <!-- hora fecha -->
      <div class="flex justify-between">
        <div class="flex items-center">
          <img src="../../assets/images/calendario.svg" class="w-6 h-6" alt />
          <div class="pl-2">{{ formatDate(course.calendar[0].date) }}</div>
        </div>

        <div class="flex items-center sm:mr-4">
          <img src="../../assets/images/reloj.svg" class="w-6 h-6" alt />
          <div class="pl-2">
            {{ formatTime(course.calendar[0].start_time) }} -
            {{ formatTime(course.calendar[0].end_time) }}
          </div>
        </div>
      </div>
      <!-- nivel  -->
      <div class="flex pt-2 align-middle">
        <div class="flex items-center">
          <div class="text-3xl">{{ course.level.name }}</div>
        </div>
      </div>
      <!-- instructor -->
      <div class="flex justify-between mt-2">
        <div class="flex items-center">
          <div>
            <img
              v-if="course.instructors[0].details.gender == 'FEMALE'"
              class="object-cover object-top rounded-full w-9 h-9"
              src="../../assets/images/avatar/kaya.jpg"
              alt
            />
            <img
              v-if="course.instructors[0].details.gender == 'MALE'"
              class="object-cover object-top rounded-full w-9 h-9"
              src="../../assets/images/avatar/will.jpg"
              alt
            />
          </div>
          <div class="ml-3">
            <p
              class="text-sm font-medium leading-5 text-gray-700 group-hover:text-gray-900"
            >{{ course.instructors[0].details.firstname }}</p>
            <p
              v-if="course.instructors[0].details.gender == 'FEMALE'"
              class="text-xs font-medium leading-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-700 group-focus:underline"
            >Instructora</p>
            <p
              v-else
              class="text-xs font-medium leading-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-700 group-focus:underline"
            >Instructor</p>
          </div>
        </div>
        <div class="flex items-center">
          <img class="w-6 h-6" src="../../assets/images/logros.svg" alt />
          <div class="pl-1">8/10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate, formatTime } from "../../helpers/functions";

export default {
  props: {
    course: { type: Object, required: true }
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

<style></style>
