<template>
  <div class="demo-app">
    <div class="demo-app-top">
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
      :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      }"
      :plugins="calendarPlugins"
      :weekends="true"
      :events="EVENTS"
      :selectable="true"
      @select="handleSelect"
      @eventClick="handleClick"
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
      this.$store.dispatch("ADD_EVENT", {
        id: new Date().getTime(),
        title: "disponible",
        start: arg.start,
        end: arg.end,
        allDay: arg.allDay,
      });
    },
    handleClick(arg) {
      this.$modal.show(EventModal, {
        text: "This is from the component",
        event: arg.event,
      });
    },
  },
};
</script>
