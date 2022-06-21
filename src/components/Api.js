export default class Api {
  constructor(url, token){
    this._url = url;
    this._token = token;
  }

  getUserInfo(){
    fetch(this._url+ "/users/me")
    .then((res)=> {
      if (res.ok)
      return res.json()
      })






    }
    return Pa
  }

  asdasd

  as
  dasdasd



