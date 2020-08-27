<template>
  <div>
    <div v-if="!instructor">No hay instructor</div>
    <div
      v-else
      @click="moreCard = !moreCard"
      class="relative flex flex-col h-auto mt-3 bg-opacity-75 rounded shadow sm:flex-row"
    >
      <div class="w-full h-full p-4">
        <!-- target  -->
        <div class="flex justify-between">
          <div class="flex">
            <img
              v-if="instructor.details.photo"
              class="object-cover object-top rounded-full w-9 h-9"
              :src="
                'https://api-ocean.herokuapp.com/api/file/avatar/' +
                  instructor.details.photo
              "
              alt
            />
            <img
              v-else
              class="object-cover object-top rounded-full w-9 h-9"
              src="../../assets/images/avatar/user_default.png"
              alt
            />
            <div class="flex items-center ml-4">
              <div class="text-xl">
                {{ instructor.details.firstname }}
                {{ instructor.details.lastname }}
              </div>
            </div>
          </div>
          <span
            v-if="instructor.status == 'ACTIVE'"
            class="inline-block w-4 h-4 overflow-hidden text-green-600"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          </span>
          <span
            v-if="instructor.status == 'INACTIVE'"
            class="inline-block w-4 h-4 overflow-hidden text-red-600"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm16-5L5 16A8 8 0 0016 5zm-1-1A8 8 0 004 15L15 4z"
              />
            </svg>
          </span>
        </div>

        <div v-if="moreCard" class="mt-4">
          <div class="flex justify-between">
            <!-- instructor -->
            <div class="flex justify-between mt-2 align-baseline">
              <div class="flex items-center">
                <span class="inline-block w-4 h-4 overflow-hidden">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 18v1a1 1 0 01-1 1h-2A17 17 0 010 3V1a1 1 0 011-1h4a1 1 0 011 1v4L5 7 3 9l8 8 2-2 2-1h4a1 1 0 011 1v3z"
                    />
                  </svg>
                </span>
                <div>Teléfono:</div>
                <div class="ml-3">{{ instructor.details.phone }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="instructor" class="flex justify-center -mb-3">
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
  </div>
</template>

<script>
import { API } from "../../classes/api";
export default {
  props: {
    instructor: { type: Object, required: true },
  },
  data() {
    return {
      api: new API(),
      moreCard: false,
    };
  },
  computed: {},
  methods: {
    getInstructorGender(instructor) {
      return instructor.details.gender;
    },
  },
};
</script>
