<template>
  <div v-if="user">
    <section v-if="editing" class="container mx-auto my-8">
      <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Perfil</h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >Esta información es pública así que cuidado con lo que compartes.</p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="mt-6">
                <label
                  for="about"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >Comentarios</label>
                <div class="rounded-md shadow-sm">
                  <textarea
                    id="about"
                    rows="3"
                    class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                    placeholder
                  ></textarea>
                </div>
                <p
                  class="mt-2 text-sm text-gray-500"
                >Aquí podrás poner si crees que hay algo más que debamos saber sobre ti.</p>
              </div>

              <div class="mt-6">
                <label class="block text-sm font-medium leading-5 text-gray-700">Foto</label>
                <div class="flex items-center mt-2">
                  <span class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                    <svg
                      class="w-full h-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <span class="ml-5 rounded-md shadow-sm">
                    <button
                      type="button"
                      class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    >Cambiar</button>
                  </span>
                </div>
              </div>

              <div class="mt-6">
                <label class="block text-sm font-medium leading-5 text-gray-700">Visualización</label>
                <div
                  class="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="text-center">
                    <svg
                      class="w-12 h-12 mx-auto text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p class="mt-1 text-sm text-gray-600">
                      <button
                        class="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
                      >Sube un archivo</button>
                      o haz arrastralo aquí
                    </p>
                    <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <PersonalData :editing="editing" :user="user" />
      <SpecificData :editing="editing" :user="user" />

      <div class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Cursos</h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >Selecciona los deportes y el idioma en los que estás interesado.</p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <fieldset>
                <legend class="text-base font-medium leading-6 text-gray-900">Deportes</legend>
                <div v-for="sport of sports" :key="sport.id" class="mt-4">
                  <!-- for de deportes en la escuela -->
                  <oc-checkbox
                    :value="sport.id"
                    :title="sport.name"
                    :checked="isChecked('sport', sport)"
                  ></oc-checkbox>
                </div>
              </fieldset>
              <fieldset>
                <legend class="pt-4 text-base font-medium leading-6 text-gray-900">Idiomas</legend>
                <div v-for="language of languages" :key="language.id" class="mt-4">
                  <!-- for de deportes en la escuela -->
                  <oc-checkbox
                    :value="language.id"
                    :title="language.name"
                    :checked="isChecked('language', language)"
                  ></oc-checkbox>
                </div>
              </fieldset>
              <fieldset class="mt-6">
                <legend class="text-base font-medium leading-6 text-gray-900">Push Notifications</legend>
                <p
                  class="text-sm leading-5 text-gray-500"
                >These are delivered via SMS to your mobile phone.</p>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="push_everything"
                      name="form-input push_notifications"
                      type="radio"
                      class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
                    />
                    <label for="push_everything" class="ml-3">
                      <span class="block text-sm font-medium leading-5 text-gray-700">Everything</span>
                    </label>
                  </div>
                  <div class="flex items-center mt-4">
                    <input
                      id="push_email"
                      name="form-input push_notifications"
                      type="radio"
                      class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
                    />
                    <label for="push_email" class="ml-3">
                      <span class="block text-sm font-medium leading-5 text-gray-700">Same as email</span>
                    </label>
                  </div>
                  <div class="flex items-center mt-4">
                    <input
                      id="push_nothing"
                      name="form-input push_notifications"
                      type="radio"
                      class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
                    />
                    <label for="push_nothing" class="ml-3">
                      <span
                        class="block text-sm font-medium leading-5 text-gray-700"
                      >No push notifications</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Not editing -->
    <section v-else class="container mx-auto my-8">
      <PersonalData :editing="editing" :user="user" />
      <SpecificData :editing="editing" :user="user" />
    </section>

    <span class="flex justify-center mb-4 rounded-md shadow-sm">
      <button
        v-if="!editing"
        @click="goToIndex()"
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-400 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >Volver</button>
      <button
        @click="editing = true"
        v-if="!editing"
        type="button"
        class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-400 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >Editar</button>
      <button
        @click="editing = false"
        v-if="editing"
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-400 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >Cancelar</button>
      <button
        v-if="editing"
        type="button"
        class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-400 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >Guardar</button>
    </span>
  </div>
</template>

<script>
import { formatDate } from "../helpers/functions";
import oc_input from "../components/forms/Input.vue";
import oc_checkbox from "../components/forms/Checkbox.vue";
import SpecificData from "../components/SpecificData.vue";
import PersonalData from "../components/PersonalData.vue";
import { User } from "../classes/user";
import { Sport } from "../classes/sport";
import { Language } from "../classes/language";
import { API } from "../classes/api";
export default {
  components: {
    "oc-input": oc_input,
    "oc-checkbox": oc_checkbox,
    SpecificData,
    PersonalData
  },

  data() {
    return {
      editing: false,
      api: new API(),
      user: null,
      sports: [],
      languages: []
    };
  },
  created() {
    this.getUserData();
    this.getSports();
    this.getLanguages();
  },
  methods: {
    formatDate,
    async getUserData() {
      const userId = this.$store.getters.getUserId;
      let {
        data: { data }
      } = await this.api.get(`users/${userId}`);
      this.user = new User(data);
    },
    formatDate,
    async getSports() {
      let {
        data: { data }
      } = await this.api.get(`sports`);
      data.forEach(sport => {
        this.sports.push(new Sport(sport));
      });
    },
    async getLanguages() {
      let {
        data: { data }
      } = await this.api.get(`languages`);
      data.forEach(language => {
        this.languages.push(new Sport(language));
      });
    },
    goToIndex() {
      this.$router.push(`/home`);
    },
    isChecked(toFind, element) {
      let found;
      switch (toFind) {
        case "sport":
          found = this.user.userSports.find(
            userSport => userSport.sport.name == element.name
          );
          break;
        case "language":
          found = this.user.languages.find(
            language => language.name == element.name
          );
          break;
      }
      if (found) return true;
      else return false;
    }
  }
};
</script>
