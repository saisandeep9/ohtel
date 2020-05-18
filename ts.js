function userUrl(id) {
  return process.env.REACT_APP_API_URL + "/users" + (id ? "/" + id : "");
}

function register(id) {
  return userUrl(id) + "/me";
}

console.log(userUrl(2));
console.log(register(3));
