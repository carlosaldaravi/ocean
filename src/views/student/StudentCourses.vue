<template>
  <section class>
    <section class="container p-4 mx-auto md:p-8">
      <div>
        <div class="mb-4">
          <nav class="flex justify-center">
            <a
              :class="{
                'bg-primary-200 text-secondary-100 hover:text-secondary-100':
                  tab == 'past',
              }"
              href="#"
              @click="tab = 'past'"
              class="px-3 py-2 text-sm font-medium leading-5 rounded-lg rounded-b-none hover:text-primary-300"
            >Realizados</a>
            <a
              @click="tab = 'next'"
              :class="{
                'bg-primary-200 text-secondary-100 hover:text-secondary-100':
                  tab == 'next',
              }"
              href="#"
              class="px-3 py-2 text-sm font-medium leading-5 rounded-lg rounded-b-none hover:text-primary-300"
            >Próximos</a>
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
import { AUTH_LOGOUT } from "../../store/actions/auth";

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
    coursesList: function () {
      return this.tab == "next" ? this.nextCourses : this.pastCourses;
    },
    nextCourses: function () {
      return this.courses.filter(
        (course) => new Date() < new Date(`${course.calendar[0].start}`)
      );
    },
    pastCourses: function () {
      return this.courses.filter(
        (course) => new Date() > new Date(`${course.calendar[0].start}`)
      );
    },
  },
  methods: {
    async getCourses() {
      let res;
      if (this.$store.getters.getRole == "ALUMNO") {
        res = await this.api.get("students/courses");
      } else {
        res = await this.api.get("instructors/courses");
      }

      if (res.data.data) {
        res.data.data.forEach((course) => {
          this.courses.push(new Course(course));
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

<style></style>
