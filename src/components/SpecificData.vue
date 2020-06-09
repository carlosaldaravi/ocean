<template>
  <div>
    <div v-if="editing" class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Información Específica</h3>
          <p
            class="mt-1 text-sm leading-5 text-gray-500"
          >Cuantos más datos tengamos, mejor serán nuestras clases.</p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <oc-input label="weight" title="Peso" type="number" v-model="user.details.weight"></oc-input>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <oc-input
                  label="footprint"
                  title="Número de pie"
                  type="number"
                  v-model="user.details.footprint"
                ></oc-input>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="size" class="block text-sm font-medium leading-5 text-gray-700">Talla</label>
                <input
                  id="size"
                  class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else class="p-6 mt-4 bg-white rounded-lg md:flex">
      <div class="w-full text-center md:text-left">
        <div class="md:grid md:grid-cols-5 md:gap-6">
          <div class="md:col-span-2">Datos específicos</div>
          <div class="mt-2 md:mt-0 md:col-span-3">
            <div v-if="user.details.weight">
              <span class="text-gray-900">Peso:</span>
              <span class="ml-2 text-gray-600">{{user.details.weight}}</span>
            </div>
            <div v-if="user.details.footprint">
              <span class="text-gray-900">Talla de pie:</span>
              <span class="ml-2 text-gray-600">{{user.details.footprint}}</span>
            </div>
            <div v-if="user.details.size">
              <span class="text-gray-900">Talla:</span>
              <span class="ml-2 text-gray-600">{{user.details.size}}</span>
            </div>
            <div v-if="user.details.comments">
              <span class="text-gray-900">Comentarios:</span>
              <span class="ml-2 text-gray-600">{{user.details.comments}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import oc_input from "./forms/Input.vue";
import oc_checkbox from "./forms/Checkbox.vue";
export default {
  components: {
    "oc-input": oc_input,
    "oc-checkbox": oc_checkbox
  },
  props: {
    user: { type: Object, required: true },
    editing: { type: Boolean, required: true }
  }
};
</script>

<style>
</style>