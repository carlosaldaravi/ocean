<template>
  <div>
    <div v-if="this.$store.getters.getRole === 'INSTRUCTOR'">
      <Modal :id="'course_' + course.id">
        <div v-if="courseStudent">
          <div class="mt-1 text-center">
            <h3
              class="text-xl font-medium leading-6 text-primary-100"
              id="modal-headline"
            >
              Validar objetivos
            </h3>
          </div>
          <div>
            <div class="col-span-6 sm:col-span-3">
              <div class="flex justify-between my-4">
                <label
                  for="alumnoSelected"
                  class="block text-lg font-medium leading-5 text-primary-200"
                  >Alumno</label
                >
                <div
                  class="block text-lg font-medium leading-5 text-primary-200"
                >
                  {{ courseStudent.student.details.firstname }}
                  {{ courseStudent.student.details.lastname }}
                </div>
              </div>
              <div class="flex justify-between">
                <div>Objetivo</div>
                <div>Realizado</div>
              </div>
              <div
                v-for="studentTarget of studentTargets"
                :key="
                  'student_' +
                    courseStudent.studentId +
                    '_target_' +
                    studentTarget.targetId
                "
                class="flex justify-between mb-2 text-left"
              >
                <div class="w-3/4 text-xs">{{ studentTarget.target.name }}</div>
                <input
                  @click="studentTarget.checked = !studentTarget.checked"
                  :checked="studentTarget.checked"
                  :id="studentTarget.target.id"
                  type="checkbox"
                  class="w-4 h-4 transition duration-150 ease-in-out form-checkbox"
                />
              </div>
              <div class="flex justify-between mt-4">
                <div>Marcar todos</div>
                <input
                  @click="markAll($event)"
                  :checked="checkAll()"
                  type="checkbox"
                  class="w-4 h-4 transition duration-150 ease-in-out border-primary-200 form-checkbox"
                />
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  @click="validateTargets()"
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
                  @click="closeModal(`course_${course.id}`)"
                  type="button"
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                >
                  Cancelar
                </button>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
    <div
      @click="moreCard = !moreCard"
      class="relative flex flex-col h-auto overflow-hidden bg-gray-100 bg-opacity-75 rounded shadow xl:flex-row bg-opa"
    >
      <div class="absolute right-0">
        <img class="w-8 h-8 rounded" src="../../assets/images/spain.png" alt />
      </div>

      <div class="w-full h-full xl:w-1/3">
        <img
          v-if="course.sport.name == 'SUP' && course.level.name == 'Iniciación'"
          class="object-cover w-full h-48"
          src="../../assets/images/sup_iniciacion.jpg"
          alt
        />
        <img
          v-else-if="
            course.sport.name == 'SUP' &&
              course.level.name == 'Perfeccionamiento'
          "
          class="object-cover w-full h-48"
          src="../../assets/images/sup_perfeccionamiento.jpg"
          alt
        />
        <img
          v-else-if="
            course.sport.name == 'Windsurf' && course.level.name == 'Iniciación'
          "
          class="object-cover w-full h-48"
          src="../../assets/images/windsurf_iniciacion.jpg"
          alt
        />
        <img
          v-else-if="
            course.sport.name == 'Windsurf' &&
              course.level.name == 'Perfeccionamiento'
          "
          class="object-cover w-full h-48"
          src="../../assets/images/windsurf_perfeccionamiento.jpg"
          alt
        />
        <img
          v-else-if="
            course.sport.name == 'Windsurf' && course.level.name == 'Avanzado'
          "
          class="object-cover w-full h-48"
          src="../../assets/images/windsurf_avanzado.jpg"
          alt
        />
        <img
          v-else-if="
            course.sport.name == 'Kitesurf' && course.level.name == 'Iniciación'
          "
          class="object-cover w-full h-48"
          src="../../assets/images/kitesurf_iniciacion.jpg"
          alt
        />
        <img
          v-else-if="
            course.sport.name == 'Kitesurf' &&
              course.level.name == 'Perfeccionamiento'
          "
          class="object-cover w-full h-48"
          src="../../assets/images/kitesurf_perfeccionamiento.jpg"
          alt
        />
        <img
          v-else-if="
            course.sport.name == 'Kitesurf' && course.level.name == 'Avanzado'
          "
          class="object-cover w-full h-48"
          src="../../assets/images/kitesurf_avanzado.jpg"
          alt
        />
        <img
          v-else-if="
            course.sport.name == 'Kitesurf' && course.level.name == 'Experto'
          "
          class="object-cover w-full h-48"
          src="../../assets/images/kitesurf_experto.jpg"
          alt
        />
      </div>

      <div class="w-full h-full p-4 xl:w-2/3">
        <!-- hora fecha -->
        <div class="flex justify-between">
          <div class="flex items-center">
            <img src="../../assets/images/calendario.svg" class="w-6 h-6" alt />
            <div class="pl-2">{{ getDate(course.calendar[0].start) }}</div>
          </div>

          <div class="flex items-center sm:mr-4">
            <img src="../../assets/images/reloj.svg" class="w-6 h-6" alt />
            <div class="pl-2">
              {{ getTime(course.calendar[0].start) }} -
              {{ getTime(course.calendar[0].end) }}
            </div>
          </div>
        </div>
        <!-- nivel  -->
        <div class="flex pt-2 align-middle">
          <div class="flex items-center">
            <div class="text-3xl">{{ course.level.name }}</div>
          </div>
        </div>
        <!-- instructor -->
        <div class="flex justify-between mt-2">
          <div class="flex items-center">
            <div>
              <img
                v-if="course.courseInstructors[0].instructor.details.photo"
                class="object-cover object-top rounded-full w-9 h-9"
                :src="
                  'https://api-ocean.herokuapp.com/api/file/avatar/' +
                    course.courseInstructors[0].instructor.details.photo
                "
                alt
              />
              <img
                v-else
                class="object-cover object-top rounded-full w-9 h-9"
                src="../../assets/images/avatar/user_default.png"
                alt
              />
            </div>
            <div class="ml-3">
              <p
                class="text-base font-black leading-5 text-gray-700 group-hover:text-gray-900"
              >
                {{ course.courseInstructors[0].instructor.details.firstname }}
              </p>
              <p
                v-if="
                  course.courseInstructors[0].instructor.details.gender ==
                    'FEMALE'
                "
                class="text-xs font-medium leading-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-700 group-focus:underline"
              >
                Instructora
              </p>
              <p
                v-else
                class="text-xs font-medium leading-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-700 group-focus:underline"
              >
                Instructor
              </p>
            </div>
          </div>
        </div>
        <div v-show="moreCard" class="mt-4">
          <div class>
            <!-- alumnos -->
            <div class="flex justify-between mt-2 align-baseline">
              <div>Alumnos</div>
              <div>Objetivos</div>
            </div>
            <div
              v-for="courseStudent of course.courseStudents"
              :key="courseStudent.studentId"
            >
              <CourseStudent
                :courseStudent="courseStudent"
                :courseId="course.id"
                @isMoreCard="moreCard = false"
                @setCourseStudent="setCourseStudent"
              ></CourseStudent>
            </div>
          </div>
        </div>
        <div class="flex justify-center -mb-3">
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
import moment from "moment";
import Modal from "../modals/Modal.vue";
import CourseStudent from "./CourseStudent.vue";
import { UI } from "../../mixins/UI";
import { formatDate, formatTime } from "../../helpers/functions";
import { StudentTarget } from "../../classes/student-target";
import { API } from "../../classes/api";

