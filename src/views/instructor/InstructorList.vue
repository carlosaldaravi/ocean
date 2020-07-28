<template>
  <section class>
    <section v-if="!editing" class="container p-4 mx-auto md:p-8">
      <div class="">
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
        <list :instructors="instructorsList"></list>
      </div>
    </section>
    <section v-if="editing">
      <form action="#" method="POST">
        <div class="container mx-auto">
          <PersonalData
            :editing="editing"
            :user="newInstructor"
            :userError="userError"
            @checkUser="checkUser"
            @clearError="
              userError = '';
              newUserOk = true;
            "
          />
        </div>
        <div
          v-if="this.$store.getters.getRole === 'ADMIN'"
          class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6"
        >
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Cursos
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-500">
                Añade los deportes e idiomas en los que el instructor va a
                impartir clases
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-1">
              <fieldset>
                <legend class="text-base font-medium leading-6 text-gray-900">
                  Idiomas
                </legend>
                <div
                  v-for="language of newInstructor.languages"
                  :key="language.id"
                  class="mt-2"
                >
                  <!-- for de idiomas en la escuela -->
                  <oc-checkbox
                    v-model="language.checked"
                    :label="language.name"
                  ></oc-checkbox>
                </div>
              </fieldset>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-1">
              <fieldset>
                <legend class="text-base font-medium leading-6 text-gray-900">
                  Deportes
                </legend>
                <div
                  v-for="sport of newInstructor.sports"
                  :key="sport.id"
                  class="mt-2"
                >
                  <!-- for de deportes en la escuela -->
                  <oc-checkbox
                    v-model="sport.checked"
                    :label="sport.name"
                  ></oc-checkbox>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </section>
    <div v-if="!newUserOk" class="flex justify-center mt-3">
      <p class="text-red-500">Email de usuario incorrecto</p>
    </div>
    <span class="flex justify-center mt-2">
      <button
        @click="editing = true"
        v-if="!editing"
        type="button"
        class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >
        Nuevo
      </button>
      <button
        @click="editing = false"
        v-if="editing"
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >
        Cancelar
      </button>
      <button
        @click="createInstructor()"
        v-if="editing"
        type="button"
        class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >
        Guardar
      </button>
    </span>
  </section>
</template>

<script>
import List from "../../components/instructor/List.vue";
import oc_checkbox from "../../components/forms/Checkbox.vue";
import PersonalData from "../../components/PersonalData.vue";
import { Instructor } from "../../classes/instructor";
import { API } from "../../classes/api";
import { Sport } from "../../classes/sport";
import { Language } from "../../classes/language";

export default {
  data() {
    return {
      api: new API(),
      active: true,
      editing: false,
      showAll: false,
      sports: [], // sports
      languages: [], // sports
      sportSelected: new Sport(),
      newInstructor: new Instructor(),
      instructors: [],
      instructorsFiltered: [],
      userError: "",
      newUserOk: true,
    };
  },
  created() {
    this.getSports();
    this.getLanguages();
    this.getInstructors();
  },
  components: {
    List,
    Instructor,
    PersonalData,
    "oc-checkbox": oc_checkbox,
  },
  computed: {
    instructorsList: function() {
      this.instructorsFiltered = this.instructors;
      if (!this.showAll) {
        if (this.active) {
          this.instructorsFiltered = this.instructors.filter(
            (instructor) => instructor.status == "ACTIVE"
          );
        } else {
          this.instructorsFiltered = this.instructors.filter(
            (instructor) => instructor.status == "INACTIVE"
          );
        }
      }
      return this.instructorsFiltered.filter((instructor) => {
        return instructor.userSports.some(
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
          this.newInstructor.sports = this.sports;
        }
      }
    },
    async getLanguages() {
      let res = await this.api.get("languages");
      if (res.data.data) {
        res.data.data.forEach((language) => {
          this.languages.push(new Language(language));
          if (this.languages.length > 0) {
            this.newInstructor.languages = this.languages;
          }
        });
      }
    },
    async getInstructors() {
      let res = await this.api.get("instructors");
      if (res.data.data) {
        res.data.data.forEach((instructor) => {
          this.instructors.push(new Instructor(instructor));
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
        this.instructorsFiltered = this.instructors;
      } else {
        this.getActualStatus();
      }
      this.getActualStatus();
    },
    getActualStatus() {
      if (this.active) {
        this.instructorsFiltered = this.instructors.filter(
          (instructor) => instructor.status == "ACTIVE"
        );
      } else {
        this.instructorsFiltered = this.instructors.filter(
          (instructor) => instructor.status == "INACTIVE"
        );
      }
    },
    async checkUser(value) {
      let res = await this.api.get(`users/email/${value}`);
      if (res.data.data) {
        let foundUser = res.data.data;
        if (foundUser.roles.length > 1) {
          this.userError = "Usuario incompatible";
        } else {
          this.userError = "";
        }
      } else {
        this.userError = "Usuario no encontrado";
      }
    },
    async createInstructor() {
      if (this.userError != "") {
        this.newUserOk = false;
      } else {
        this.newUserOk = true;

        let res = await this.api.post(`instructors/`, this.newInstructor);
        this.newInstructor = new Instructor();
        this.$router.go();
      }
    },
  },
};
</script>
