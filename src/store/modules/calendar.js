import {
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  RESET_EVENTS,
} from "../actions/calendar";
import { API } from "../../classes/api";

const state = {
  events: [],
};

const getters = {
  EVENTS: (state) => state.events,
};

const actions = {
  ADD_EVENT({ commit }, event) {
    if (event.title == "Curso" && event.course) {
      event.id = event.course.id;
    }
    commit(ADD_EVENT, event);
  },
  async UPDATE_EVENT({ commit }, payload) {
    let api = new API();
    await api.patch(`calendar/${payload.id}`, payload);
    commit(UPDATE_EVENT, payload);
  },
  async DELETE_EVENT({ commit }, payload) {
    let api = new API();
    if (payload.title == "Curso") {
      await api.delete(`calendar/course/${payload.id}`);
    } else {
      await api.delete(`calendar/${payload.id}`);
    }
    commit(DELETE_EVENT, payload);
  },
  RESET_EVENTS({ commit }) {
    commit(RESET_EVENTS);
  },
};
const mutations = {
  ADD_EVENT: (state, event) => {
    state.events.push(event);
  },
  UPDATE_EVENT: (state, { id, title, start, end }) => {
    let index = state.events.findIndex((event) => event.id == id);
    if (index > -1) {
      state.events[index].title = title;
      state.events[index].start = start;
      state.events[index].end = end;
    }
  },
  DELETE_EVENT: async (state, { id }) => {
    let index = state.events.findIndex((event) => event.id == id);
    if (index > -1) {
      state.events.splice(index, 1);
      // let api = new API();
      // await api.delete(`calendar/${id}`);
    }
  },
  RESET_EVENTS: (state) => {
    state.events = [];
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
