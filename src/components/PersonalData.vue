<template>
  <div>
    <div v-if="editing" class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Información Personal</h3>
          <p class="mt-1 text-sm leading-5 text-gray-500">Rellena la información personal</p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <oc-input label="firstname" title="Nombre" v-model="user.details.firstname"></oc-input>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <oc-input label="lastname" title="Apellidos" v-model="user.details.lastname"></oc-input>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <oc-input label="dni" title="DNI" type="dni" v-model="user.details.dni"></oc-input>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="user_email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Email</label>
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  @blur="checkEmail()"
                  @keyup="clearError()"
                  v-model="user.email"
                  class="block w-full form-input sm:text-sm sm:leading-5"
                  type="email"
                  id="user_email"
                />
              </div>
              <div v-if="this.$store.getters.getRole === 'ADMIN'" class="ml-2">
                <span
                  v-if="userError && user.email != ''"
                  class="text-xs italic font-semibold text-red-500 md:text-sm"
                >{{ userError }}</span>
              </div>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="gender" class="block text-sm font-medium leading-5 text-gray-700">Sexo</label>
              <select
                id="gender"
                v-model="user.details.gender"
                class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              >
                <option value="MALE">Hombre</option>
                <option value="FEMALE">Mujer</option>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
              <oc-input label="city" title="Ciudad" v-model="user.details.city"></oc-input>
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
              <oc-input label="phone" title="Teléfono" v-model="user.details.phone"></oc-input>
            </div>
            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
              <oc-input
                type="date"
                label="dateBorn"
                title="Fecha de nacimiento"
                v-model="user.details.dateBorn"
              ></oc-input>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="p-6 bg-white rounded-lg md:flex">
      <div>
        <img
          class="absolute object-cover object-top w-16 h-16 transform -translate-x-1/2 rounded-full top-12 left-1/2"
          :src="'http://localhost:8080/dist/img/'+user.details.photo"
          alt
        />
      </div>
      <div class="w-full text-center md:text-left">
        <div class="w-auto md:grid md:grid-cols-5 md:gap-6">
          <div class="md:col-span-2">Datos personales</div>
          <div class="mt-2 md:mt-0 md:col-span-3">
            <div class="text-purple-500 lowercase">{{ getRole() }}</div>
            <h2 class="text-lg">{{ user.details.firstname }} {{ user.details.lastname }}</h2>
            <div class="text-gray-600">{{ user.email }}</div>
            <div v-if="user.details.phone" class="text-gray-600">{{ user.details.phone }}</div>
            <div v-if="user.details.city" class="text-gray-600">{{ user.details.city }}</div>
            <div v-if="user.details.dni" class="text-gray-600">{{ user.details.dni }}</div>
            <div
              v-if="user.details.dateBorn"
              class="text-gray-600"
            >{{ formatDate(user.details.dateBorn) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../helpers/functions";
import oc_input from "./forms/Input.vue";
import oc_checkbox from "./forms/Checkbox.vue";
export default {
  components: {
    "oc-input": oc_input,
    "oc-checkbox": oc_checkbox,
  },
  props: {
    user: { type: Object, required: true },
    editing: { type: Boolean, required: true },
    userError: { type: String, required: false },
  },
  methods: {
    formatDate,
    getRole() {
      const roles = this.user.roles.filter((role) => role.name !== "GENERAL");
      let userRoles = "";
      roles.forEach((role) => {
        userRoles += role.name + ", ";
      });
      return userRoles.substring(0, userRoles.length - 2);
    },
    checkEmail() {
      this.$emit("checkUser", this.user.email);
    },
    clearError() {
      this.$emit("clearError");
    },
  },
};
</script>

<style></style>
