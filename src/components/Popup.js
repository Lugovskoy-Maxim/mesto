export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this.handleEscClose = this.handleEscClose.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  openPopup() {
    document.addEventListener("keyup", this.handleEscClose);
    this._popupSelector.classList.add("popup_opened");
    /// перенести в место нициализации
  }

  closePopup() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keyup", this.handleEscClose);
    this._popupSelector.removeEventListener("click", this.closeOverlay);
  }

  handleEscClose(event) {
    if (event.key === "Escape") {
      this.closePopup();
    }
  }

  _isNotModal(e) {
    return e.target.classList.contains("popup_opened");
  }

  closeOverlay(e) {
    if (this._isNotModal(e)) {
      this.closePopup();
    }
  }

  setEventListener() {
    this._popupSelector.addEventListener("click", this.closeOverlay);
    this._buttonClose = this._popupSelector.querySelector(".popup__close");
    this._buttonClose.addEventListener("click", () => this.closePopup());
  }
}
