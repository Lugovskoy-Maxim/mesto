export default class Section {
  constructor(data, renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._data = data;
  }

  rendered() {
    this._data.forEach((item) => {
      this._renderer(item);
    });
  }

  insertCard(cardElement) {
    this._container.prepend(cardElement);
  }
}
