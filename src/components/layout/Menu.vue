<template>
  <!-- <div id="nav" v-if="this.$route.name != 'login'">
    <nav class="bg-primary-200">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="w-8 h-8" src="../../assets/images/logo.png" alt="Workflow logo" />
            </div>
            <div class="hidden md:block">
              <div class="flex items-baseline ml-10">
                <router-link
                  to="/home"
                  class="px-3 py-2 text-sm font-medium text-white rounded-md bg-primary-300 focus:outline-none focus:text-white focus:bg-indigo-600"
                >Inicio</router-link>|
                <router-link
                  to="/alumno"
                  class="px-3 py-2 text-sm font-medium text-white rounded-md bg-primary-300 focus:outline-none focus:text-white focus:bg-indigo-600"
                >Alumno</router-link>|
                <router-link
                  to="/about"
                  class="px-3 py-2 text-sm font-medium text-white rounded-md bg-primary-300 focus:outline-none focus:text-white focus:bg-indigo-600"
                >About</router-link>|
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="flex items-center ml-4 md:ml-6">
              <button
                class="p-1 text-indigo-300 border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-indigo-600"
                aria-label="Notifications"
              >
                <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
  </button>-->

  <!-- Profile dropdown -->
  <!-- <div class="relative ml-3">
                <div>
                  <button
                    class="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt
                    />
                  </button>
  </div>-->
  <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
  -->
  <!-- <div class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
                  <div class="py-1 bg-white rounded-md shadow-xs">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >Your Profile</a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >Settings</a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  <div class="flex -mr-2 md:hidden">-->
  <!-- Mobile menu button -->
  <!-- <button
              class="inline-flex items-center justify-center p-2 text-indigo-300 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 focus:text-white"
  >-->
  <!-- Menu open: "hidden", Menu closed: "block" -->
  <!-- <svg class="block w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
  </svg>-->
  <!-- Menu open: "block", Menu closed: "hidden" -->
  <!-- <svg class="hidden w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
  </div>-->

  <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
  -->
  <!-- <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white bg-indigo-800 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
          >Dashboard</a>
          <a
            href="#"
            class="block px-3 py-2 mt-1 text-base font-medium text-indigo-200 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
          >Team</a>
          <a
            href="#"
            class="block px-3 py-2 mt-1 text-base font-medium text-indigo-200 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
          >Projects</a>
          <a
            href="#"
            class="block px-3 py-2 mt-1 text-base font-medium text-indigo-200 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
          >Calendar</a>
          <a
            href="#"
            class="block px-3 py-2 mt-1 text-base font-medium text-indigo-200 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
          >Reports</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="mt-1 text-sm font-medium leading-none text-indigo-300">tom@example.com</div>
            </div>
          </div>
          <div
            class="px-2 mt-3"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
              role="menuitem"
            >Your Profile</a>
            <a
              href="#"
              class="block px-3 py-2 mt-1 text-base font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
              role="menuitem"
            >Settings</a>
            <a
              href="#"
              class="block px-3 py-2 mt-1 text-base font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
              role="menuitem"
            >Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  </div>-->

  <div
    id="nav"
    v-if="this.$route.name != 'login'"
    class="flex h-screen overflow-hidden bg-gray-100"
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
                class="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                alt="Workflow"
              />
            </div>
            <nav class="px-2 mt-5">
              <router-link to="/home">
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Home'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Home'
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
              <router-link to="/cursos">
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Cursos'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Cursos'
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
                  Cursos
                </a>
              </router-link>
              <router-link to="/targets">
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Targets'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Targets'
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
              <router-link to="/calendar">
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Calendar'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Calendar'
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
              <router-link to="/home">
                <a
                  @click="isOpen = false"
                  :class="
                    this.$route.name == 'Stats'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Stats'
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
            </nav>
          </div>
          <div class="flex flex-shrink-0 p-4 bg-gray-700">
            <router-link to="/profile">
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
                      Carlos Aldaravi
                    </p>
                    <p
                      class="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300"
                    >
                      Ver perfil
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
                class="w-8 h-8"
                src="../../assets/images/logo.png"
                alt="Ocean logo"
              />
            </div>
            <nav class="flex-1 px-2 mt-5 bg-gray-800">
              <router-link to="/home">
                <a
                  href="#"
                  :class="
                    this.$route.name == 'Home'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Home'
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
              <router-link to="/cursos">
                <a
                  :class="
                    this.$route.name == 'Cursos'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  href="#"
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Cursos'
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
                  Mis clases
                </a>
              </router-link>
              <router-link to="/targets">
                <a
                  href="#"
                  :class="
                    this.$route.name == 'Targets'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Targets'
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
              <router-link to="/calendar">
                <a
                  href="#"
                  :class="
                    this.$route.name == 'Calendar'
                      ? 'text-primary-400 bg-primary-100'
                      : 'text-primary-300'
                  "
                  class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  <svg
                    :class="
                      this.$route.name == 'Calendar'
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
              <a
                href="#"
                :class="
                  this.$route.name == 'Stats'
                    ? 'text-primary-400 bg-primary-100'
                    : 'text-primary-300'
                "
                class="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group hover:text-primary-400 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                <svg
                  :class="
                    this.$route.name == 'Stats'
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
            </nav>
          </div>
          <div class="flex flex-shrink-0 p-4 bg-gray-700">
            <a href="#" class="flex-shrink-0 block w-full group">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block rounded-full h-9 w-9"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </div>
                <router-link to="/profile">
                  <div class="ml-3">
                    <p class="text-sm font-medium leading-5 text-white">
                      Carlos Aldaravi
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
      <main class="flex-1 bg-primary-400" tabindex="0">
        <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- Replace with your content-->
          <div class="px-4 py-4 sm:px-0">
            <slot name="content">
              <router-view />
            </slot>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
};
</script>

<style></style>
