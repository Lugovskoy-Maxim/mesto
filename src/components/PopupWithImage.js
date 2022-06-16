import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor ({popupSelector}) {
    super(popupSelector);
    this._imageName = document.querySelector('.popup__image-title');
    this._imageUrl = document.querySelector('.popup__image');
  }

  openPopup(name, link){
    console.log(this._popupSelector)
    this._imageUrl.src = link;
    this._imageUrl.alt = name;
    this._imageName.textContent = name;
    super.openPopup();
  }
}