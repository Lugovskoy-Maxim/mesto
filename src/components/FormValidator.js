export default class FormValidator {
  constructor(data, form) {
    this._data = data;
    this._form = form;
    this._buttonElement = this._form.querySelector(
      this._data.submitButtonSelector
    );
    this._inputList = Array.from(
      this._form.querySelectorAll(this._data.inputSelector)
    );
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButton() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._data.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._data.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled", false);
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._data.inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(this._data.inputErrorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  resetValidation() {
    this._toggleButton();
    this._inputList.forEach((inputELement) => {
      this._hideInputError(inputELement);
    });
  }

  enableValidation() {
    this._toggleButton(this._inputList);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButton();
      });
    });
  }
}
