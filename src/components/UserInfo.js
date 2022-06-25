export default class UserInfo {
  constructor({ name, job, avatar }) {
    this._name = name;
    this._job = job;
    this._avatar = avatar;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return userInfo;
  }

  setUserAvatar(data) {
    this._avatar.src = data;
  }

  setUserInfo(res) {
    this._name.textContent = res.name;
    this._job.textContent = res.job;
  }
}
