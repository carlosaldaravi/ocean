<template>
  <div v-if="user">
    <section v-if="editing" class="container mx-auto my-8">
      <form action="#" method="POST">
        <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Perfil
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-500">
                Esta información es pública así que cuidado con lo que
                compartes.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="mt-6">
                <label class="block text-sm font-medium leading-5 text-gray-700"
                  >Foto</label
                >
                <div class="flex items-center mt-2">
                  <span
                    class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full"
                  >
                    <!-- <img :src="previewImage" class="uploading-image" /> -->
                    <div v-if="!imgChanged">
                      <img
                        v-if="user.details.photo"
                        class="uploading-image"
                        :src="
                          'https://api-ocean.herokuapp.com/api/file/avatar/' +
                            user.details.photo
                        "
                        alt
                      />
                      <img
                        v-else
                        class="absolute object-cover object-top w-16 h-16 transform -translate-x-1/2 rounded-full top-12 left-1/2"
                        src="../assets/images/avatar/user_default.png"
                        alt
                      />
                    </div>
                    <div v-else>
                      <img class="" :src="previewImage" alt />
                    </div>
                    <svg
                      v-if="!user.details.photo"
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
                    <input
                      class="hidden px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                      type="file"
                      accept="image/jpeg"
                      @change="uploadImage"
                      ref="fileInput"
                    />
                    <button
                      @click="$refs.fileInput.click()"
                      type="button"
                      class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    >
                      Cambiar
                    </button>
                  </span>
                </div>
              </div>
              <div class="mt-6">
                <label
                  for="about"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Comentarios</label
                >
                <div class="rounded-md shadow-sm">
                  <textarea
                    id="about"
                    rows="3"
                    class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                    placeholder
                  ></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Aquí podrás poner si crees que hay algo más que debamos saber
                  sobre ti.
                </p>
              </div>
            </div>
          </div>
        </div>

        <PersonalData :editing="editing" :user="user" />
        <SpecificData
          v-if="this.$store.getters.getRole === 'ALUMNO'"
          :editing="editing"
          :user="user"
        />

        <div
          v-if="this.$store.getters.getRole === 'ALUMNO'"
          class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6"
        >
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Cursos
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-500">
                Añade deportes en los que estés interesado. Para añadir un nuevo
                deporte, tendrás que seleccionar el nivel. Ten en cuenta que no
                puedes eliminar un deporte si estás apuntado a alguna clase del
                mismo.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <fieldset>
                <legend class="text-base font-medium leading-6 text-gray-900">
                  Deportes
                </legend>
                <div v-if="user && user.userSports">
                  <div
                    v-for="userSport of user.userSports"
                    :key="userSport.sportId"
                    class="mt-4"
                  >
                    <div class="flex justify-between">
                      <div>
                        <div class="text-sm text-gray-700">
                          {{ userSport.sport.name }}
                        </div>
                        <div class="text-xs text-gray-700">
                          Nivel actual: {{ userSport.level.name }}
                        </div>
                      </div>
                      <div class="flex items-center ml-4">
                        <button
                          @click="
                            openModal(
                              'confirm_remove_sport_' + userSport.sportId
                            )
                          "
                          type="button"
                          class="inline-flex items-center px-2.5 py-1 text-xs font-medium leading-4 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded hover:bg-red-500 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
                        >
                          Eliminar
                        </button>
                        <Modal
                          :id="'confirm_remove_sport_' + userSport.sportId"
                        >
                          <slot>
                            <div
                              class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                            >
                              <svg
                                class="w-6 h-6 text-red-600"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                              </svg>
                            </div>
                          </slot>
                          <div>
                            <h3
                              class="text-lg font-medium leading-6 text-gray-900"
                              id="modal-headline"
                            >
                              Eliminar
                            </h3>
                            <div class="mt-2">
                              <p class="text-sm leading-5 text-gray-700">
                                ¿Estás seguro que quieres eliminar de tus
                                deportes el {{ userSport.sport.name }}?
                              </p>
                              <p class="text-xs leading-5 text-gray-500">
                                Ten en cuenta que no podrás eliminar este
                                deporte mientras estés apuntado a alguna de sus
                                clases.
                              </p>
                            </div>
                          </div>
                          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <span
                              class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
                            >
                              <button
                                @click="
                                  remove(userSport);
                                  closeModal(
                                    'confirm_remove_sport_' + userSport.sportId
                                  );
                                "
                                type="button"
                                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
                              >
                                Confirmar
                              </button>
                            </span>
                            <span
                              class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"
                            >
                              <button
                                @click="
                                  closeModal(
                                    'confirm_remove_sport_' + userSport.sportId
                                  )
                                "
                                type="button"
                                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                              >
                                Cancelar
                              </button>
                            </span>
                          </div>
                        </Modal>
                        <Modal id="confirm_cancel_editing">
                          <slot>
                            <div
                              class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                            >
                              <svg
                                class="w-6 h-6 text-red-600"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                              </svg>
                            </div>
                          </slot>
                          <div>
                            <h3
                              class="text-lg font-medium leading-6 text-gray-900"
                              id="modal-headline"
                            >
                              Cambios sin guardar
                            </h3>
                            <div class="mt-2">
                              <p class="text-sm leading-5 text-gray-700">
                                ¿Estás seguro que quieres salir sin guardar los
                                cambios?
                              </p>
                            </div>
                          </div>
                          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <span
                              class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
                            >
                              <button
                                @click="confirmCancelEditing()"
                                type="button"
                                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
                              >
                                Confirmar
                              </button>
                            </span>
                            <span
                              class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"
                            >
                              <button
                                @click="closeModal('confirm_cancel_editing')"
                                type="button"
                                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                              >
                                Cancelar
                              </button>
                            </span>
                          </div>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div v-for="sport of sports" :key="sport.id" class="mt-4"> -->
                <!-- for de deportes en la escuela -->
                <!-- <oc-checkbox :user="user" :value="sport" toUpdate="userSports"></oc-checkbox> -->
                <button
                  @click="openModal('modal_add_usersport')"
                  type="button"
                  class="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
                >
                  Añadir deporte
                </button>
                <Modal id="modal_add_usersport">
                  <div class="mt-3 text-center sm:mt-5">
                    <h3
                      class="text-lg font-medium leading-6 text-gray-900"
                      id="modal-headline"
                    >
                      Selecciona deporte
                    </h3>
                    <div>
                      <select
                        id="location"
                        class="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      >
                        <option v-for="sport of sportsLeft" :key="sport.id">
                          {{ sport.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <span
                      class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
                    >
                      <button
                        @click="closeModal('modal_add_usersport')"
                        type="button"
                        class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-primary-200 hover:bg-primary-300 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
                      >
                        Confirmar
                      </button>
                    </span>
                    <span
                      class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"
                    >
                      <button
                        @click="closeModal('modal_add_usersport')"
                        type="button"
                        class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                      >
                        Cancelar
                      </button>
                    </span>
                  </div>
                </Modal>
                <!-- <ProfileModal
                  v-if="showModal"
                  @closeModal="showModal = false"
                  :sports="sportsLeft()"
                />-->
                <!-- </div> -->
              </fieldset>
              <fieldset>
                <legend
                  class="pt-4 text-base font-medium leading-6 text-gray-900"
                >
                  Idiomas
                </legend>
                <div
                  v-for="language of user.languages"
                  :key="language.id"
                  class="mt-4"
                >
                  <!-- for de idiomas en la escuela -->
                  <oc-checkbox
                    v-model="language.checked"
                    :label="language.language.name"
                  ></oc-checkbox>
                </div>
              </fieldset>
              <!-- <fieldset class="mt-6">
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
              </fieldset>-->
            </div>
          </div>
        </div>
      </form>
    </section>
    <!-- Not editing -->
    <section v-else class="container mx-auto my-8">
      <PersonalData :editing="editing" :user="user" />
      <SpecificData
        v-if="this.$store.getters.getRole === 'ALUMNO'"
        :editing="editing"
        :user="user"
      />
    </section>

    <span class="flex justify-center mb-4">
      <button
        @click="editing = true"
        v-if="!editing"
        type="button"
        class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >
        Editar
      </button>
      <button
        @click="cancelEditing()"
        v-if="editing"
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >
        Cancelar
      </button>
      <button
        @click="saveUser()"
        v-if="editing"
        type="button"
        class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
      >
        Guardar
      </button>
    </span>
  </div>
</template>

<script>
import { formatDate } from "../helpers/functions";
import oc_input from "../components/forms/Input.vue";
import oc_checkbox from "../components/forms/Checkbox.vue";
import SpecificData from "../components/SpecificData.vue";
import PersonalData from "../components/PersonalData.vue";
import ProfileModal from "../components/user/ProfileModal.vue";
import Modal from "../components/modals/Modal.vue";
import { User } from "../classes/user";
import { Sport } from "../classes/sport";
import { Language } from "../classes/language";
import { API } from "../classes/api";
import { UI } from "../mixins/UI";
import { USER_PHOTO, USER_REQUEST } from "../store/actions/user";

export default {
  components: {
    "oc-input": oc_input,
    "oc-checkbox": oc_checkbox,
    SpecificData,
    PersonalData,
    ProfileModal,
    Modal,
  },
  mixins: [UI],
  data() {
    return {
      editing: false,
      api: new API(),
      imgChanged: false,
      user: null,
      auxUser: null,
      sports: [],
      sportsLeft: [],
      showModal: false,
      showConfirmModal: false,
      previewImage: null,
      newImageExtension: "",
    };
  },
  created() {
    this.$store.dispatch("SET_LOADING", true);
    this.getUserData();
    this.getSports();
    this.getSportsLeft();
    this.$store.dispatch("SET_LOADING", false);
  },
  computed: {},
  methods: {
    formatDate,
    async getUserData() {
      const userId = this.$store.getters.getUserId;
      let {
        data: { data },
      } = await this.api.get(`users/${userId}`);
      if (data) {
        this.user = new User(data);
        this.auxUser = new User(data);
        this.getLanguages();
      }
    },
    async getSports() {
      let {
        data: { data },
      } = await this.api.get(`sports`);
      data.forEach((sport) => {
        this.sports.push(new Sport(sport));
      });
    },
    async getLanguages() {
      let {
        data: { data },
      } = await this.api.get(`languages`);
      data.forEach((language) => {
        let checkedLanguages = this.user.languages.find(
          (userLanguage) => userLanguage.language.id == language.id
        );

        if (!checkedLanguages) {
          this.user.languages.push({
            checked: false,
            language: new Language(language),
          });
          this.auxUser.languages.push({
            checked: false,
            language: new Language(language),
          });
        }
      });
    },
    goToIndex() {
      this.$router.push(`/home`);
    },
    async saveUser() {
      this.$store.dispatch("SET_LOADING", true);
      let res = await this.api.patch(`users`, this.user);
      if (res.data) {
        this.user = res.data.data;
        this.auxUser = res.data.data;
        this.$store.dispatch(USER_REQUEST, res.data.data);
      }
      if (this.previewImage) {
        this.$store.dispatch(USER_PHOTO, this.user.details.photo);
      }
      this.editing = false;
      this.$store.dispatch("SET_LOADING", false);
    },
    getSportsLeft() {
      if (this.user) {
        this.userSports = this.user.userSports.map(
          (userSport) => userSport.sport.id
        );

        let sportsLeft = this.sports.filter((sport) => {
          return !userSports.includes(sport.id);
        });
      }
    },
    async remove(userSport) {
      var index = this.user.userSports.indexOf(userSport);
      if (index > -1) {
        let {
          data: { data },
        } = await this.api.delete(`users/sport`, userSport);
        if (data.error) {
          this.$store.dispatch("ADD_NOTIFICATION", {
            type: "error",
            message:
              "No se puede eliminar teniendo reservado un curso de este deporte",
          });
        } else {
          this.user.userSports.splice(index, 1);
        }
      }
    },
    uploadImage(e) {
      this.imgChanged = true;
      const image = e.target.files[0];
      const reader = new FileReader();
      let extension = image.name.split(".");
      this.newImageExtension = extension[extension.length - 1];
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        this.user.details.photo64 = e.target.result;
      };
    },
    cancelEditing() {
      if (!this.$_.isEqual(this.user, this.auxUser)) {
        this.openModal("confirm_cancel_editing");
      } else {
        this.editing = false;
      }
    },
    confirmCancelEditing() {
      this.editing = false;
      this.closeModal("confirm_cancel_editing");
      this.user = this.$_.cloneDeep(this.auxUser);
    },
  },
};
</script>
