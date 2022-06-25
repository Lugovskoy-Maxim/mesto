export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    userId,
    handleRemoveCardClick,
    handleLikeCardClick
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._owner = data.owner;
    this._handleRemoveCardCkick = handleRemoveCardClick;
    this._cardId = data._id;
    this._handleLikeCardClick = handleLikeCardClick;
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
    this._element.querySelector(".element__title").textContent = this._name;
    this._elementImage = this._element.querySelector(".element__image");
    this._likesLenghtCounter = this._element.querySelector(
      ".element__like-counter"
    );
    this._elementImage.alt = this._name;
    this._elementImage.src = this._link;
    this._setEventlistener();
    this._handleRemoveButton();
    this._handlelikeCard();
    this._likesLenghtCounter.textContent = this._likes.length;
    return this._element;
  }

  _handleRemoveButton() {
    if (this._owner._id !== this._userId) {
      this._element
        .querySelector(".element__cards-remove")
        .classList.add("element__cards-remove_hidden");
    }
  }

  _handlelikeCard() {
    this._likes.forEach((item) => {
      if (item._id === this._userId) {
        this._elementLike.classList.add("element__like_active");
      }
    });
  }

  plusLikesLenght(counter) {
    this._elementLike.classList.add("element__like_active");
    this._element.querySelector(".element__like-counter").textContent = counter;
  }
  minusLikesLenght(counter) {
    this._elementLike.classList.remove("element__like_active");
    this._element.querySelector(".element__like-counter").textContent = counter;
  }
  deleteCard() {
    this._element.remove();
  }

  _setEventlistener() {
    this._elementLike = this._element.querySelector(".element__like");
    this._elementLike.addEventListener("click", () =>
      this._handleLikeCardClick(this._data)
    );
    this._element
      .querySelector(".element__cards-remove")
      .addEventListener("click", () => {
        this._handleRemoveCardCkick(this._cardId);
      });
    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
