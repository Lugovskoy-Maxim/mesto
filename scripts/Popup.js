export default class Popup {
  _popupSelector;

  constructor(popupSelector) {
    this._popupSelector = popupSelector; //с селектором разберусь в следующей пр, честно )
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeOverlay = this._closeOverlay.bind(this);
  }

  openPopup() {
    this._popupSelector.classList.add("popup_opened");
    this._setEventListener();
  }

  closePopup() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
    this._popupSelector.removeEventListener("click", this._closeOverlay);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.closePopup();
    }
  }

  _isNotModal(e) {
    return e.target.classList.contains("popup_opened");
  }

  _closeOverlay(e) {
    if (this._isNotModal(e)) {
      this.closePopup();
    }
  }

  _setEventListener() {
    document.addEventListener("keyup", this._handleEscClose);
    this._popupSelector.addEventListener("click", this._closeOverlay);
  }
}
