const baseUrl = "https://api.movies.project.nomoreparties.sbs";
// const baseUrl= 'http://localhost:3001';


export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

function request(endpoint, options) {
  return fetch(`${baseUrl}${endpoint}`, options)
    .then(handleResponse)
}

export const register = (name, email, password) => {
  return request("/signup", {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
};

export const login = (email, password) => {
  return request("/signin", {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
};

export const signOut = () => {
  return request("/signout", {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
};