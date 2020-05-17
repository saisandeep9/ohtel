// import http from "./httpService";
import axios from "axios";
function userUrl() {
  return process.env.REACT_APP_API_URL + "/users";
}

export function register(user) {
  return axios.post(userUrl(), user);
}

//  const { data: users } = await axios.get(
//    process.env.REACT_APP_API_URL + `/users`,
//    {
//      // headers: {
//      //   "x-auth-token": auth.getToken(),
//      // },
//    }
//  );
