export default class Card {
  constructor({ title, link }, cardSelector, handleCardClick) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__title").textContent = this._title;
    this._elementImage = this._element.querySelector(".element__image");
    this._elementImage.alt = this._title;
    this._elementImage.src = this._link;
    this._setEventlistener();
    return this._element;
  }

  _delClickHandler() {
    this._element.remove();
  }

  _likeCard() {
    this._elementLike.classList.toggle("element__like_active");
  }

  _setEventlistener() {
    this._elementLike = this._element.querySelector(".element__like");
    this._elementLike.addEventListener("click", () => this._likeCard());
    this._element
      .querySelector(".element__cards-remove")
      .addEventListener("click", () => this._delClickHandler());
    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._link);
    });
  }
}
