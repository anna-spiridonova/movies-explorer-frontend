class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  _request(url, options) {
    return fetch(url, options)
      .then(this._handleResponse)
  }

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
  }

  editUserInfo(name, email) {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
  }

  getMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: 'include',
    })
  }

  createMovie(data) {
    return this._request(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  deleteMovie(movieId) {
    return this._request(`${this._baseUrl}/movies/${movieId}`, {
      headers: this._headers,
      credentials: 'include',
      method: 'DELETE'
    })
  }

}

export const api = new Api({
  baseUrl: 'https://api.movies.project.nomoreparties.sbs',
  // baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});
