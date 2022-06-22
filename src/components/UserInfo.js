export default class UserInfo {
  constructor({ name, job, avatar}) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return userInfo;
  }

  setUserAvatar(data){
    this._avatar = data;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.job;
  }
}
