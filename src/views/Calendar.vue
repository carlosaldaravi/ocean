<template>
  <div class="p-4 demo-app">
    <div v-if="this.$store.getters.getRole === 'ADMIN'">
      <Modal id="modal_add_course">
        <div v-if="newCourseParamsNeeded">
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-lg font-medium leading-6 text-gray-900"
              id="modal-headline"
            >
              Añadir curso
            </h3>
          </div>
          <div>
            <oc-input
              label="newCourseTimeStart"
              title="Hora Inicio"
              type="time"
              v-model="newCourseTimeStart"
            ></oc-input>
            <oc-input
              label="newCourseTimeEnd"
              title="Hora fin"
              type="time"
              v-model="newCourseTimeEnd"
            ></oc-input>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="gender"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Deporte</label
              >
              <select
                id="gender"
                @change="changeSportSelected($event)"
                class="block w-full px-3 py-0 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                required
              >
                <option value="0">Selecciona deporte</option>
                <option
                  v-for="sport of newCourseParamsNeeded.sports"
                  :key="sport.id"
                  >{{ sport.name }}</option
                >
              </select>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="gender"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Tipo de curso</label
              >
              <select
                id="courseType"
                @change="changeTypeSelected($event)"
                class="block w-full px-3 py-0 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                required
              >
                <option value="0">Selecciona tipo de curso</option>
                <option
                  v-for="type of newCourseParamsNeeded.courseTypes"
                  :key="type.id"
                  >{{ type.name }}</option
                >
              </select>
            </div>
            <div v-if="newCourseSportSelected" class="col-span-6 sm:col-span-3">
              <label
                for="gender"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Nivel</label
              >
              <select
                id="levelCourse"
                @change="changeLevelSelected($event)"
                class="block w-full px-3 py-0 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                required
              >
                <option value="0">Selecciona nivel</option>
                <option
                  v-for="level of newCourseSportSelected.sportLevel"
                  :key="level.levelId"
                  >{{ level.level.name }}</option
                >
              </select>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                @click="
                  closeModal('modal_add_course');
                  addCourse();
                "
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-primary-200 hover:bg-primary-300 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
              >
                Confirmar
              </button>
            </span>
            <span
              class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                @click="closeModal('modal_add_course')"
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
              >
                Cancelar
              </button>
            </span>
          </div>
        </div>
      </Modal>
    </div>
    <div v-if="this.$store.getters.getRole === 'STUDENT'">
      <p>
        Selecciona en el calendario las fechas en las que estás disponible para
        nuestras clases.
      </p>
      <div class="flex items-center pt-1">
        <img class="w-4 h-4" src="../assets/icons/computer-desktop.svg" />
        <div class="pl-2">Click y arrastra</div>
      </div>
      <div class="flex items-center">
        <img class="w-4 h-4" src="../assets/icons/mobile-devices.svg" />
        <div class="pl-2">Pulsa, mantén y luego arrastra</div>
      </div>
    </div>

    <FullCalendar
      locale="es"
      class="bg-white demo-app-calendar"
      defaultView="dayGridMonth"
      minTime="09:00:00"
      maxTime="20:00:00"
      :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      }"
      :plugins="calendarPlugins"
      :weekends="true"
      :editable="true"
      :events="EVENTS"
      :selectable="true"
      :firstDay="1"
      :eventRender="renderEvent"
      @select="handleSelect"
      @eventClick="handleClick"
      @eventResize="updateEvent"
      @eventDrop="updateEvent"
    />
    <!-- <Modal>
      <Course-form>      
    </Modal>-->
    <modals-container />
  </div>
</template>

