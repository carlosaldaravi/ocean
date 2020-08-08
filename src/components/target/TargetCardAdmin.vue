<template>
  <div
    @click="moreCard = !moreCard"
    class="relative flex flex-col h-auto mt-3 bg-opacity-75 rounded shadow bg-primary-400 xl:flex-row"
  >
    <div class="w-full h-full p-4 xl:min-h-100">
      <!-- target  -->
      <div class="flex justify-between" v-if="editing">
        <div>Nombre</div>
        <div>
          <button @click="saveTarget()">
            <span>
              <svg
                class="inline-block w-8 h-8 p-1"
                viewBox="0 0 20 20"
                fill="green"
              >
                <path
                  d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"
                ></path>
              </svg>
            </span>
          </button>
          <button
            @click="
              moreCard = false;
              editing = false;
            "
          >
            <span>
              <svg
                class="inline-block w-8 h-8 p-1"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm1.41-1.41A8 8 0 1015.66 4.34 8 8 0 004.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="flex justify-between">
        <div v-if="!editing" class="text-xl">{{ target.name }}</div>
        <input
          v-else
          v-on:click.stop.prevent
          v-model="target.name"
          id="targetName"
          type="text"
          class="block w-full px-3 py-2 text-sm placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 lg:text-lg sm:leading-5"
        />
        <button
          v-if="!editing"
          @click="
            moreCard = false;
            editing = true;
          "
        >
          <span>
            <svg
              class="inline-block w-8 h-8 p-1"
              viewBox="0 0 24 24"
              fill="primary"
            >
              <path d="M12 4l4 4L4 20H0v-4L12 4zm2-2l2-2 4 4-2 2-4-4z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div v-if="moreCard" class="mt-4">
        <div class="mt-2 italic">
          Descripción
        </div>
        <div v-if="!editing" class="text-sm">
          {{ target.description }}
        </div>
        <textarea
          v-else
          v-on:click.stop.prevent
          v-model="target.description"
          id="targetDescription"
          class="block w-full px-3 py-2 text-sm placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 lg:text-lg sm:leading-5"
        ></textarea>
        <div>
          <div class="mt-2 italic">Materiales</div>
          <div class="flex justify-between">
            <div class="text-xs italic">Estamos trabajando en ello</div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-1/2">
        <button>
          <img
            v-if="!moreCard"
            class="w-4 h-4 text-red-500"
            src="../../assets/icons/cheveron-down.svg"
            alt
          />
          <img
            v-else
            class="w-4 h-4 text-red-500"
            src="../../assets/icons/cheveron-up.svg"
            alt
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate, formatTime } from "../../helpers/functions";
import { API } from "../../classes/api";
export default {
  data() {
    return {
      api: new API(),
      moreCard: false,
      editing: false,
    };
  },
  props: {
    target: { type: Object, required: true },
  },
  methods: {
    formatDate,
    formatTime,
    async saveTarget() {
      this.$store.dispatch("SET_LOADING", true);
      this.moreCard = false;
      this.editing = false;
      let res = await this.api.patch(`targets/${this.target.id}`, this.target);
      this.$store.dispatch("SET_LOADING", false);
    },
  },
};
</script>
