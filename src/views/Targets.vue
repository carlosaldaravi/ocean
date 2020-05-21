<template>
  <section class>
    <section class="container p-4 mx-auto md:p-8">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-10"
      >Objetivos</h1>
      <div>
        <div class="mb-4">
          <nav v-for="sport of sports" :key="sport.id" class="flex justify-center">
            <a
              :class="{ 'bg-green-400 text-white': tab == 'done' }"
              @click="tab = 'done'"
              class="px-3 py-2 text-sm font-medium font-bold leading-5 text-gray-900 rounded-lg rounded-b-none cursor-pointer hover:text-gray-800"
            >{{sport.name}}</a>
          </nav>
        </div>
        <div>
          <div v-if="levels.length > 3" class="sm:hidden">
            <select
              v-model="levelSelected"
              aria-label="Selected level"
              :value="levelSelected"
              class="block w-full form-select"
            >
              <option v-for="level of levels" :key="level.id">{{level.name}}</option>
            </select>
          </div>
          <div :class="{ 'hidden sm:block': levels.length > 3 }">
            <div class="border-b border-gray-900">
              <nav class="flex -mb-px">
                <a
                  v-for="level of levels"
                  :key="level.id"
                  @click="levelSelected=level.name"
                  :class="[ levelSelected == level.name ? 'text-gray-100 hover:text-gray-100 focus:text-gray-700 focus:border-gray-300' : 'text-gray-900 border-transparent' ]"
                  class="w-1/4 px-1 py-4 text-sm font-medium leading-5 text-center border-b-2 border-indigo-500 cursor-pointer focus:outline-none"
                  aria-current="page"
                >{{level.name}}</a>
              </nav>
            </div>
          </div>
        </div>
        <TargetList :targets="targetsList"></TargetList>
      </div>
    </section>
  </section>
</template>

<script>
import TargetList from "../components/target/TargetList.vue";
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
      studentTargets: [], // studentTargets
      allTargets: [], // allTargets
      targets: [], // targets to list
      sports: [], // sports
      levels: [], // levels
      // values: 'notDone', 'done'
      tab: "notDone",
      levelSelected: "",
      sportSelected: ""
    };
  },
  components: {
    TargetList
  },
  created() {
    this.getTargets();
    this.getStudentTargets();
    this.getSports();
    this.getLevels();
  },
  computed: {
    targetsList: function() {
      return this.allTargets.filter(
        target => target.level.name == this.levelSelected
      );
    }
  },
  methods: {
    async getStudentTargets() {
      let res = await this.api.get("students/targets");
      if (res.data.data) {
        res.data.data.forEach(target => {
          this.studentTargets.push(new StudentTarget(target));
        });
      }
    },

    async getSports() {
      let res = await this.api.get("users/sports");
      if (res.data.data) {
        this.sportSelected = res.data.data[0].name;
        res.data.data.forEach(sport => {
          this.sports.push(new Sport(sport));
        });
      }
    },

    async getLevels() {
      let res = await this.api.get("levels");
      if (res.data.data) {
        this.levelSelected = res.data.data[0].name;
        res.data.data.forEach(level => {
          this.levels.push(new Level(level));
        });
      }
    },

    async getTargets() {
      let res = await this.api.get("targets");
      if (res.data.data) {
        res.data.data.forEach(target => {
          this.allTargets.push(new Target(target));
        });
      }
    }
  }
};
</script>

<style></style>
