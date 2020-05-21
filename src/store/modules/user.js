import {
  USER_REQUEST,
  USER_ERROR,
  USER_SUCCESS,
  SET_ROLE,
} from "../actions/user";
import apiCall from "../../utils/api";
import Vue from "vue";
import { AUTH_LOGOUT } from "../actions/auth";
import { Localit } from "localit";

const state = {
  status: "",
  profile: {},
  role: "",
};

const getters = {
  getProfile: (state) => state.profile,
  isProfileLoaded: (state) => !!state.profile.details.firstname,
  getRole: (state) => state.role,
  getUserId: (state) => state.profile.id,
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }, resp) => {
    let store = new Localit();
    store.set("user", resp.data.data.user);
    commit(USER_REQUEST);
    commit(USER_SUCCESS, resp);
    const roles = resp.data.data.user.roles;

    if (roles.some((role) => role.name === "ADMIN")) {
      commit(SET_ROLE, "ADMIN");
    } else if (roles.some((role) => role.name === "STUDENT")) {
      commit(SET_ROLE, "STUDENT");
    } else if (roles.some((role) => role.name === "INSTRUCTOR")) {
      commit(SET_ROLE, "INSTRUCTOR");
    }
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
  },
  [USER_ERROR]: (state) => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {};
  },
  [SET_ROLE]: (state, role) => {
    state.role = role;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
