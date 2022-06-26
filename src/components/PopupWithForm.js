import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector, handleFormSubmit);
    this._popupForm = this._popupContainer.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._submitButton = this._popupForm.querySelector('.popup__save');
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

  loading(status, text){
    if(!status) {
      this._submitButton.textContent = text;
    }else {
      this._submitButton.textContent = "Сохранение..."
    }
  }

  setEventListener() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._inputValues());
    });
    super.setEventListener();
  }
}
