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

  async setUserInfo(data) {
    const res = await fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      }),
    });
    return this._checkResponse(res);
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

  async deleteCard(id) {
    const res= await fetch(this._baseUrl + "/cards/" + id, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._checkResponse(res);
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

  async setUserAvatar(data) {
    const res = await fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar_url,
      }),
    })
    return this._checkResponse(res);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
