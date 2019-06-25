

const login = (username, password) => {
   fetch('https://dash-backendd.herokuapp.com/auth/create', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       Accepts: "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const signup = (username, password) => {
   fetch('https://dash-backendd.herokuapp.com/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       Accepts: "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(res => res.json());
};

const getCurrentUser = token => {
   fetch('https://dash-backendd.herokuapp.com/auth/show', {
    headers: { ...headers, Authorization: token }
  }).then(res => res.json());
};


export default {
  login,
  getCurrentUser,
  signup
};
