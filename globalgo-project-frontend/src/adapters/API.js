const API_ENDPOINT = "http://localhost:3000";
const USERS_URL = `${API_ENDPOINT}/users`;
const LOGIN_URL = `${API_ENDPOINT}/login`;
const VALIDATE_URL = `${API_ENDPOINT}/validate_user`;

const jsonify = res => res.json();

export const login = loginData => {
  return fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: loginData })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });
};

export const signUp = signupData => {
  return fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: signupData })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });
};

export const validateUser = () => {
  if (localStorage.token) {
    return fetch(VALIDATE_URL, {
      headers: {
        Authorisation: localStorage.token
      }
    })
      .then(jsonify)
      .then(data => {
        localStorage.setItem("token", data.token);
        return data.user;
      });
  } else {
    return Promise.reject({ error: "no token" });
  }
};


export default {
  login,
  signUp,
  validateUser,
};
