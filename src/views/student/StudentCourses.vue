<template>
  <section class>
    <section class="container p-4 md:p-8 mx-auto">
      <h1
        class="text-3xl text-center leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Mis cursos
      </h1>
      <div>
        <div class="mb-4">
          <nav class="flex justify-center">
            <a
              :class="{ 'bg-green-400 text-white': tab == 'past' }"
              href="#"
              @click="tab = 'past'"
              class="px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-600 hover:text-gray-800"
              >Realizados</a
            >
            <a
              @click="tab = 'next'"
              :class="{ 'bg-green-400 text-white': tab == 'next' }"
              href="#"
              class="ml-4 px-3 py-2 font-medium text-sm leading-5 rounded-md text-gray-600 hover:text-gray-800"
              >Próximos</a
            >
          </nav>
        </div>
        <CourseList :courses="coursesList"></CourseList>
      </div>
    </section>
  </section>
</template>

<script>
import CourseList from "../../components/course/CourseList.vue";
import { Course } from "../../classes/course";
import { API } from "../../classes/api";
export default {
  data() {
    return {
      api: new API(),
      courses: [],
      // values: 'next', 'past'
      tab: "next",
    };
  },
  components: {
    CourseList,
  },
  created() {
    this.getCourses();
  },
  computed: {
    coursesList: function() {
      return this.tab == "next" ? this.nextCourses : this.pastCourses;
    },
    nextCourses: function() {
      return this.courses.filter(
        (course) =>
          new Date() <
          new Date(
            `${course.calendar[0].date} ${course.calendar[0].start_time}`
          )
      );
    },
    pastCourses: function() {
      return this.courses.filter(
        (course) =>
          new Date() >
          new Date(
            `${course.calendar[0].date} ${course.calendar[0].start_time}`
          )
      );
    },
  },
  methods: {
    async getCourses() {
      let res = await this.api.get("students/courses");
      res.data.data.forEach((course) => {
        this.courses.push(new Course(course));
      });
    },
  },
};
</script>

<style></style>
