<template>
  <section>
    <div v-if="!instructor">No hay instructor</div>
    <div v-else class="w-full max-w-sm lg:max-w-full lg:flex">
      <div
        class="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
        :style="style"
        title="Woman holding a mug"
      ></div>
      <div
        class="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r"
      >
        <div class="mb-8">
          <div class="mb-2 text-xl font-bold text-gray-900">{{instructor.email}}</div>
          <p
            class="text-base text-gray-700"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    instructor: { type: Object, required: true }
  },
  computed: {}
};
</script>

<style>
</style>