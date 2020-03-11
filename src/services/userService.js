// import http from "./httpService";
import axios from "axios";
function userUrl() {
  return process.env.REACT_APP_API_URL + "/user";
}

export function register(user) {
  return axios.post(userUrl(), user);
}
