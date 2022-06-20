import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageName = this._popupContainer.querySelector(".popup__image-title");
    this._imageUrl = this._popupContainer.querySelector(".popup__image");
  }

  openPopup(title, link) {
    this._imageUrl.src = link;
    this._imageUrl.alt = title;
    this._imageName.textContent = title;
    super.openPopup();
  }

  setEventListener() {
    super.setEventListener();
  }
}
