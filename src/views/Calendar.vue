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
        <div class="pl-2">
          Click y arrastra
        </div>
      </div>
      <div class="flex items-center">
        <img class="h-4 w-4" src="../assets/icons/mobile-devices.svg" />
        <div class="pl-2">
          Pulsa, mantén y luego arrastra
        </div>
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

      <button @click="test">test api</button> -->
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
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  computed: {
    ...mapGetters(["EVENTS"]),
  },
  data: function() {
    return {
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
    if (this.$store.getters.getRole === "STUDENT") this.title = "Disponible";
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
      let index = this.$store.getters.EVENTS.findIndex((_event) => {
        console.log("_event: ", _event.start);
        console.log("event: ", arg.start);
        _event.start == arg.start;
      });
      console.log("index: ", index);
      if (index == -1) {
        this.$store.dispatch("ADD_EVENT", {
          id: new Date().getTime(),
          title: this.title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay,
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
      this.$store.dispatch("UPDATE_EVENT", arg.event);
    },
    renderEvent(arg) {
      let close = document.createElement("img");
      close.setAttribute("src", "../assets/icons/close.svg");
      close.setAttribute("alt", "borrar");
      arg.el.appendChild(close);
      close.addEventListener("click", (event) => {
        event.stopPropagation();
        this.$store.dispatch("DELETE_EVENT", arg.event);
      });
    },
  },
};
</script>
