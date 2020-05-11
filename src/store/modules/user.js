import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import apiCall from "../../utils/api";
import Vue from "vue";
import { AUTH_LOGOUT } from "../actions/auth";
import { Localit } from "localit";

const state = { status: "", profile: {} };

const getters = {
  getProfile: (state) => state.profile,
  isProfileLoaded: (state) => !!state.profile.details.firstname,
  getRoles: (state) => {
    let roles = [];
    state.profile.roles.forEach((role) => roles.push(role.name));
    return roles;
  },
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }, resp) => {
    let store = new Localit();
    store.set("user", resp.data.data.user);
    commit(USER_REQUEST);
    commit(USER_SUCCESS, resp);
    // apiCall({ url: "user/me" })
    //   .then((resp) => {
    //     commit(USER_SUCCESS, resp);
    //   })
    //   .catch(() => {
    //     commit(USER_ERROR);
    //     // if resp is unauthorized, logout, to
    //     dispatch(AUTH_LOGOUT);
    //   });
  },
};

const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = "success";
    Vue.set(state, "profile", resp.data.data.user);
    Vue.set(state, "roles", resp.data.data.user.roles);
  },
  [USER_ERROR]: (state) => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
