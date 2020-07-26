<template>
  <div
    id="nav"
    v-if="this.$route.name != 'login'"
    class="flex h-screen overflow-hidden bg-primary-400"
  >
    <!-- Off-canvas menu for mobile -->
    <div v-if="isOpen" class="md:hidden">
      <div class="fixed inset-0 z-40 flex">
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
        -->
        <transition
          enter-active-class="transition duration-100 ease-out transform"
          enter-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in transform"
          leave-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div class="fixed inset-0">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
        </transition>
        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
        -->
        <div class="relative flex flex-col flex-1 w-full max-w-xs bg-gray-800">
          <div class="absolute top-0 right-0 p-1 -mr-14">
            <button
              @click="isOpen = false"
              class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
              aria-label="Close sidebar"
            >
              <svg
                class="w-6 h-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="w-auto h-16"
                src="../../assets/images/logo/logoMenu.png"
                alt="Ocean"
              />
            </div>
            <nav class="px-2 mt-5">
              <router-link v-if="this.$store.getters.getRole !== ''" to="/home">
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Inicio'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Inicio'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-4 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Inicio
                </a>
              </router-link>
              <router-link
                v-if="
                  this.$store.getters.getRole !== 'ADMIN' &&
                    this.$store.getters.getRole !== ''
                "
                to="/cursos"
              >
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Mis Cursos'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Mis Cursos'
                        ? 'text-primary-400 bg-primary-100'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-4 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Mis Cursos
                </a>
              </router-link>
              <router-link
                v-if="this.$store.getters.getRole === 'STUDENT'"
                to="/objetivos"
              >
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Objetivos'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Objetivos'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Objetivos
                </a>
              </router-link>
              <router-link
                v-if="this.$store.getters.getRole !== ''"
                to="/calendario"
              >
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Calendario'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Calendario'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendario
                </a>
              </router-link>
              <router-link
                v-if="this.$store.getters.getRole === 'ADMIN'"
                to="/estadisticas"
              >
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Estadísticas'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Estadísticas'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Estadísticas
                </a>
              </router-link>
              <router-link to="/alumnos">
                <a
                  v-if="this.$store.getters.getRole === 'ADMIN'"
                  @click="isOpen = false"
                  href="#"
                  :class="
                    this.$route.name == 'Alumnos'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Alumnos'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-4 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 17a20 20 0 0110-3c4 0 7 1 10 3v3H0v-3z"
                    />
                  </svg>
                  Alumnos
                </a>
              </router-link>
              <router-link to="/instructores">
                <a
                  v-if="this.$store.getters.getRole === 'ADMIN'"
                  @click="isOpen = false"
                  href="#"
                  :class="
                    this.$route.name == 'Instructores'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Instructores'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-4 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 17a20 20 0 0110-3c4 0 7 1 10 3v3H0v-3z"
                    />
                  </svg>
                  Instructores
                </a>
              </router-link>
              <a
                @click="logout()"
                href="#"
                class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-red-500 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                <img
                  src="../../assets/icons/stand-by.svg"
                  class="w-6 h-6 p-1 mr-4 bg-red-700 border-2 border-gray-900 rounded-full"
                  alt="logout"
                />
                Salir
              </a>
            </nav>
          </div>
          <div
            v-if="this.$store.getters.getRole !== ''"
            class="flex flex-shrink-0 p-4 bg-gray-700"
          >
            <router-link to="/perfil">
              <a
                @click="isOpen = false"
                href="#"
                class="flex-shrink-0 block group"
              >
                <div class="flex items-center">
                  <div>
                    <img
                      class="inline-block w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-base font-medium leading-6 text-white">
                      {{ this.$store.getters.getUserName }}
                    </p>
                    <p
                      class="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300"
                    >
                      Perfil
                    </p>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
        </div>
        <div class="flex-shrink-0 w-14" @click="isOpen = !isOpen">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-1 h-0 bg-gray-800">
          <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="w-auto h-16"
                src="../../assets/images/logo/logoMenu.png"
                alt="Ocean logo"
              />
            </div>
            <nav class="flex-1 px-2 mt-5 bg-gray-800">
              <router-link v-if="this.$store.getters.getRole !== ''" to="/home">
                <a
                  href="#"
                  :class="
                    this.$route.name == 'Inicio'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Inicio'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-3 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Inicio
                </a>
              </router-link>
              <router-link
                v-if="
                  this.$store.getters.getRole !== 'ADMIN' &&
                    this.$store.getters.getRole !== ''
                "
                to="/cursos"
              >
                <a
                  :class="
                    this.$route.name == 'Mis Cursos'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Mis Cursos'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Mis Cursos
                </a>
              </router-link>
              <router-link
                v-if="this.$store.getters.getRole === 'STUDENT'"
                to="/objetivos"
              >
                <a
                  href="#"
                  :class="
                    this.$route.name == 'Objetivos'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Objetivos'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-3 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Objetivos
                </a>
              </router-link>
              <router-link
                v-if="this.$store.getters.getRole !== ''"
                to="/calendario"
              >
                <a
                  href="#"
                  :class="
                    this.$route.name == 'Calendario'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Calendario'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-3 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendario
                </a>
              </router-link>
              <router-link to="/estadisticas">
                <a
                  v-if="this.$store.getters.getRole === 'ADMIN'"
                  href="#"
                  :class="
                    this.$route.name == 'Estadísticas'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Estadísticas'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-3 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Estadísticas
                </a>
              </router-link>
              <router-link to="/alumnos">
                <a
                  v-if="this.$store.getters.getRole === 'ADMIN'"
                  href="#"
                  :class="
                    this.$route.name == 'Alumnos'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Alumnos'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-3 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 17a20 20 0 0110-3c4 0 7 1 10 3v3H0v-3z"
                    />
                  </svg>
                  Alumnos
                </a>
              </router-link>
              <router-link to="/instructores">
                <a
                  v-if="this.$store.getters.getRole === 'ADMIN'"
                  href="#"
                  :class="
                    this.$route.name == 'Instructores'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Instructores'
                        ? 'text-primary-400'
                        : 'text-primary-300'
                    "
                    class="w-6 h-6 mr-3 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 17a20 20 0 0110-3c4 0 7 1 10 3v3H0v-3z"
                    />
                  </svg>
                  Instructores
                </a>
              </router-link>
              <a
                @click="logout()"
                href="#"
                class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-red-500 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                <img
                  src="../../assets/icons/stand-by.svg"
                  class="w-6 h-6 p-1 mr-3 bg-red-700 border-2 border-gray-900 rounded-full"
                  alt="logout"
                />
                Salir
              </a>
            </nav>
          </div>
          <div
            v-if="this.$store.getters.getRole !== ''"
            class="flex flex-shrink-0 p-4 bg-gray-700"
          >
            <a href="#" class="flex-shrink-0 block w-full group">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block rounded-full h-9 w-9"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </div>
                <router-link to="/perfil">
                  <div class="ml-3">
                    <p class="text-sm font-medium leading-5 text-white">
                      {{ this.$store.getters.getUserName }}
                    </p>
                    <p
                      class="text-xs font-medium leading-4 text-gray-300 transition duration-150 ease-in-out group-hover:text-gray-200"
                    >
                      Perfil
                    </p>
                  </div>
                </router-link>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <div class="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
        <button
          @click="isOpen = true"
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          aria-label="Open sidebar"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <!-- <main class="flex-1 overflow-auto bg-primary-400" tabindex="0">
        <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8"> -->
      <!-- Replace with your content-->
      <!-- <div class="px-4 py-4 sm:px-0">
            <slot name="content">
              <router-view />
            </slot>
          </div> -->
      <!-- /End replace -->
      <!-- </div>
      </main> -->
      <main
        class="relative z-0 flex-1 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="pt-2 pb-6 md:py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">
              {{ this.$route.name }}
            </h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <slot name="content">
              <router-view />
            </slot>
          </div>
        </div>
      </main>
      <ocean-footer></ocean-footer>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import { AUTH_LOGOUT } from "../../store/actions/auth";
export default {
  components: {
    "ocean-footer": Footer,
  },
  data: () => ({
    isOpen: false,
  }),
  methods: {
    logout() {
      this.$store.dispatch(AUTH_LOGOUT);
    },
  },
};
</script>

<style></style>
