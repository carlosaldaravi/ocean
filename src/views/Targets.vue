<template>
  <div>
    <section v-if="!editing" class="container p-4 mx-auto md:p-8">
      <div class="mt-3">
        <div>
          <nav class="flex justify-center">
            <a
              v-for="sport of sports"
              :key="sport.id"
              :class="{
                'bg-primary-200 text-secondary-100 hover:text-secondary-100':
                  sport.name == sportSelected.name,
              }"
              @click="sportSelected = sport"
              class="px-3 py-2 text-xl font-bold leading-5 rounded-lg rounded-b-none cursor-pointer hover:text-primary-300"
              >{{ sport.name }}</a
            >
          </nav>
        </div>
        <div v-if="Object.keys(sportSelected).length !== 0">
          <div class="mb-2 sm:hidden">
            <select
              v-model="levelSelected"
              aria-label="Selected level"
              :value="levelSelected"
              class="block w-full bg-primary-400 form-select"
            >
              <option
                v-for="sportLevel of sportSelected.sportLevels"
                :key="sportLevel.sportLevel.levelId"
                >{{ sportLevel.sportLevel.level.name }}</option
              >
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="mb-1 border-b border-primary-400">
              <nav class="flex justify-between -mb-px">
                <a
                  v-for="sportLevel of sportSelected.sportLevels"
                  :key="sportLevel.sportLevel.levelId"
                  @click="levelSelected = sportLevel.sportLevel.level"
                  :class="[
                    levelSelected == sportLevel.sportLevel.level
                      ? 'text-primary-100 border-primary-100'
                      : 'text-secondary-200 border-transparent text-secondary-200 hover:border-primary-200 hover:text-primary-200',
                  ]"
                  class="px-1 py-4 font-medium leading-5 text-center border-b-2 cursor-pointer text-m hover:outline-none"
                  aria-current="page"
                  >{{ sportLevel.sportLevel.level.name }}</a
                >
              </nav>
            </div>
          </div>
        </div>
        <TargetList :targets="targetsList"></TargetList>
      </div>
    </section>
    <section v-if="editing">
      <form action="#" method="POST">
        <div class="container mx-auto">
          <div>
            <div class="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Objetivo nuevo
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-500">
                    Este objetivo se creará en el deporte
                    <span class="italic font-bold">{{
                      sportSelected.name
                    }}</span>
                    y en el nivel
                    <span class="italic font-bold">{{
                      levelSelected.name
                    }}</span>
                  </p>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <oc-input
                          label="name"
                          title="Nombre"
                          v-model="newTarget.name"
                        ></oc-input>
                      </div>
                    </div>
                    <div class="col-span-6 mt-4 sm:col-span-3">
                      <label
                        for="how_did_you_hear_about_us"
                        class="block text-sm font-medium leading-5 text-gray-700"
                        >Descripción</label
                      >
                      <div class="relative mt-1 rounded-md shadow-sm">
                        <textarea
                          id="description"
                          rows="4"
                          v-model="newTarget.description"
                          class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                          placeholder="Descripción del objetivo que podrán ver los alumnos que estén apuntados al nivel de este objetivo"
                        ></textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
    <div v-if="this.$store.getters.getRole === 'ADMIN'">
      <span
        v-if="sportSelected && levelSelected"
        class="flex justify-center mt-4 xl:mt-8"
      >
        <button
          @click="editing = true"
          v-if="!editing"
          type="button"
          class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
        >
          Nuevo
        </button>
        <button
          @click="cancelNewTarget()"
          v-if="editing"
          type="button"
          class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
        >
          Cancelar
        </button>
        <button
          @click="createNewTarget()"
          v-if="editing"
          type="button"
          class="inline-flex items-center px-3 py-2 ml-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-primary-200 md:px-6 md:py-3 md:text-lg hover:bg-primary-300 focus:outline-none focus:border-primary-100 focus:shadow-outline-indigo active:bg-primary-200"
        >
          Guardar
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import TargetList from "../components/target/TargetList.vue";
import oc_input from "../components/forms/Input.vue";
import { StudentTarget } from "../classes/student-target";
import { Target } from "../classes/target";
import { Sport } from "../classes/sport";
import { Level } from "../classes/level";
import { API } from "../classes/api";
import { AUTH_LOGOUT } from "../store/actions/auth";

export default {
  data() {
    return {
      api: new API(),
      targets: [], // targets
      studentTargets: [], // studentTargets
      sports: [], // sports
      sportSelected: new Sport(),
      levelSelected: "",
      editing: false,
      newTarget: new Target(),
    };
  },
  components: {
    TargetList,
    "oc-input": oc_input,
  },
  created() {
    this.getSports();
    this.getTargets();
  },
  computed: {
    targetsList: function() {
      return this.targets.filter(
        (target) =>
          target.sport.id === this.sportSelected.id &&
          target.level.name === this.levelSelected.name
      );
    },
  },
  methods: {
    async getSports() {
      this.$store.dispatch("SET_LOADING", true);
      if (this.$store.getters.getRole === "ADMIN") {
        var res = await this.api.get("sports");
      } else {
        var res = await this.api.get("users/sports");
      }
      if (res.data.data) {
        res.data.data.forEach((sport) => {
          this.sports.push(new Sport(sport));
        });
        if (this.sports.length == 1) {
          this.sportSelected = res.data.data[0];
        }
        this.$store.dispatch("SET_LOADING", false);
      }
    },
    async getTargets() {
      this.$store.dispatch("SET_LOADING", true);
      if (this.$store.getters.getRole === "ADMIN") {
        var res = await this.api.get("targets");
      } else {
        var res = await this.api.get("students/targets");
      }
      if (res.data.data) {
        res.data.data.forEach((target) => {
          this.targets.push(new Target(target));
        });
        this.$store.dispatch("SET_LOADING", false);
      }
    },
    cancelNewTarget() {
      this.editing = false;
      this.newTarget = new Target();
    },
    async createNewTarget() {
      //notificación de exito o fracaso
      this.$store.dispatch("SET_LOADING", true);
      this.editing = false;
      if (this.$store.getters.getRole === "ADMIN") {
        var res = await this.api.post("targets", {
          name: this.newTarget.name,
          levelId: this.levelSelected.id,
          sportId: this.sportSelected.id,
          description: this.newTarget.description,
        });
      }
      this.newTarget = new Target();
      if (res.data.data) {
        this.targets.push(res.data.data);
        this.$store.dispatch("SET_LOADING", false);
      }
    },
  },
};
</script>

<style></style>
