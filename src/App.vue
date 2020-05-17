<template>
  <div id="app" class="bg-auto sm:bg-cover md:bg-contain lg:bg-auto xl:bg-cover">
    <!-- <div v-if="isLogged">
      <shell>
        <section slot="content">
          <router-view />
        </section>
      </shell>
    </div>
    <div v-else>
      <login></login>
    </div>-->
    <router-view />
  </div>
</template>

<script>
import Shell from "./components/layout/Shell";
import { Localit } from "localit";
import { mapActions } from "vuex";
import { AUTH_CHECK } from "./store/actions/auth";

export default {
  name: "app",
  data() {
    return {
      lstore: new Localit()
    };
  },
  components: {
    Shell
  },
  computed: {
    isLogged: function() {
      return this.lstore.get("user-token") !== undefined;
    }
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
  }
};
</script>
