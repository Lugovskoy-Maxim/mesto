import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector, handleFormSubmit);
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  openPopup() {
    super.openPopup();
  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }

  _inputValues() {
    const listValue = {};
    this._inputList.forEach((inputItem) => {
      listValue[inputItem.name] = inputItem.value;
    });
    return listValue;
  }

  setEventListener() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._inputValues());
    });
    super.setEventListener();
  }
}
