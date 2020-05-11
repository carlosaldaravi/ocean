<template>
  <section class="bg-blue-100">
    <section class="container p-4 md:p-8 mx-auto">
      <!-- step 1 -->
      <div v-if="step == 1" class="bg-white">
        <div
          class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20"
        >
          <h2
            class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Bienvenido
            <br />
            <span class="text-indigo-600"
              >Listo para convertirte en parte de la familia Be Waters?</span
            >
          </h2>
          <div class="mt-8 flex">
            <div class="inline-flex rounded-md shadow">
              <a
                @click="step++"
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >Continuar</a
              >
            </div>
            <div class="ml-3 inline-flex">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out"
                >Salir</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- step 2 -->
      <div
        v-if="step == 2"
        class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
      >
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Información personal
            </h3>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="firstname"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Nombre</label
                  >
                  <input
                    v-model="user.details.firstname"
                    id="first_name"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="lastname"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Apellidos</label
                  >
                  <input
                    v-model="user.details.lastname"
                    id="last_name"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="dni"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >DNI</label
                  >
                  <input
                    id="dni"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="phone"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Número de teléfono</label
                  >
                  <input
                    v-model="user.details.phone"
                    id="phone"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="gender"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Sexo</label
                  >
                  <select
                    v-model="user.details.gender"
                    id="gender"
                    class="mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option value="MALE">Hombre</option>
                    <option value="FEMALE">Mujer</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    for="city"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Ciudad</label
                  >
                  <input
                    v-model="user.details.city"
                    id="city"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="date_born"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Fecha de nacimiento</label
                  >
                  <input
                    v-model="user.details.dateBorn"
                    id="date_born"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- step 3 -->
      <div
        v-if="step == 3"
        class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
      >
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Con fines de una mejor asignación a tu grupo ideal, rellena estos
              datos
            </h3>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="weight"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Peso</label
                  >
                  <input
                    v-model="user.details.weight"
                    id="weight"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="footprint"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Número de pie</label
                  >
                  <input
                    v-model="user.details.footprint"
                    id="footprint"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="Size"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Talla</label
                  >
                  <select
                    v-model="user.details.size"
                    id="Size"
                    class="mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- step 4 -->
      <div
        v-if="step == 4"
        class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6"
      >
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Notifications
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Decide which communications you'd like to receive and how.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <fieldset>
                <legend class="text-base leading-6 font-medium text-gray-900">
                  By Email
                </legend>
                <div class="mt-4">
                  <div class="flex items-start">
                    <div class="absolute flex items-center h-5">
                      <input
                        id="comments"
                        type="checkbox"
                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                    </div>
                    <div class="pl-7 text-sm leading-5">
                      <label for="comments" class="font-medium text-gray-700"
                        >Comments</label
                      >
                      <p class="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="candidates"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label
                          for="candidates"
                          class="font-medium text-gray-700"
                          >Candidates</label
                        >
                        <p class="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="offers"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label for="offers" class="font-medium text-gray-700"
                          >Offers</label
                        >
                        <p class="text-gray-500">
                          Get notified when a candidate accepts or rejects an
                          offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="mt-6">
                <legend class="text-base leading-6 font-medium text-gray-900">
                  Push Notifications
                </legend>
                <p class="text-sm leading-5 text-gray-500">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="push_everything"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_everything" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700"
                        >Everything</span
                      >
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="push_email"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_email" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700"
                        >Same as email</span
                      >
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="push_nothing"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_nothing" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700"
                        >No push notifications</span
                      >
                    </label>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      <span class="relative z-0 inline-flex shadow-sm">
        <button
          v-if="step > 1 && step <= max_step"
          @click="step--"
          type="button"
          class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          v-if="step > 1 && step < max_step"
          @click="step++"
          type="button"
          class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </span>
      <span class="inline-flex rounded-md shadow-sm">
        <button
          v-if="step == 5"
          @click="enroll"
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-xs leading-5 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          Entrar
        </button>
      </span>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import { User } from "../classes/user";
import { API } from "../classes/api";

export default {
  name: "Enrollment",
  components: {},
  data() {
    return {
      step: 1,
      max_step: 5,
      api: new API(),
      user: new User(),
    };
  },
  methods: {
    async enroll() {
      let res = await this.api.post("students", this.user);
    },
  },
  created() {
    this.user = this.$store.state.user.profile;

    // this.user.details = this.$store.state.profile.details;
  },
};
</script>
