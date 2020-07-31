<template>
  <div id="app">
    <Loading
      v-if="this.$store.getters.isLoading"
      class="absolute z-50 w-full h-full bg-gray-400 opacity-50"
    />
    <div v-if="isAuthenticated">
      <shell>
        <section slot="content">
          <router-view />
          <notification-list />
        </section>
      </shell>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import Shell from "./components/layout/Shell";
import { Localit } from "localit";
import { mapActions, mapGetters } from "vuex";
import { AUTH_CHECK } from "./store/actions/auth";
import NotificationList from "./components/notifications/NotificationsList.vue";
import Loading from "./components/modals/Loading.vue";

export default {
  name: "app",
  data() {
    return {
      lstore: new Localit(),
    };
  },
  components: {
    Shell,
    NotificationList,
    Loading,
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  created() {
    // this.AUTH_CHECK();
    this.$store.dispatch(AUTH_CHECK);
  },
  mounted() {
    // console.log("isLogged");
    // console.log(this.lstore);
  },
  methods: {
    // ...mapActions([AUTH_CHECK]),
  },
};
</script>
