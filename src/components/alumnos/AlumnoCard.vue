<template>
  <section>
      <div v-if="!alumno">No hay alumno</div>
    <div v-else class="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
       :style='style'
        title="Woman holding a mug"
      ></div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">{{alumno.email}}</div>
          <p
            class="text-gray-700 text-base"
          >{{alumno.imagen}}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    alumno: { type: Object, required: true }
  },
  computed: {
      style: function () {
          return `background-image: url(${this.alumno.imagen})`
      }
  },
};
</script>

<style>
</style>