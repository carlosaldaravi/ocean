<template>
  <div
    class="fixed inset-x-0 bottom-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
  >
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <div
      class="px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div>
        <div class="mt-3 text-center sm:mt-5">
          <h3
            class="text-lg font-medium leading-6 text-gray-900"
            id="modal-headline"
          >Selecciona deporte</h3>
          <div v-for="sport of sports" :key="sport.id" class="mt-2">
            <p class="text-sm leading-5 text-gray-500">{{sport.name}}</p>
          </div>
        </div>
      </div>

      <div>
        <div class="mt-3 text-center sm:mt-5">
          <h3
            class="text-lg font-medium leading-6 text-gray-900"
            id="modal-headline"
          >Selecciona nivel</h3>
          <div v-for="level of sporlevels" :key="sport.id" class="mt-2">
            <p class="text-sm leading-5 text-gray-500">{{sport.name}}</p>
          </div>
        </div>
      </div>

      <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <span class="flex w-full rounded-md shadow-sm sm:col-start-2">
          <button
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
          >Confirmar</button>
        </span>
        <span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:col-start-1">
          <button
            @click="$emit('closeModal')"
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
          >Cancelar</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sportSelected: new Sport()
    };
  },
  props: {
    sports: { type: Array, required: true }
  }
};
</script>

<style>
</style>