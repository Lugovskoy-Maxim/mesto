export default class Popup {
  _popupSelector;

  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this); // нашел в гугле, как работает не совсем понял, но работает. Я делал стрелочные функции но не получилось)
    this._closeOverlay = this._closeOverlay.bind(this);
  }

  openPopup() {
    this._popupSelector.classList.add('popup_opened');
    this._setEventListener();
  }

  closePopup() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
    this._popupSelector.removeEventListener('click', this._closeOverlay);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.closePopup();
  }
}

  _isNotModal(e) {
    return e.target.classList.contains("popupPreview") || e.target.classList.contains("popup_opened") || e.target.classList.contains("popup__close");
  }

  _closeOverlay(e) {
    if (this._isNotModal(e)) {
      this.closePopup();
    }
  }

  _setEventListener() {
    document.addEventListener('keyup',  this._handleEscClose);
    this._popupSelector.addEventListener('click', this._closeOverlay);
  }

}
