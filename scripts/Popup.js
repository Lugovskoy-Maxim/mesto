export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscUp = handleEscUp;
  }

  openPopup() {
    this._popupSelector.classList.add('popup_opened');
    docement.addEventListener('keydown', this._handleEscUp);
  }

  closePopup() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscUp);
  }

  _handleFormSubmit() {

  }

  _handleEscUp(event) {
    if (event.key === 'Escape') {
      this.closePopup();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  _isOverlay(event) {
    return event.target.classList.contains("popupPreview") || event.target.classList.contains("popup_opened");
  }

  _closeOverlay(event) {
    if (this._isOverlay(event)) {
      this.closePopup(event.target);
    }

  }
}