<template>
  <div class="p-4 demo-app">
    <div v-if="this.$store.getters.getRole === 'ADMIN'"></div>
    <div v-if="this.$store.getters.getRole === 'STUDENT'">
      <p>
        Selecciona en el calendario las fechas en las que estás disponible para
        nuestras clases.
      </p>
      <div class="pt-1 items-center flex">
        <img class="h-4 w-4" src="../assets/icons/computer-desktop.svg" />
        <div class="pl-2">Click y arrastra</div>
      </div>
      <div class="flex items-center">
        <img class="h-4 w-4" src="../assets/icons/mobile-devices.svg" />
        <div class="pl-2">Pulsa, mantén y luego arrastra</div>
      </div>
    </div>
    <div v-if="this.$store.getters.getRole === 'INSTRUCTOR'">
      INSTRUCTOR home
    </div>
    <div class="mt-4 demo-app-top">
      <!-- <button @click="toggleWeekends">toggle weekends</button>
      <br />
      <button @click="gotoPast">go to a date in the past</button>
      <br />

      <button @click="test">test api</button>-->
      <!-- (also, click a date/time to add an event) -->
    </div>

    <FullCalendar
      locale="es"
      class="demo-app-calendar bg-white"
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
      @select="handleSelect"
      @eventClick="handleClick"
      @eventResize="updateEvent"
      @eventDrop="updateEvent"
      @eventRender="renderEvent"
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

      // calendarWeekends: true,
      // calendarEvents: [
      //   // initial event data
      //   { title: "Event Now", start: new Date() },
      // ],
    };
  },
  created() {
    if (this.$store.getters.getRole === "ADMIN") this.title = "Curso";
    if (this.$store.getters.getRole === "STUDENT") {
      this.title = "Disponible";
      this.getStudentCalendar();
    }
    if (this.$store.getters.getRole === "INSTRUCTOR") this.title = "Vacaciones";
  },
  methods: {
    // toggleWeekends() {
    //   this.calendarWeekends = !this.calendarWeekends; // update a property
    // },
    // test() {
    //   let calendarApi = this.$refs.fullCalendar.getApi(); // from the ref="..."
    //   console.log(calendarApi);
    // },
    // gotoPast() {
    //   let calendarApi = this.$refs.fullCalendar.getApi(); // from the ref="..."
    //   calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
    // },
    // handleDateClick(arg) {
    //   if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
    //     this.calendarEvents.push({
    //       // add new event data
    //       title: "New Event",
    //       start: arg.date,
    //       allDay: arg.allDay,
    //     });
    //   }
    // },
    handleSelect(arg) {
      const dateStart = moment(arg.start);
      const dateEnd = moment(arg.end);
      const userCalendar = new UserCalendar(arg);
      userCalendar.title = this.title;
      userCalendar.start = dateStart;

      let eventFound = this.$store.getters.EVENTS.find((_event) => {
        let dbDateStart = moment(_event.start);
        let dbDateEnd = moment(_event.end);

        return (
          (dateStart.isBefore(dbDateEnd) && dateStart.isAfter(dbDateStart)) ||
          (dateEnd.isBefore(dbDateEnd) && dateEnd.isAfter(dbDateStart)) ||
          (dateStart.isBefore(dbDateStart) && dateEnd.isAfter(dbDateEnd))
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
    renderEvent(arg) {
      let closeButton = document.createElement("button");
      let closeSpan = document.createElement("span");
      closeButton.setAttribute(
        "class",
        "h-1 p-2 rounded text-white bg-red-700 order-1"
      );
      // closeButton.innerHTML("x");
      arg.el.appendChild(closeButton);

      closeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        this.$store.dispatch("DELETE_EVENT", arg.event);
      });
    },
    async getStudentCalendar() {
      let res = await this.api.get("students/calendar");
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
  },
};
</script>
