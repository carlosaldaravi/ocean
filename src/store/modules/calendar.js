import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../actions/calendar";

const state = {
  events: [],
};

const getters = {
  EVENTS: (state) => state.events,
};

const actions = {
  ADD_EVENT(context, event) {
    // return new Promise((resolve, reject) => {
    //   commit(AUTH_REQUEST);
    //   axios({
    //     url: "http://localhost:3000/api/user/calendar",
    //     data: {
    //       id: event.id,
    //       title: event.title,
    //       start: event.start,
    //       end: event.end,
    //       fullDay: event.fullDay,
    //     },
    //     method: "POST",
    //   })
    //     .then((resp) => {
    context.commit(ADD_EVENT, event);
    //       resolve(resp);
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });
    // });
  },
  UPDATE_EVENT(context, payload) {
    console.log(payload);

    context.commit(UPDATE_EVENT, payload);
  },
  DELETE_EVENT(context, payload) {
    console.log(payload);

    context.commit(DELETE_EVENT, payload);
  },
};
const mutations = {
  ADD_EVENT: (state, event) => {
    let index = state.events.findIndex((_event) => {
      console.log("_event: ", _event.start);
      console.log("event: ", event.start);
      _event.start == event.start;
    });
    console.log("index: ", index);

    if (index === -1) {
      state.events.push(event);
    }
  },
  UPDATE_EVENT: (state, { id, title, start, end }) => {
    let index = state.events.findIndex((event) => event.id == id);
    if (index > -1) {
      state.events[index].title = title;
      state.events[index].start = start;
      state.events[index].end = end;
    }
  },
  DELETE_EVENT: (state, { id }) => {
    let index = state.events.findIndex((event) => event.id == id);
    if (index > -1) {
      state.events.splice(index, 1);
    }
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
