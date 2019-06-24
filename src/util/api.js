const API_BASE_URL = `http://localhost:3000`;

const headers = {
  "Content-Type": "application/json",
   Accepts: "application/json"
};

const login = (username, password) => {
  return fetch(`${API_BASE_URL}/auth/create`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const signup = (username, password) => {
  return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      username,
      password
    })
  }).then(res => res.json());
};

const getCurrentUser = token => {
  return fetch(`${API_BASE_URL}/auth/show`, {
    headers: { ...headers, Authorization: token }
  }).then(res => res.json());
};


export default {
  login,
  getCurrentUser,
  signup
};
