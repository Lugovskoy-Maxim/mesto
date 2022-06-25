export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  async getInitialCards() {
    const res = await fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async getUserData() {
    const res = await fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  setUserInfo(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      }),
    });
  }

  async addCard(data) {
    const res = await fetch(this._baseUrl + "/cards/", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    });
    return this._checkResponse(res);
  }

  deleteCard(id) {
    return fetch(this._baseUrl + "/cards/" + id, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  async setLikeCard(id) {
    const res = await fetch(this._baseUrl + "/cards/likes/" + id, {
      method: "PUT",
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async deleteLikeCard(id) {
    const res = await fetch(this._baseUrl + "/cards/likes/" + id, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  setUserAvatar(data) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar_url,
      }),
    });
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
