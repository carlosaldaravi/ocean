<template>
  <div class="p-4 demo-app">
    <div v-if="this.$store.getters.getRole === 'ADMIN'">
      <Modal id="modal_add_course">
        <div v-if="newCourseParamsNeeded">
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-headline">Añadir curso</h3>
          </div>
          <div>
            <oc-input
              :error="!isTimeStart"
              label="newCourseTimeStart"
              title="Hora Inicio"
              type="time"
              v-model="newCourseTimeStart"
            ></oc-input>
            <oc-input
              :error="!isTimeStart"
              label="newCourseTimeEnd"
              title="Hora fin"
              type="time"
              v-model="newCourseTimeEnd"
            ></oc-input>
            <div class="col-span-6 sm:col-span-3">
              <label
                :class="{ 'text-red-600 text-base': !isInstructorSelected }"
                for="instructorSelected"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Instructor</label>
              <select
                id="instructorSelected"
                @change="changeInstructorSelected($event)"
                :class="{ 'border-red-600': !isInstructorSelected }"
                class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                required
              >
                <option value="0">Selecciona instructor</option>
                <option
                  v-for="instructor of newCourseParamsNeeded.instructors"
                  :key="instructor.id"
                >{{ instructor.details.firstname }}</option>
              </select>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                :class="{ 'text-red-600 text-base': !isSportSelected }"
                for="sportSelected"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Deporte</label>
              <select
                id="sportSelected"
                @change="changeSportSelected($event)"
                :class="{ 'border-red-600': !isSportSelected }"
                class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                required
              >
                <option value="0">Selecciona deporte</option>
                <option
                  v-for="sport of newCourseParamsNeeded.sports"
                  :key="sport.id"
                >{{ sport.name }}</option>
              </select>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                :class="{ 'text-red-600 text-base': !isTypeSelected }"
                for="courseType"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Tipo de curso</label>
              <select
                id="courseType"
                @change="changeTypeSelected($event)"
                :class="{ 'border-red-600': !isTypeSelected }"
                class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                required
              >
                <option value="0">Selecciona tipo de curso</option>
                <option
                  v-for="type of newCourseParamsNeeded.courseTypes"
                  :key="type.id"
                >{{ type.name }}</option>
              </select>
            </div>
            <div v-if="newCourseSportSelected" class="col-span-6 sm:col-span-3">
              <label
                :class="{ 'text-red-600 text-base': !isLevelSelected }"
                for="levelCourse"
                class="block text-sm font-medium leading-5 text-gray-700"
              >Nivel</label>
              <select
                id="levelCourse"
                @change="changeLevelSelected($event)"
                :class="{ 'border-red-600': !isLevelSelected }"
                class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                required
              >
                <option value="0">Selecciona nivel</option>
                <option
                  v-for="level of newCourseSportSelected.sportLevels"
                  :key="level.levelId"
                >{{ level.level.name }}</option>
              </select>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                @click="addCourse()"
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-primary-200 hover:bg-primary-300 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
              >Confirmar</button>
            </span>
            <span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                @click="
                  closeModal('modal_add_course');
                  resetAll();
                "
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
              >Cancelar</button>
            </span>
          </div>
        </div>
      </Modal>
    </div>
    <Modal id="modal_show_course">
      <div class="mt-3 text-center sm:mt-5">
        <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-headline">RESERVA DE CURSO</h3>
      </div>
      <div>
        <div class="col-span-6 sm:col-span-3">
          <label for="gender" class="block text-sm font-medium leading-5 text-gray-700">Deporte</label>
          {{ newCourseSportSelected }}
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="gender"
            class="block text-sm font-medium leading-5 text-gray-700"
          >Tipo de curso</label>
          {{ newCourseTypeSelected }}
        </div>
        <div v-if="newCourseSportSelected" class="col-span-6 sm:col-span-3">
          <label for="gender" class="block text-sm font-medium leading-5 text-gray-700">Nivel</label>
          {{ newCourseLevelSelected }}
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="gender" class="block text-sm font-medium leading-5 text-gray-700">Instructor</label>
          {{ newCourseInstructorSelected }}
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="gender" class="block text-sm font-medium leading-5 text-gray-700">Día</label>
          {{ newCourseDate }}
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="gender" class="block text-sm font-medium leading-5 text-gray-700">Hora inicio</label>
          {{ newCourseTimeStart }}
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="gender" class="block text-sm font-medium leading-5 text-gray-700">Hora final</label>
          {{ newCourseTimeEnd }}
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="gender"
            class="block text-sm font-medium leading-5 text-gray-700"
          >Plazas disponibles/totales</label>
          <div
            v-if="newCourseMaxStudents - newCourseCurrentNumStudents == 0"
            class="text-red-600"
          >Curso completo</div>
          <div v-else>
            {{ newCourseMaxStudents - newCourseCurrentNumStudents }}/{{
            newCourseMaxStudents
            }}
          </div>
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="gender" class="block text-sm font-medium leading-5 text-gray-700">Precio</label>
          {{ newCoursePrice }}€
        </div>
        <div v-if="isDone" class="col-span-6 sm:col-span-3">
          <label
            for="gender"
            class="block text-lg font-medium leading-5 text-red-700"
          >Este curso ya se ha realizado</label>
        </div>
        <div v-if="isReserved && !isDone" class="col-span-6 sm:col-span-3">
          <label
            for="gender"
            class="block text-lg font-medium leading-5 text-green-700"
          >¡ Ya estás registrado en este curso !</label>
        </div>
        <div
          v-if="
            !isReserved &&
              newCourseMaxStudents - newCourseCurrentNumStudents == 0
          "
          class="col-span-6 sm:col-span-3"
        >
          <label
            for="gender"
            class="block text-lg font-medium leading-5 text-red-700"
          >¡ Curso completo !</label>
        </div>
      </div>
      <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            v-if="
              isDone ||
                (newCourseMaxStudents - newCourseCurrentNumStudents < 1 &&
                  !isReserved)
            "
            class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white rounded opacity-50 cursor-not-allowed bg-primary-200"
          >Reservar</button>
          <div class="w-full" v-else>
            <button
              v-if="!isReserved"
              @click="reserveCourse()"
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-primary-200 hover:bg-primary-300 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
            >Reservar</button>
            <button
              v-else
              @click="deleteCourseStudent()"
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-400 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
            >Eliminar reserva</button>
          </div>
        </span>
        <span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            @click="
              closeModal('modal_show_course');
              resetAll();
            "
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
          >Cancelar</button>
        </span>
      </div>
    </Modal>
    <Modal id="modal_confirm_delete_event">
      <div class="mt-3 text-center sm:mt-5">
        <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-headline">ELIMINAR EVENTO</h3>
      </div>
      <div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="gender"
            class="block text-sm font-medium leading-5 text-gray-700"
          >¿Seguro que deseas eliminar este evento del calendario?</label>
        </div>
      </div>
      <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button
            @click="deleteEvent()"
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-400 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
          >Eliminar</button>
        </span>
        <span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            @click="
              closeModal('modal_confirm_delete_event');
              resetAll();
            "
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
          >Cancelar</button>
        </span>
      </div>
    </Modal>
    <div v-if="this.$store.getters.getRole === 'ALUMNO'">
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
import { Calendar } from "../classes/calendar";
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
  data: function () {
    return {
      api: new API(),
      title: "",
      clickedEvent: null,
      newCourseTimeStart: "00:00",
      newCourseTimeEnd: "00:00",
      newCourseDate: "",
      newCourseParamsNeeded: null,
      newCourseInstructorSelected: null,
      newCourseSportSelected: null,
      newCourseTypeSelected: null,
      newCourseLevelSelected: null,
      newCourseMaxStudents: null,
      newCourseCurrentNumStudents: null,
      newCoursePrice: null,
      isInstructorSelected: true,
      isSportSelected: true,
      isTypeSelected: true,
      isLevelSelected: true,
      isTimeStart: true,
      isTimeEnd: true,
      isReserved: false,
      isDone: false,
      showSuccessAlert: false,
      successText: "",
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
    if (this.$store.getters.getRole === "ALUMNO") {
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
    async handleClick(arg) {
      if (arg.event.title === "Curso") {
        this.clickedEvent = arg.event;
        let res = await this.api.get(`calendar/course/${arg.event.id}`);

        this.newCourseSportSelected = res.data.data.course.sport.name;
        this.newCourseTypeSelected = res.data.data.course.type.name;
        this.newCourseLevelSelected = res.data.data.course.level.name;
        this.newCourseDate = new moment(res.data.data.start).format(
          "DD-MM-YYYY"
        );
        this.newCourseTimeStart = new moment(res.data.data.start).format(
          "HH:mm"
        );
        this.newCourseTimeEnd = new moment(res.data.data.end).format("HH:mm");
        this.newCourseMaxStudents = res.data.data.course.type.maxStudents;
        this.newCourseCurrentNumStudents =
          res.data.data.course.courseStudents.length;
        this.newCoursePrice = res.data.data.course.type.price;
        this.newCourseInstructorSelected =
          res.data.data.course.courseInstructors[0].instructor.details.firstname;
        let now = new Date();
        let courseDate = new Date(`${res.data.data.start}`);
        if (courseDate < now) {
          this.isDone = true;
        } else {
          this.isDone = false;
        }
        if (res.data.data.course.courseStudents) {
          let actualStudent = res.data.data.course.courseStudents.filter(
            (student) => student.studentId == this.$store.getters.getUserId
          );
          if (actualStudent.length > 0) {
            this.isReserved = true;
          } else {
            this.isReserved = false;
          }
        }
        this.openModal("modal_show_course");
      }
    },
    updateEvent(arg) {
      const userCalendar = new Calendar(arg.event);
      this.$store.dispatch("UPDATE_EVENT", userCalendar);
    },
    renderEvent(arg, element) {
      if (
        (this.$store.getters.getRole === "ADMIN" &&
          arg.event.title == "Curso") ||
        arg.event.title != "Curso"
      ) {
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
          this.clickedEvent = arg.event;
          this.openModal("modal_confirm_delete_event");

          // this.$store.dispatch("DELETE_EVENT", arg.event);
        });
      }
    },

    // own methods
    async getCalendar(role) {
      this.$store.dispatch("SET_LOADING", true);
      let res1, res2;
      // first of all, synchronize db with store
      this.$store.dispatch("RESET_EVENTS");
      switch (role) {
        case "students":
        case "instructors":
          res1 = await this.api.get(`${role}/calendar`);
          break;
        default:
          res2 = await this.api.get(`calendar/courses`);
          break;
      }

      if (res1 && res1.data.data) {
        res1.data.data.forEach((calendar) => {
          let userCalendar = new Calendar(calendar);

          this.$store.dispatch("ADD_EVENT", userCalendar);
        });
      }
      if (res2 && res2.data.data) {
        res2.data.data.forEach((calendar) => {
          let userCalendar = new Calendar(calendar);

          this.$store.dispatch("ADD_EVENT", userCalendar);
        });
      }
      this.$store.dispatch("SET_LOADING", false);
    },
    addStudentOrInstructorEvent(arg) {
      this.$store.dispatch("SET_LOADING", true);
      const dateStart = moment(arg.start);
      const dateEnd = moment(arg.end);
      const userCalendar = new Calendar(arg);
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
              let newCalendar = new Calendar(resp.data.data);
              this.$store.dispatch("ADD_EVENT", newCalendar);
              this.$store.dispatch("ADD_NOTIFICATION", {
                type: "success",
                message: "Añadido al calendario correctamente",
              });
              this.$store.dispatch("SET_LOADING", false);
              resolve(resp);
            })
            .catch((err) => {
              this.$store.dispatch("ADD_NOTIFICATION", {
                type: "error",
                message: "Fallo al añadir al calendario",
              });
              this.$store.dispatch("SET_LOADING", false);
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
      this.openModal("modal_add_course");
    },
    changeInstructorSelected(event) {
      this.newCourseInstructorSelected = this.newCourseParamsNeeded.instructors.find(
        (instructor) => instructor.details.firstname == event.target.value
      );
      this.newCourse.instructor = this.newCourseInstructorSelected;
      this.isInstructorSelected = true;
    },
    changeSportSelected(event) {
      this.newCourseSportSelected = this.newCourseParamsNeeded.sports.find(
        (sport) => sport.name == event.target.value
      );
      this.newCourse.sport = this.newCourseSportSelected;
      this.isSportSelected = true;
    },
    changeTypeSelected(event) {
      this.newCourseTypeSelected = this.newCourseParamsNeeded.courseTypes.find(
        (type) => type.name == event.target.value
      );
      this.newCourse.type = this.newCourseTypeSelected;
      this.isTypeSelected = true;
    },
    changeLevelSelected(event) {
      this.newCourseLevelSelected = this.newCourseSportSelected.sportLevel.find(
        (sportLevel) => sportLevel.level.name == event.target.value
      );
      this.newCourse.level = this.newCourseLevelSelected.level;
      this.isLevelSelected = true;
    },
    addCourse() {
      this.$store.dispatch("SET_LOADING", true);
      if (this.newCourseTimeStart == "00:00") {
        this.isTimeStart = false;
        return;
      }
      if (this.newCourseTimeEnd == "00:00") {
        this.isTimeEnd = false;
        return;
      }
      if (!this.newCourseSportSelected) {
        this.isSportSelected = false;
        return;
      }
      if (!this.newCourseTypeSelected) {
        this.isTypeSelected = false;
        return;
      }
      if (!this.newCourseLevelSelected) {
        this.isLevelSelected = false;
        return;
      }
      let newCourse = new Course();
      newCourse.instructor = this.newCourseInstructorSelected;
      newCourse.sport = this.newCourseSportSelected;
      newCourse.type = this.newCourseTypeSelected;
      newCourse.level = this.newCourseLevelSelected.level;
      newCourse.calendar = {
        start: this.newCourseDate + " " + this.newCourseTimeStart,
        end: this.newCourseDate + " " + this.newCourseTimeEnd,
      };
      return new Promise((resolve, reject) => {
        this.api
          .post("courses", newCourse)
          .then((resp) => {
            this.$store.dispatch("ADD_NOTIFICATION", {
              type: "success",
              message: "El curso se ha creado con éxito",
            });
            let newCalendar = new Calendar(resp.data.data);
            this.$store.dispatch("ADD_EVENT", newCalendar);
            this.$store.dispatch("SET_LOADING", false);
            resolve(resp);
            this.closeModal("modal_add_course");
            resetAll();
          })
          .catch((err) => {
            this.$store.dispatch("ADD_NOTIFICATION", {
              type: "error",
              message: "Algo ha fallado",
            });
            this.$store.dispatch("SET_LOADING", false);
            console.log(err);
            reject(err);
          });
      });
    },
    resetAll() {
      this.isSportSelected = true;
      this.isTypeSelected = true;
      this.isLevelSelected = true;
      this.isTimeStart = true;
      this.isTimeEnd = true;
      this.newCourseSportSelected = null;
      this.newCourseTypeSelected = null;
      this.newCourseLevelSelected = null;
    },
    async reserveCourse() {
      this.$store.dispatch("SET_LOADING", true);
      let res = await this.api.patch(
        `courses/add/${this.clickedEvent.id}/${this.$store.getters.getUserId}`
      );
      this.isReserved = true;
      this.closeModal("modal_show_course");
      this.showSuccessAlert = true;
      this.successText = "Has realizado la reserva con éxito";
      this.$store.dispatch("ADD_NOTIFICATION", {
        type: "success",
        message: "Reserva realizada con éxito",
      });
      this.$store.dispatch("SET_LOADING", false);
    },
    async deleteCourseStudent() {
      this.$store.dispatch("SET_LOADING", true);
      let res = await this.api.delete(
        `courses/del/${this.clickedEvent.id}/${this.$store.getters.getUserId}`
      );
      this.isReserved = false;
      this.$store.dispatch("ADD_NOTIFICATION", {
        type: "success",
        message: "Curso eliminado con éxito",
      });
      this.$store.dispatch("SET_LOADING", false);
      this.closeModal("modal_show_course");
    },
    deleteEvent() {
      this.$store.dispatch("SET_LOADING", true);
      this.$store.dispatch("ADD_NOTIFICATION", {
        type: "success",
        message: "Evento eliminado con éxito",
      });
      this.closeModal("modal_confirm_delete_event");
      this.$store.dispatch("SET_LOADING", false);
      this.$store.dispatch("DELETE_EVENT", this.clickedEvent);
    },
  },
};
</script>
