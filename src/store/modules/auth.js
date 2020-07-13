import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_CHECK,
} from "../actions/auth";
import router from "../../router";
import { USER_REQUEST } from "../actions/user";
import apiCall from "../../utils/api";
import axios from "axios";
import { Localit } from "localit";

let store = new Localit();
const state = {
  // token: localStorage.getItem("user-token") || "",
  token: store.get("user-token") || "",
  status: "",
  hasLoadedOnce: false,
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  authStatus: (state) => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      axios({
        url: "http://localhost:3000/api/auth/signin",
        data: user,
        method: "POST",
      })
        .then((resp) => {
          let store = new Localit();
          store.set("user-token", resp.data.data.token);
          axios.defaults.headers.common["Authorization"] = resp.data.data.token;
          commit(AUTH_SUCCESS, resp);
          dispatch(USER_REQUEST, resp);
          resolve(resp);
        })
        .catch((err) => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem("user-token");
          reject(err);
        });
    });
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise((resolve) => {
      commit(AUTH_LOGOUT);
      let store = new Localit();
      store.remove("user-token");
      // localStorage.removeItem("user-token");
      router.push(`/login`);
      resolve();
    });
  },
  [AUTH_CHECK]: ({ commit, dispatch }) => {
    return new Promise((resolve) => {
      let store = new Localit();
      const token = store.get("user-token");
      const user = store.get("user");
      if (token) {
        commit(AUTH_SUCCESS, { data: { data: { token } } });
        dispatch(USER_REQUEST, { data: { data: { user } } });
      } else {
        commit(AUTH_LOGOUT);
      }
    });
  },
  // AUTH_CHECK(context) {
  //   let store = new Localit();
  //   const token = store.get("user-token");
  //   const user = store.get("user");
  //   if (token) {
  //     context.commit(AUTH_SUCCESS, { data: { data: { token } } });
  //     context.dispatch(USER_REQUEST, { data: { data: { user } } });
  //   } else {
  //     context.commit(AUTH_LOGOUT);
  //   }
  // },
};

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = "success";
    state.token = resp.data.data.token;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: (state) => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = "";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
