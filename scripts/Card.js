export default class Card {
  _name;
  _link;
  _cardSelector;

  constructor(data, cardSelector, handleCardClick) {
    //data (title, link), cardSelector ('.cards-template')-можно добавлять другой шаблон
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    //клонирую элемент из разметки html.
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement; // возвращаю в DOM.
  }

  generateCard() {
    this._element = this._getTemplate(); //записываю значение _getTemplate в _element чтобы иметь доступ к ней.
    this._element.querySelector(".element__title").textContent = this._name;
    const elementImage = this._element.querySelector(".element__image");
    elementImage.alt = this._name;
    elementImage.src = this._link;
    this._setEventlistener(); //добавляю слушалки
    return this._element; // возвращаю карточку наполненую названием, изображением и слушателями на кнопках. в итоге - каточка с названием и картинкой и слушает кнопки.
  }

  _delClickHandler() {
    // удаляю элемент(карточку).
    this._element = null;
  }

  _likeCard() {
    //фиксирую царский лайк.
    this._elementLike.classList.toggle("element__like_active");
  }

  _setEventlistener() {
    this._elementLike = this._element.querySelector(".element__like");
    this._element
      .querySelector(".element__like")
      .addEventListener("click", () => this._likeCard()); //слушаю лайк.
    this._element
      .querySelector(".element__cards-remove")
      .addEventListener("click", () => this._delClickHandler()); //слушатель удаления карточки
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }
}
