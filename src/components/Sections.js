export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  rendered(data) {
    data.forEach((item) => {
      this._renderer(item);
    });
  }

  insertCard(cardElement) {
    this._container.append(cardElement);
  }

  addNewCard(cardElement){
    this._container.prepend(cardElement);
  }
}
