<template>
  <section>
    <list :instructors="instructors"></list>
  </section>
</template>

<script>
import List from "../../components/instructor/List.vue";
import { Instructor } from "../../classes/instructor";

export default {
  data() {
    return {
      instructors: []
    };
  },
  components: {
    List,
    Instructor
  },
  methods: {
    async getInstructors() {
      let res = await this.api.get("instructors");
      if (res.data.data) {
        res.data.data.forEach(instructor => {
          this.instructors.push(new Instructor(instructor));
        });
      }
    }
  }
};
</script>
