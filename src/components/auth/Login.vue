<template>
  <div class="flex w-full min-h-screen bg-white">
    <div
      class="flex flex-col justify-center flex-1 px-4 py-4 md:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="w-full max-w-sm mx-auto">
        <div>
          <div class="text-center">
            <img
              class="h-40 mx-auto md:h-64"
              src="../../assets/images/logo/logoLogin.png"
              alt="Ocean"
            />
          </div>
          <h2 class="mt-6 text-3xl font-extrabold leading-9 text-gray-900">
            Welcome to Ocean Platform
          </h2>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form @submit.prevent>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Correo electrónico</label
                >
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    v-model="email"
                    id="email"
                    type="email"
                    required
                    class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="password"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Contraseña</label
                >
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    v-model="password"
                    id="password"
                    type="password"
                    :required="showSecondPassword"
                    class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div v-if="showSecondPassword" class="mt-6">
                <label
                  for="password2"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Repite Contraseña</label
                >
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    v-model="password2"
                    id="password2"
                    type="password"
                    class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div
                v-if="error"
                :class="{
                  'text-red-600': errorStatus == 'error',
                  'text-green-600': errorStatus == 'success',
                }"
                class="mt-4 text-lg font-semibold text-red-600"
              >
                {{ msg }}
              </div>

              <div class="flex items-center justify-between mt-6"></div>
              <div class="flex items-center justify-between mt-6">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    class="w-4 h-4 transition duration-150 ease-in-out text-primary-300 form-checkbox"
                  />
                  <label
                    for="remember_me"
                    class="block ml-2 text-sm leading-5 text-primary-200"
                    >Recuérdame</label
                  >
                </div>

                <div class="text-sm leading-5">
                  <a
                    href="#"
                    class="font-medium transition duration-150 ease-in-out text-primary-200 hover:text-primary-300 focus:outline-none focus:underline"
                    >Contraseña olvidada?</a
                  >
                </div>
              </div>

              <div v-if="!loading" class="mt-6">
                <span
                  v-if="!showSecondPassword"
                  class="block w-full rounded-md shadow-sm"
                >
                  <button
                    @click="signin"
                    type="submit"
                    class="flex justify-center w-full px-4 py-2 mb-4 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-200 hover:bg-primary-300 focus:outline-none focus:shadow-outline-indigo"
                  >
                    Entrar
                  </button>
                </span>
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    @click="signup"
                    type="submit"
                    class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-200 hover:bg-primary-300 focus:outline-none focus:shadow-outline-indigo"
                  >
                    Registrarme
                  </button>
                </span>
                <span
                  v-if="showSecondPassword"
                  class="block w-full rounded-md shadow-sm"
                >
                  <button
                    @click="showSecondPassword = false"
                    type="submit"
                    class="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-200 hover:bg-primary-300 focus:outline-none focus:shadow-outline-indigo"
                  >
                    Cancelar registro
                  </button>
                </span>
              </div>
              <div v-else>Cargando...</div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex-1 hidden w-0 sm:block">
      <img
        class="absolute inset-0 object-cover w-full h-full md:object-right"
        src="https://images.unsplash.com/photo-1534255355456-2d8e6930c5e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
        alt
      />
    </div>
  </div>
</template>

<script>
import { API } from "../../classes/api";
import { AUTH_REQUEST } from "../../store/actions/auth";
import { config } from "../../config";

export default {
  name: "loginComponent",
  data() {
    return {
      api: new API(),
      email: "",
      password: "",
      password2: "",
      error: false,
      errorStatus: "",
      showSecondPassword: false,

      // others
      loading: null,
      msg: null,
    };
  },
  created() {
    if (this.$store.getters.isAuthenticated) {
      this.$router.push(`/home`);
    }
  },
  computed: {
    errores: function() {
      if (!this.email) return "Introduzca su email";
      if (!this.password) return "Introduzca su contraseña";

      return false;
    },
  },
  methods: {
    async signin() {
      if (this.password != "" && this.email != "") {
        this.$store.dispatch("SET_LOADING", true);
        this.loading = true;
        this.error = false;
        const { email, password } = this;
        this.$store
          .dispatch(AUTH_REQUEST, { email, password })
          .then((res) => {
            console.log("res login: ", res);

            this.$store.dispatch("SET_LOADING", false);
            if (res.data.data.user.roles.length === 1) {
              this.$router.push(`/welcome`);
            } else {
              this.$router.push(`/home`);
            }
          })
          .catch((error) => {
            this.$store.dispatch("SET_LOADING", false);
            this.loading = false;
            this.error = true;
            this.errorStatus = "error";
            this.msg = "Credenciales incorrectas";
          });
      }
    },

    async signup() {
      if (!this.showSecondPassword) {
        this.error = true;
        this.showSecondPassword = true;
        this.errorStatus = "error";
        this.msg = "Repite la contraseña";
      } else {
        if (this.password == this.password2 && this.password != "") {
          this.$store.dispatch("SET_LOADING", true);
          this.loading = true;
          let res = await this.api.post("auth/signup", {
            email: this.email,
            password: this.password,
          });
          this.$store.dispatch("SET_LOADING", false);
          this.loading = false;

          if (res.data.response) {
            this.errorStatus = "error";
            this.msg = "Email en uso";
            return;
          } else {
            this.msg = "Registrado correctamente, realiza login";
            this.showSecondPassword = false;
            this.errorStatus = "success";
            this.password = "";
            this.password2 = "";
          }
        } else {
          this.error = true;
          this.errorStatus = "error";
          this.msg = "Las contraseñas no coinciden";
          this.password = "";
          this.password2 = "";
        }
      }
      return;
    },
  },
};
</script>
