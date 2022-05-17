export default class FormValidator {
  _data; //config
  _form; //formElement

  constructor(data, form) {
    this._data = data;
    this._form = form;

  }

  _hasInvalidInput() { // проверка валидности инпута
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _showInputError(formElement) { //отображение ошибок в инпуте
    const errorElement = this._form.querySelector(`#${formElement.id}-error`);
    formElement.classList.add(this._data.inputErrorClass);
    errorElement.textContent = formElement.errorMessage;
    errorElement.classList.add(this._data.inputErrorClass);
  }

  _hideInputError() { //скрытие ошибок при прохождении валидации

  }

  _toggleButtonStatus() { //переключение состояния кнопки
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._data.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._data.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', false);
    }
  }




  enableValidation() { //проверка валидности
    const formList = Array.from(this._form.querySelectorAll(this._data.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        this._toggleButtonState();
      });
      setEventListeners(formElement, config);
    });
  }

}