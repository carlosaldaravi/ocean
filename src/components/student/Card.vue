<template>
  <div>
    <div v-if="!student">No hay student</div>
    <div
      v-else
      @click="moreCard = !moreCard"
      class="relative flex flex-col h-auto mt-3 bg-opacity-75 rounded shadow sm:flex-row"
    >
      <div class="w-full h-full p-4">
        <!-- target  -->
        <div class="flex">
          <div class="flex">
            <img
              v-if="student.details.photo"
              class="object-cover object-top rounded-full w-9 h-9"
              :src="
                'https://api-ocean.herokuapp.com/api/file/avatar/' +
                  student.details.photo
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
                {{ student.details.firstname }}
                {{ student.details.lastname }}
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex m-1">
            <div class="mr-2 text-xs">
              {{ getStudentLevel() }}
            </div>
            <span
              v-if="student.status == 'ACTIVE'"
              class="inline-block w-4 h-4 overflow-hidden text-green-600"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </span>
            <span
              v-if="student.status == 'INACTIVE'"
              class="inline-block w-4 h-4 overflow-hidden text-red-600"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm16-5L5 16A8 8 0 0016 5zm-1-1A8 8 0 004 15L15 4z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div v-if="moreCard" class="mt-4">
          <div class="flex justify-between">
            <!-- student -->
            <div class="flex justify-between mt-2 align-baseline">
              <div class="items-center">
                <div class="flex mt-1">
                  <div>DNI:</div>
                  <div class="ml-3">{{ student.details.dni }}</div>
                </div>
                <div class="flex mt-1">
                  <div>Teléfono:</div>
                  <div class="ml-3">{{ student.details.phone }}</div>
                </div>
                <div class="flex mt-1">
                  <div>Edad:</div>
                  <div class="ml-3">{{ getYearsOld(student) }} años</div>
                </div>
                <div class="flex mt-1">
                  <div>Talla:</div>
                  <div class="ml-3">{{ student.details.size }}</div>
                </div>
                <div class="flex mt-1">
                  <div>Peso:</div>
                  <div class="ml-3">{{ student.details.weight }}</div>
                </div>
                <div class="flex mt-1">
                  <div>Talla de pie:</div>
                  <div class="ml-3">{{ student.details.footprint }}</div>
                </div>
                <div class="flex mt-1">
                  <div>Ciudad:</div>
                  <div class="ml-3">{{ student.details.city }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="student" class="flex justify-center -mb-3">
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
import moment from "moment";
export default {
  props: {
    student: { type: Object, required: true },
    sportSelected: { type: Object, required: true },
  },
  data() {
    return {
      api: new API(),
      moreCard: false,
    };
  },
  computed: {},
  methods: {
    getStudentGender(student) {
      return student.details.gender;
    },
    getYearsOld(student) {
      return moment().diff(student.details.dateBorn, "years");
    },
    getStudentLevel() {
      let userSport = this.student.userSports.find(
        (us) => us.sportId == this.sportSelected.id
      );
      return userSport.level.name;
    },
  },
};
</script>
