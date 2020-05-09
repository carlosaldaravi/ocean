import axios from "axios";
import { config } from "../config";
import { Result } from "./result";

// This is an axios wrapper. Only Get and Post methods are defined here since we dont use Put, Patch and Delete calls.
// There are try-catch blocks so we can easily use the Vue Alert component when a request fails
export const API = class API {
  constructor(url = null) {
    this.apiURL = url || config.apiURL;

    this.result = new Result();
  }

  async get(url, params = null) {
    try {
      let res = await axios({
        method: "get",
        url: `${this.apiURL}${url}`,
        data: params,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      });
      this.result.ok(res.data);
    } catch (e) {
      this.result.error(e);
    } finally {
      return this.result;
    }
  }

  async post(url, params) {
    console.log("params: ", params);

    let res = null;
    try {
      res = await axios({
        method: "post",
        url: `${this.apiURL}${url}`,
        data: params,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      this.result.ok(res.data);
    } catch (e) {
      this.result.error(e);
    } finally {
      return this.result;
    }
  }

  setBaseURL(url = null) {
    this.apiURL = url || config.apiURL;
  }
};
