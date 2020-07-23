<template>
  <div class="flex flex-col" style="min-height: 100vh;">
    <ocean-menu></ocean-menu>
    <!-- <header class="bg-white shadow">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
      </div>
    </header>-->
    <!-- <main class="flex-1 bg-secondary-100">
      <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8"> -->
    <!-- Replace with your content -->
    <!-- <div class="px-4 py-4 sm:px-0">
          <slot name="content"></slot>
        </div> -->
    <!-- /End replace -->
    <!-- </div>
    </main> -->
    <ocean-footer></ocean-footer>
  </div>
</template>

<script>
import Menu from "./Menu";
import Footer from "./Footer";
export default {
  components: {
    "ocean-menu": Menu,
    "ocean-footer": Footer,
  },
};
</script>
