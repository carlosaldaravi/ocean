<template>
  <section class>
    <section class="container p-4 mx-auto md:p-8">
      <div class="mt-3">
        <div>
          <nav class="flex justify-center">
            <a
              v-for="sport of sports"
              :key="sport.id"
              :class="{
                'bg-primary-200 text-secondary-100 hover:text-secondary-100':
                  sport.name == sportSelected.name,
              }"
              @click="sportSelected = sport"
              class="px-3 py-2 text-xl font-bold leading-5 rounded-lg rounded-b-none cursor-pointer hover:text-primary-300"
              >{{ sport.name }}</a
            >
          </nav>
        </div>
        <div class="flex justify-between mt-1">
          <div class="flex">
            <p class="mr-2 border-b w-19 border-primary-100">
              Todos
            </p>
            <div @click="changeShowAll()">
              <span
                role="checkbox"
                tabindex="0"
                aria-checked="false"
                :class="{
                  'bg-primary-300': showAll,
                  'bg-primary-400': !showAll,
                }"
                class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
              >
                <span
                  aria-hidden="true"
                  :class="{
                    'translate-x-5': showAll,
                    'translate-x-0': !showAll,
                  }"
                  class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow"
                >
                  <span
                    class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                  >
                    <svg
                      :class="{
                        'opacity-0 ease-out duration-100': showAll,
                        'opacity-100 ease-in duration-200': !showAll,
                      }"
                      class="w-3 h-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    :class="{
                      'opacity-100 ease-in duration-200': showAll,
                      'opacity-0 ease-out duration-100': !showAll,
                    }"
                    class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                  >
                    <svg
                      class="w-3 h-3 text-primary-300"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div class="flex">
            <p
              v-if="active"
              :class="{ 'opacity-25': showAll }"
              class="mr-2 border-b w-19 border-primary-100"
            >
              Activos
            </p>
            <p
              v-if="!active"
              :class="{ 'opacity-25': showAll }"
              class="mr-2 border-b w-18 border-primary-100"
            >
              Inactivos
            </p>
            <div @click="changeActiveStatus()">
              <span
                role="checkbox"
                tabindex="0"
                aria-checked="false"
                :class="{
                  'bg-primary-300': active,
                  'bg-primary-400': !active,
                  'cursor-not-allowed opacity-25': showAll,
                }"
                class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
              >
                <span
                  aria-hidden="true"
                  :class="{
                    'translate-x-5': active,
                    'translate-x-0': !active,
                  }"
                  class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow"
                >
                  <span
                    class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                  >
                    <svg
                      :class="{
                        'opacity-0 ease-out duration-100': active,
                        'opacity-100 ease-in duration-200': !active,
                      }"
                      class="w-3 h-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    :class="{
                      'opacity-100 ease-in duration-200': active,
                      'opacity-0 ease-out duration-100': !active,
                    }"
                    class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                  >
                    <svg
                      class="w-3 h-3 text-primary-300"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <list :students="studentsList"></list>
      </div>
    </section>
  </section>
</template>

<script>
import List from "../../components/student/List.vue";
import { Student } from "../../classes/student";
import { API } from "../../classes/api";
import { Sport } from "../../classes/sport";

export default {
  data() {
    return {
      api: new API(),
      active: true,
      showAll: false,
      sports: [], // sports
      sportSelected: new Sport(),

      students: [],
      studentsFiltered: [],
    };
  },
  created() {
    this.getSports();
    this.getStudents();
  },
  components: {
    List,
    Student,
  },
  computed: {
    studentsList: function() {
      this.studentsFiltered = this.students;
      if (!this.showAll) {
        if (this.active) {
          this.studentsFiltered = this.students.filter(
            (student) => student.status == "ACTIVE"
          );
        } else {
          this.studentsFiltered = this.students.filter(
            (student) => student.status == "INACTIVE"
          );
        }
      }
      return this.studentsFiltered.filter((student) => {
        return student.userSports.some(
          (uS) => uS.sportId === this.sportSelected.id
        );
      });
    },
  },
  methods: {
    async getSports() {
      let res = await this.api.get("sports");
      if (res.data.data) {
        res.data.data.forEach((sport) => {
          this.sports.push(new Sport(sport));
        });
        if (this.sports.length > 0) {
          this.sportSelected = res.data.data[0];
        }
      }
    },
    async getStudents() {
      let res = await this.api.get("students");
      if (res.data.data) {
        res.data.data.forEach((student) => {
          this.students.push(new Student(student));
          this.getActualStatus();
        });
      }
    },
    changeActiveStatus() {
      if (!this.showAll) {
        this.active = !this.active;
        this.getActualStatus();
      }
    },
    changeShowAll() {
      this.showAll = !this.showAll;
      if (this.showAll) {
        this.studentsFiltered = this.students;
      } else {
        this.getActualStatus();
      }
      this.getActualStatus();
    },
    getActualStatus() {
      if (this.active) {
        this.studentsFiltered = this.students.filter(
          (student) => student.status == "ACTIVE"
        );
      } else {
        this.studentsFiltered = this.students.filter(
          (student) => student.status == "INACTIVE"
        );
      }
    },
  },
};
</script>
