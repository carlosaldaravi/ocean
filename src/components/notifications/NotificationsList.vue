<template>
  <div>
    Total notificaciones:
    {{ this.notifications.length }}
    <notification-message
      v-for="notification in notifications"
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
};
</script>

<style>
.notification-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
