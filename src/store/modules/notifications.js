import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "../actions/notifications";

const state = {
  notifications: [],
};

const getters = {
  NOTIFICATIONS: (state) => state.notifications,
};

const actions = {
  ADD_NOTIFICATION({ commit }, notification) {
    commit(ADD_NOTIFICATION, notification);
  },
  REMOVE_NOTIFICATION({ commit }, notification) {
    commit(REMOVE_NOTIFICATION, notification);
  },
};
const mutations = {
  ADD_NOTIFICATION: (state, notification) => {
    state.notifications.push({
      ...notification,
      id:
        Math.random().toString(36) +
        Date.now()
          .toString(36)
          .substr(2),
    });
  },
  REMOVE_NOTIFICATION: (state, notification) => {
    state.notifications = state.notifications.filter((notif) => {
      return notif.id != notification.id;
    });
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