export default {
  components: {
    Modal,
    StudentTarget,
    CourseStudent,
  },
  data() {
    return {
      api: new API(),
      studentTargets: [],
      courseStudent: null,
      moreCard: false,
    };
  },
  props: {
    course: { type: Object, required: true },
  },
  mixins: [UI],
  methods: {
    formatDate,
    formatTime,
    getGender(instructor) {
      if (instructor.details.gender && instructor.details.gender === "FEMALE") {
        return "instructora";
      } else {
        return "instructor";
      }
    },
    getDate(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    getTime(date) {
      return moment(date).format("HH:mm");
    },
    setCourseStudent(event) {
      this.courseStudent = event;
      this.studentTargets = [];
      event.student.studentTargets.forEach((studentTarget) => {
        this.studentTargets.push(new StudentTarget(studentTarget));
      });
      this.openModal(`course_${this.course.id}`);
    },
    markAll(event) {
      this.studentTargets.forEach((st) => (st.checked = event.target.checked));
    },
    async validateTargets() {
      this.$store.dispatch("SET_LOADING", true);
      let targets = [];
      this.studentTargets.forEach((st) => {
        if (st.checked) {
          targets.push({
            studentId: this.courseStudent.studentId,
            targetId: st.targetId,
            feedback: "",
            validatedBy: this.$store.getters.getUserId,
            validatedDate: new Date(),
          });
        } else {
          targets.push({
            studentId: this.courseStudent.studentId,
            targetId: st.targetId,
            feedback: "",
            validatedBy: null,
            validatedDate: null,
          });
        }
      });

      let res = await this.api.post("users/setTargets", targets);
      if (res.data.data) {
        let studentId = this.courseStudent.studentId;

        this.course.courseStudents.forEach(function(item, i) {
          if (item.studentId == studentId) {
            item.student.studentTargets = [];

            res.data.data.studentTargets.forEach((studentTarget) => {
              item.student.studentTargets.push(
                new StudentTarget(studentTarget)
              );
            });
          }
        });
        this.closeModal(`course_${this.course.id}`);
        this.$store.dispatch("ADD_NOTIFICATION", {
          type: "success",
          message: "Objetivos validados correctamente",
        });
      } else {
        this.$store.dispatch("ADD_NOTIFICATION", {
          type: "error",
          message: "No se han podido validar los objetivos",
        });
      }
      this.$store.dispatch("SET_LOADING", false);
    },
    checkAll() {
      let allChecked = true;
      this.studentTargets.forEach((sT) => {
        if (!sT.checked) {
          allChecked = false;
        }
      });
      return allChecked;
    },
  },
};
</script>

<style></style>
