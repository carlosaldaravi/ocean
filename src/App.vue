<template>
  <div id="app">
    <div v-if="isLogged">
      <shell>
        <section slot="content">
          <router-view />
        </section>
      </shell>
    </div>
    <div v-else>
      <login></login>
    </div>
  </div>
</template>

<script>
import Shell from "./components/layout/Shell";
import Login from "./components/Login";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Login,
    Shell
  },
  computed: {
    isLogged: function() {
      return localStorage.getItem("user_token") !== undefined;
    }
  }
};
</script>
