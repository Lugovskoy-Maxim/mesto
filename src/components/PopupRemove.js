import Popup from "./Popup.js";
export default class PopupRemove extends Popup {
  constructor(popupSelector, handleRemoveSubmit) {
    super(popupSelector);
    this._handleRemoveSubmit = handleRemoveSubmit;
    this._popupForm = this._popupContainer.querySelector(".popup__form");
  }

  openPopup() {
    super.openPopup();
  }

  closePopup() {
    super.closePopup();
  }

  _submitRemove(cardId){
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleRemoveSubmit(cardId);
    });
  }

  setEventListener() {
    super.setEventListener();
  }
}
