<template>
  <section class="container p-4 mx-auto md:p-8">
    <!-- start filters -->
    <div class="space-y-1">
      <!-- <label
        id="listbox-label"
        class="block text-sm font-medium leading-5 text-gray-700"
      >
        Año seleccionado:
      </label>
      <div class="relative">
        <span
          @click="openYear()"
          class="inline-block w-full rounded-md shadow-sm"
        >
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            class="relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <span class="block truncate">
              {{ yearSelected }}
            </span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </span>

        <div
          v-show="isOpenYear"
          class="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"
        >
          <ul
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            class="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
          >
            <li
              v-for="year of years"
              :key="year"
              @click="selectYear(year)"
              @mouseenter="hoverYear = year"
              @mouseleave="hoverYear = null"
              :class="{
                'text-primary-400 bg-primary-300': hoverYear == year,
                'text-primary-300': hoverYear != year,
              }"
              id="listbox-option-0"
              role="option"
              class="relative py-2 pl-3 cursor-default select-none text-primary-100 pr-9"
            >
              <span
                :class="{
                  'text-primary-400': hoverYear == year,
                  'text-primary-300': hoverYear != year,
                  'font-semibold': yearSelected == year,
                  'font-normal': yearSelected != year,
                }"
                class="block font-normal truncate"
              >
                {{ year }}
              </span>
              <span
                v-if="yearSelected == year"
                :class="{
                  'text-primary-400': hoverYear == year,
                  'text-primary-300': hoverYear != year,
                }"
                class="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-300"
              >
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="space-y-1">
        <label
          id="listbox-label"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Mes seleccionado:
        </label>
        <div class="relative">
          <span
            @click="openMonth()"
            class="inline-block w-full rounded-md shadow-sm"
          >
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
              class="relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            >
              <span class="block truncate">
                {{ monthSelected }}
              </span>
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </span>

          <div
            v-show="isOpenMonth"
            class="absolute w-full mt-1 bg-white rounded-md shadow-lg"
          >
            <ul
              tabindex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              class="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
            >
              <li
                v-for="month of months"
                :key="month"
                @click="selectMonth(month)"
                @mouseenter="hoverMonth = month"
                @mouseleave="hoverMonth = null"
                :class="{
                  'text-primary-400 bg-primary-300': hoverMonth == month,
                  'text-primary-300': hoverMonth != month,
                }"
                id="listbox-option-0"
                role="option"
                class="relative py-2 pl-3 cursor-default select-none text-primary-100 pr-9"
              >
                <span
                  :class="{
                    'text-primary-400': hoverMonth == month,
                    'text-primary-300': hoverMonth != month,
                    'font-semibold': monthSelected == month,
                    'font-normal': monthSelected != month,
                  }"
                  class="block font-normal truncate"
                >
                  {{ month }}
                </span>
                <span
                  v-if="monthSelected == month"
                  :class="{
                    'text-primary-400': hoverMonth == month,
                    'text-primary-300': hoverMonth != month,
                  }"
                  class="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-300"
                >
                  <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
      <!-- end filters -->
      <!-- start stats -->
      <div
        v-if="stats"
        class="grid grid-cols-1 mt-5 overflow-hidden bg-white rounded-lg shadow md:grid-cols-3"
      >
        <div>
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Total Alumnos
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.totalStudents }}
                  <!-- <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    from 70,946
                  </span> -->
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Increased by
                  </span>
                  12%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Total Instructores
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.totalInstructors }}
                  <!-- <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    from 56.14%
                  </span> -->
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Increased by
                  </span>
                  2.02%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Total Cursos
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.totalCourses }}
                  <!-- <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    from 28.62
                  </span> -->
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Decreased by
                  </span>
                  4.05%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Media edad alumnos
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.averageStudentYears }}
                  <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    años
                  </span>
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Decreased by
                  </span>
                  4.05%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Total hombres
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.totalMale }}
                  <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    alumnos
                  </span>
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Decreased by
                  </span>
                  4.05%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Total mujeres
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.totalFemale }}
                  <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    alumnas
                  </span>
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Decreased by
                  </span>
                  4.05%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Media edad hombres
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.averageStudentMaleYears }}
                  <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    años
                  </span>
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Decreased by
                  </span>
                  4.05%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Media edad mujeres
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.averageStudentFemaleYears }}
                  <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    años
                  </span>
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Decreased by
                  </span>
                  4.05%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Alumno de menor edad
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.studentLessYears }}
                  <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    años
                  </span>
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Decreased by
                  </span>
                  4.05%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Alumno de mayor edad
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.studentMoreYears }}
                  <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    años
                  </span>
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Decreased by
                  </span>
                  4.05%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base font-normal leading-6 text-gray-900">
                Total bruto
              </dt>
              <dd
                class="flex items-baseline justify-between mt-1 md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold leading-8 text-primary-100"
                >
                  {{ stats.totalWon.toLocaleString() }}
                  <span
                    class="ml-2 text-sm font-medium leading-5 text-gray-500"
                  >
                    euros
                  </span>
                </div>
                <!-- <div
                  class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                >
                  <svg
                    class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">
                    Decreased by
                  </span>
                  4.05%
                </div> -->
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StudentIndex from "../components/student/StudentIndex.vue";
import AdminIndex from "../components/admin/AdminIndex.vue";
import { AUTH_LOGOUT } from "../store/actions/auth";
import { API } from "../classes/api";

export default {
  data() {
    return {
      api: new API(),
      years: [
        "Todos",
        new Date().getFullYear(),
        new Date().getFullYear() - 1,
        new Date().getFullYear() - 2,
        new Date().getFullYear() - 3,
        new Date().getFullYear() - 4,
      ],
      months: [
        "Todos",
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      monthSelected: "Todos",
      hoverMonth: null,
      isOpenMonth: false,
      yearSelected: "Todos",
      hoverYear: null,
      isOpenYear: false,
      stats: null,
    };
  },
  components: {},
  created() {
    this.getStats();
  },
  methods: {
    async getStats() {
      let res = await this.api.get(
        `stats/${this.monthSelected}/${this.yearSelected}`
      );
      this.stats = res.data.data;
    },
    openMonth() {
      this.isOpenMonth = !this.isOpenMonth;
    },
    selectMonth(month) {
      this.isOpenMonth = false;
      this.monthSelected = month;
    },
    openYear() {
      this.isOpenYear = !this.isOpenYear;
    },
    selectYear(year) {
      this.isOpenYear = false;
      this.yearSelected = year;
    },
  },
};
</script>
