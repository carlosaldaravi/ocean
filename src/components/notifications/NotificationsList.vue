<template>
  <div class="fixed bottom-0 z-50 w-full">
    <notification-message
      class="mb-4"
      v-for="notification in notifications.notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationMessage from "./NotificationsMessage.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    NotificationMessage,
  },
  computed: {
    ...mapGetters(["NOTIFICATIONS"]),
    ...mapState(["notifications"]),
  },
  created() {
    console.log("NotificationList");
  },
};
</script>

<style>
</style>
