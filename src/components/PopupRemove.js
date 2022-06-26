import Popup from "./Popup.js";
export default class PopupRemove extends Popup {
  constructor(popupSelector, handleRemoveSubmit) {
    super(popupSelector);
    this._handleRemoveSubmit = handleRemoveSubmit;
    this._popupForm = this._popupContainer.querySelector(".popup__form");
  }

  openPopup = (thisCard) => {
    this._thisCard = thisCard;
    super.openPopup();
  };

  closePopup() {
    super.closePopup();
  }

  setEventListener() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleRemoveSubmit(this._thisCard); //после удалить карточку
    });
    super.setEventListener();
  }
}
