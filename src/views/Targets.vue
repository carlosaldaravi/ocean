<template>
  <section class>
    <section class="container p-4 mx-auto md:p-8">
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
                v-for="sportLevel of sportSelected.sportLevel"
                :key="sportLevel.level.id"
                >{{ sportLevel.level.name }}</option
              >
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="mb-1 border-b border-primary-400">
              <nav class="flex justify-between -mb-px">
                <a
                  v-for="sportLevel of sportSelected.sportLevel"
                  :key="sportLevel.level.id"
                  @click="levelSelected = sportLevel.level.name"
                  :class="[
                    levelSelected == sportLevel.level.name
                      ? 'text-primary-100 border-primary-100'
                      : 'text-secondary-200 border-transparent text-secondary-200 hover:border-primary-200 hover:text-primary-200',
                  ]"
                  class="px-1 py-4 font-medium leading-5 text-center border-b-2 cursor-pointer text-m hover:outline-none"
                  aria-current="page"
                  >{{ sportLevel.level.name }}</a
                >
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
      targets: [], // targets
      studentTargets: [], // studentTargets
      sports: [], // sports
      sportSelected: new Sport(),
      levelSelected: "",
    };
  },
  components: {
    TargetList,
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
          target.level.name === this.levelSelected
      );
    },
  },
  methods: {
    async getSports() {
      let res = await this.api.get("users/sports");
      if (res.data.data) {
        res.data.data.forEach((sport) => {
          this.sports.push(new Sport(sport));
        });
        if (this.sports.length == 1) {
          this.sportSelected = res.data.data[0];
        }
      }
    },
    async getTargets() {
      let res = await this.api.get("students/targets");
      if (res.data.data) {
        res.data.data.forEach((target) => {
          this.targets.push(new Target(target));
        });
      }
    },
  },
};
</script>

<style></style>
