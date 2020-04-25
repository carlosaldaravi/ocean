<template>
  <div class="min-h-screen bg-white flex w-full">
    <div
      class="flex-1 flex flex-col justify-center py-4 md:py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm">
        <div>
          <div class="text-center">
            <img class="h-40 md:h-64 mx-auto" src="../assets/images/logo.png" alt="Ocean" />
          </div>
          <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">Welcome to Ocean Platform</h2>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form @submit.prevent>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >Correo electrónico</label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    v-model="email"
                    id="email"
                    type="email"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="password"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >Contraseña</label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    v-model="password"
                    id="password"
                    type="password"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="mt-6 flex items-center justify-between"></div>
              <div class="mt-6 flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm leading-5 text-gray-900"
                  >Recuérdame</label>
                </div>

                <div class="text-sm leading-5">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >Contraseña olvidada?</a>
                </div>
              </div>

              <div v-if="!loading" class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    @click="signin"
                    type="submit"
                    class="w-full flex justify-center mb-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >Entrar</button>
                </span>
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    @click="signup"
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >Registrarme</button>
                </span>
              </div>
              <div v-else>Loading...</div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden sm:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover md:object-right"
        src="https://images.unsplash.com/photo-1534255355456-2d8e6930c5e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
        alt
      />
    </div>
  </div>
</template>

<script>
import { API } from "../classes/api";

import { config } from "../config";

export default {
  name: "loginComponent",
  data() {
    return {
      api: new API(),
      email: "",
      password: "",

      // others
      loading: null,
      msg: null
    };
  },
  computed: {
    errores: function() {
      if (!this.email) return "Introduzca su email";
      if (!this.password) return "Introduzca su contraseña";

      return false;
    }
  },
  methods: {
    async signin() {
      this.loading = true;

      let { data, success } = await this.api.post("/auth/signin", {
        email: this.email,
        password: this.password
      });

      this.loading = false;

      console.log(data)
      console.log(success)

      if (!data.status != config.network.SUCCESS) {
        this.msg = "Error";
        return;
      }
      console.log(data);

      localStorage.setItem("user_token", data.accessToken);
      this.$router.push(`/${data.rol}`);
    },
    async signup() {
      this.loading = true;
      let res = await this.api.post("/auth/signup", {
        email: this.email,
        password: this.password
      });
      this.loading = false;
      return;
    }
  }
};
</script>