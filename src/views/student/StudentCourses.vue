<template>
  <section class>
    <section class="container p-4 mx-auto md:p-8">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-10"
      >
        Mis cursos
      </h1>
      <div>
        <div class="mb-4">
          <nav class="flex justify-center">
            <a
              :class="{
                'bg-primary-400 text-secondary-400 hover:text-secondary-400':
                  tab == 'past',
              }"
              href="#"
              @click="tab = 'past'"
              class="px-3 py-2 text-sm font-medium leading-5 rounded-lg rounded-b-none text-secondary-300 bg-primary-200 hover:text-primary-400"
              >Realizados</a
            >
            <a
              @click="tab = 'next'"
              :class="{
                'bg-primary-400 text-secondary-400 hover:text-secondary-400':
                  tab == 'next',
              }"
              href="#"
              class="px-3 py-2 text-sm font-medium leading-5 rounded-lg rounded-b-none text-secondary-300 bg-primary-200 hover:text-primary-400"
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
    coursesList: function() {
      return this.tab == "next" ? this.nextCourses : this.pastCourses;
    },
    nextCourses: function() {
      return this.courses.filter(
        (course) => new Date() < new Date(`${course.calendar[0].start}`)
      );
    },
    pastCourses: function() {
      return this.courses.filter(
        (course) => new Date() > new Date(`${course.calendar[0].start}`)
      );
    },
  },
  methods: {
    async getCourses() {
      let res = await this.api.get("students/courses");
      if (res.data.data) {
        console.log(res.data.data);

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
