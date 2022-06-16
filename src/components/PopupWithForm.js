import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupSelector.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._setEventListener = this._setEventListener();
  }

  openPopup() {
    super.openPopup();
  }

  closePopup() {
    super.closePopup();

  }

  _inputValues() {
    const listValue = {};
    this._inputList.forEach((inputItem) => {
      listValue[inputItem.name] = inputItem.value;
    });
    return listValue;
  }

  _setEventListener() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._inputValues());
    });
  }
}
