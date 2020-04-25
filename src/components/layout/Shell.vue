<template>
  <div>
    <ocean-menu></ocean-menu>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-4 sm:px-0">
          <slot name="content"></slot>
        </div>
        <!-- /End replace -->
      </div>
    </main>
    <ocean-footer></ocean-footer>
  </div>
</template>

<script>
import Menu from "./Menu";
import Footer from "./Footer";
export default {
  components: {
    'ocean-menu':Menu,
    'ocean-footer':Footer
  }
};
</script>