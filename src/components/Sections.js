export default class Section {
  constructor(data, renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._data = data;
  }

  rendered() {
    this._data.forEach((item) => {
      const cardElement = this._renderer(item);
      this.insertCard(cardElement);
    });
  }

  insertCard(cardElement) {
    this._container.prepend(cardElement);
  }
}
