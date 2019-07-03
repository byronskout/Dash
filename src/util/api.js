

const headers = {
  "Content-Type": "application/json",
   Accepts: "application/json"
};

const login = (username, password) => {
  return fetch('https://dash-backendd.herokuapp.com/auth/create', {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const signup = (username, password) => {
  return fetch('https://dash-backendd.herokuapp.com/users', {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      username,
      password
    })
  }).then(res => res.json());
};

const getCurrentUser = token => {
  return fetch('https://dash-backendd.herokuapp.com/auth/show', {
    headers: { ...headers, Authorization: token }
  }).then(res => res.json());
};

export default {
  login,
  getCurrentUser,
  signup
};