<script>
require("@fullcalendar/core/main.min.css");
require("@fullcalendar/daygrid/main.min.css");
require("@fullcalendar/timegrid/main.min.css");
import FullCalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import { mapGetters } from "vuex";
import EventModal from "../components/EventModal.vue";
import { UserCalendar } from "../classes/calendar";
import { API } from "../classes/api";
import moment from "moment";
import Modal from "../components/modals/Modal.vue";
import { UI } from "../mixins/UI";
import oc_input from "../components/forms/Input.vue";
import { Course } from "../classes/course";
import {
  formatDate,
  formatTime,
  getTimeFromDataFormat,
} from "../helpers/functions";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    Modal,
    "oc-input": oc_input,
  },
  mixins: [UI],
  computed: {
    ...mapGetters(["EVENTS"]),
  },
  data: function() {
    return {
      api: new API(),
      title: "",
      newCourseTimeStart: "00:00",
      newCourseTimeEnd: "00:00",
      newCourseDate: "",
      newCourseParamsNeeded: null,
      newCourseSportSelected: null,
      newCourseTypeSelected: null,
      newCourseLevelSelected: null,
      newCourse: new Course(),
      calendarPlugins: [
        // plugins must be defined in the JS
        DayGridPlugin,
        TimeGridPlugin,
        InteractionPlugin, // needed for dateClick
      ],
    };
  },
  created() {
    if (this.$store.getters.getRole === "ADMIN") {
      this.title = "Curso";
      this.getCalendar("admins");
    }
    if (this.$store.getters.getRole === "STUDENT") {
      this.title = "Disponible";
      this.getCalendar("students");
    }
    if (this.$store.getters.getRole === "INSTRUCTOR") {
      this.title = "Vacaciones";
      this.getCalendar("instructors");
    }
  },
  methods: {
    formatDate,
    formatTime,
    getTimeFromDataFormat,
    // Full Calendar methods
    handleSelect(arg) {
      // students and instructor have the same iteration with calendar
      // admin has different iteration with courses calendar
      switch (this.$store.getters.getRole) {
        case "ADMIN":
          this.addCourseEvent(arg);
          break;
        default:
          this.addStudentOrInstructorEvent(arg);
          break;
      }
    },
    handleClick(arg) {
      // if (arg.event.title === "Curso") {
      this.$modal.show(EventModal, {
        text: "This is from the component",
        event: arg.event,
      });
      // }
    },
    updateEvent(arg) {
      const userCalendar = new UserCalendar(arg.event);
      this.$store.dispatch("UPDATE_EVENT", userCalendar);
    },
    renderEvent(arg, element) {
      console.log("element: ", element);

      let closeButton = document.createElement("button");
      let closeSpan = document.createElement("span");
      closeButton.setAttribute(
        "class",
        " p-2 mr-4 rounded text-white bg-red-700 order-1"
      );
      closeButton.innerHTML = "&#88";
      arg.el.appendChild(closeButton);

      closeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        this.$store.dispatch("DELETE_EVENT", arg.event);
      });
    },

    // own methods
    async getCalendar(role) {
      let res;
      // first of all, synchronize db with store
      this.$store.dispatch("RESET_EVENTS");
      switch (role) {
        case "STUDENT":
        case "INSTRUCTOR":
          res = await this.api.get(`${role}/calendar`);
          break;
        default:
          res = await this.api.get(`calendar/courses`);
          break;
      }
      if (res.data.data) {
        res.data.data.forEach((calendar) => {
          let userCalendar = new UserCalendar(calendar);

          this.$store.dispatch("ADD_EVENT", userCalendar);
        });
      } else {
        if (res.data.response.status === 401) {
          this.$store.dispatch(AUTH_LOGOUT);
        }
      }
    },
    addStudentOrInstructorEvent(arg) {
      const dateStart = moment(arg.start);
      const dateEnd = moment(arg.end);
      const userCalendar = new UserCalendar(arg);
      userCalendar.title = this.title;
      userCalendar.start = dateStart;

      // check if new data overwrite existing data
      let eventFound = this.$store.getters.EVENTS.find((_event) => {
        let dbDateStart = moment(_event.start);
        let dbDateEnd = moment(_event.end);

        return (
          (dateStart.isBefore(dbDateEnd) && dateStart.isAfter(dbDateStart)) ||
          (dateEnd.isBefore(dbDateEnd) && dateEnd.isAfter(dbDateStart)) ||
          (dateStart.isBefore(dbDateStart) && dateEnd.isAfter(dbDateEnd)) ||
          dateStart.isSame(dbDateStart) ||
          dateEnd.isSame(dbDateEnd)
        );
      });

      if (!eventFound) {
        return new Promise((resolve, reject) => {
          this.api
            .post("students/calendar", userCalendar)
            .then((resp) => {
              let newCalendar = new UserCalendar(resp.data.data);
              this.$store.dispatch("ADD_EVENT", newCalendar);
              resolve(resp);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }
    },
    async addCourseEvent(arg) {
      const dateStart = moment(arg.start);
      const dateEnd = moment(arg.end);
      this.newCourseTimeStart = dateStart.format("HH:mm");
      this.newCourseTimeEnd = dateEnd.format("HH:mm");
      this.newCourseDate =
        dateStart.format("YYYY") +
        "-" +
        dateStart.format("M") +
        "-" +
        dateStart.format("D");

      let res = await this.api.get(`courses/new`);

      this.newCourseParamsNeeded = res.data.data;

      // Show modal to create course event
      UI.methods.openModal("modal_add_course");
    },
    changeSportSelected(event) {
      this.newCourseSportSelected = this.newCourseParamsNeeded.sports.find(
        (sport) => sport.name == event.target.value
      );
      this.newCourse.sport = this.newCourseSportSelected;
    },
    changeTypeSelected(event) {
      this.newCourseTypeSelected = this.newCourseParamsNeeded.courseTypes.find(
        (type) => type.name == event.target.value
      );
      this.newCourse.type = this.newCourseTypeSelected;
    },
    changeLevelSelected(event) {
      this.newCourseLevelSelected = this.newCourseSportSelected.sportLevel.find(
        (sportLevel) => sportLevel.level.name == event.target.value
      );
      this.newCourse.level = this.newCourseLevelSelected.level;
    },
    async addCourse() {
      let newCourse = new Course();
      newCourse.sport = this.newCourseSportSelected;
      newCourse.type = this.newCourseTypeSelected;
      newCourse.level = this.newCourseLevelSelected.level;
      newCourse.calendar = {
        start: this.newCourseDate + " " + this.newCourseTimeStart,
        end: this.newCourseDate + " " + this.newCourseTimeEnd,
      };
      let res = await this.api.post("courses", newCourse);
    },
  },
};
</script>
