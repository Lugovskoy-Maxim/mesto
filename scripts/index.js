import Card from "./Card.js";
import initialCards from "./initialCards.js";
import Popup from './Popup.js';
import {
  previewTitle,
  listElements,
  popupPreviewImage,
}
  from './Constants.js';

function handleCardClick(name, link) {
  popupPreviewImage.setAttribute('src', link);
  popupPreviewImage.setAttribute('alt', name);
  previewTitle.textContent = name;
  openPopup(popupPreview);
}

function createCard(data) { //функция для вызова класса с нужными пораметрами
  const card = new Card(data, '.cards-template', handleCardClick); // новый элемент в который засовываю элемент с именем и ссылкой, селектор для клпирования разметки, и функцию слушателя нажатия на картинку.
  const cardElement = card.generateCard(); //в переменную генерирую нужную новую карточку с значениями.
  return cardElement; //возвращаю на страницу
};

function renderElements(items) { //принимаю метод из функции
  items.forEach((item) => { //прохожу по масиву вызванному из функции
    listElements.append(createCard(item)); //создаю в нужном месте карточки использую функцию выше. (item) - ссылка и имя 1 го объекта из масива.
  });
};
renderElements(initialCards); // чудо, что работает

