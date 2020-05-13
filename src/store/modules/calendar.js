import { ADD_EVENT } from "../actions/calendar";

const state = {
  events: [],
};

const getters = {
  EVENTS: (state) => state.events,
};

const actions = {
  ADD_EVENT(context, event) {
    context.commit(ADD_EVENT, event);
  },
};
const mutations = {
  ADD_EVENT: (state, event) => {
    state.events.push(event);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
