import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../actions/calendar";
import { API } from "../../classes/api";

const state = {
  events: [],
};

const getters = {
  EVENTS: (state) => state.events,
};

const actions = {
  ADD_EVENT({ commit }, event) {
    commit(ADD_EVENT, event);
  },
  async UPDATE_EVENT({ commit }, payload) {
    let api = new API();
    await api.patch(`calendar/${payload.id}`, payload);
    commit(UPDATE_EVENT, payload);
  },
  async DELETE_EVENT({ commit }, payload) {
    let api = new API();
    await api.delete(`calendar/${payload.id}`);
    commit(DELETE_EVENT, payload);
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
      let api = new API();
      await api.delete(`calendar/${id}`);
    }
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
