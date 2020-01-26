<template>
    <div id="nav" v-if="this.$route.name != 'login'">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>