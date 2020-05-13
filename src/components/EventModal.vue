<template>
  <div>
    <fieldset>
      <legend>Event details</legend>
      <b>Title:</b>{{ event.title }} <b>Start:</b>{{ event.start }} <b>End:</b
      >{{ event.end }} <b>ID:</b>{{ event.id }}
    </fieldset>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    text: String,
    event: {},
  },
};
</script>

<style></style>
