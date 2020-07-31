import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SET_LOADING,
} from "../actions/notifications";

const state = {
  notifications: [],
  loading: false,
};

const getters = {
  NOTIFICATIONS: (state) => state.notifications,
  isLoading: (state) => state.loading,
};

const actions = {
  ADD_NOTIFICATION({ commit }, notification) {
    commit(ADD_NOTIFICATION, notification);
  },
  REMOVE_NOTIFICATION({ commit }, notification) {
    commit(REMOVE_NOTIFICATION, notification);
  },
  SET_LOADING({ commit }, value) {
    commit(SET_LOADING, value);
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
  SET_LOADING: (state, value) => {
    state.loading = value;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
