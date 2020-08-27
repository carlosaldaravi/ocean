import {
  USER_REQUEST,
  USER_ERROR,
  USER_SUCCESS,
  USER_PHOTO,
  SET_ROLE,
  SET_PHOTO,
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
  hasPhoto: (state) => state.profile.details.photo,
  getRole: (state) => state.role,
  getUserId: (state) => state.profile.id,
  getUserName: (state) =>
    state.profile.details.firstname + " " + state.profile.details.lastname,
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }, user) => {
    let store = new Localit();
    store.set("user", user);
    commit(USER_REQUEST);
    commit(USER_SUCCESS, user);
    const roles = user.roles;

    if (roles.some((role) => role.name === "ADMIN")) {
      commit(SET_ROLE, "ADMIN");
    } else if (roles.some((role) => role.name === "ALUMNO")) {
      commit(SET_ROLE, "ALUMNO");
    } else if (roles.some((role) => role.name === "INSTRUCTOR")) {
      commit(SET_ROLE, "INSTRUCTOR");
    } else {
      commit(SET_ROLE, "");
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
  [USER_PHOTO]: ({ commit, dispatch }, photo) => {
    commit(SET_PHOTO, photo);
  },
};

const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, user) => {
    state.status = "success";
    Vue.set(state, "profile", user);
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
  [SET_PHOTO]: (state, photo) => {
    state.profile.details.photo = photo;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
