import Popup from "./Popup.js";
export default class PopupRemove extends Popup {
  constructor(popupSelector, handleRemoveSubmit) {
    super(popupSelector);
    this._handleRemoveSubmit = handleRemoveSubmit;
    this._popupForm = this._popupContainer.querySelector(".popup__form");
    this._submitButton = this._popupForm.querySelector('.popup__save');
  }

  openPopup(thisCard) {
    this._thisCard = thisCard;
    super.openPopup();
  }

  loading(status, text){
    if(!status) {
      this._submitButton.textContent = text;
    }else {
      this._submitButton.textContent = "Удаление..."
    }
  }

  setEventListener() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleRemoveSubmit(this._thisCard); //после удалить карточку
    });
    super.setEventListener();
  }
}
