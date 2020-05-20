<template>
  <div class="p-4 demo-app">
    <div v-if="this.$store.getters.getRole === 'ADMIN'"></div>
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
    <div v-if="this.$store.getters.getRole === 'INSTRUCTOR'">
      INSTRUCTOR home
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

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  computed: {
    ...mapGetters(["EVENTS"]),
  },
  data: function() {
    return {
      api: new API(),
      title: "",
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
      // first of all, synchronize db with store
      this.$store.dispatch("RESET_EVENTS");
      let res = await this.api.get(`${role}/calendar`);
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
    addCourseEvent(arg) {},
  },
};
</script>
