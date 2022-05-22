//import Popup from './Popup.js';
import Card from "./Card.js";
import initialCards from "./initialCards.js";
import FormValidator from "./FormValidator.js";
import {
  previewTitle,
  listElements,
  popupPreviewImage,
  popupPreview,
  popupAdd,
  profileNameEdit,
  popupAddButton,
  popupProfile,
  formConfig,
  cardForm,
  profileForm,
  buttonCloseProfile,
  popupForm,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  cardsTitleInput,
  cardsimageInput,
  buttonCloseCard,
  buttonClosePreview,
  formElementAdd,
} from "./const.js";

const formValidatorProfile = new FormValidator(formConfig, profileForm);
const formValidatorCard = new FormValidator(formConfig, cardForm);
// Запуск валидации
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();

function handleCardClick(name, link) {
  popupPreviewImage.setAttribute("src", link); // это нужно унести в отдельный класс попапа для карточки
  popupPreviewImage.setAttribute("alt", name); // это нужно унести в отдельный класс попапа для карточки
  previewTitle.textContent = name; // это нужно унести в отдельный класс попапа для карточки
  //const popupImage = new Popup(popupPreview);
  //popupImage.openPopup();
  openPopup(popupPreview);
}

function createCard(data) {
  //функция для вызова класса с нужными пораметрами
  const card = new Card(data, ".cards-template", handleCardClick); // новый элемент в который засовываю элемент с именем и ссылкой, селектор для копирования разметки, и функцию слушателя нажатия на картинку.
  const cardElement = card.generateCard(); //в переменную генерирую нужную новую карточку с значениями.
  return cardElement; //возвращаю на страницу
}

function renderElements(items) {
  //принимаю метод из функции
  items.forEach((item) => {
    //прохожу по масиву вызванному из функции
    listElements.append(createCard(item)); //создаю в нужном месте карточки использую функцию выше. (item) - ссылка и имя 1 го объекта из масива.
  });
}
renderElements(initialCards); // чудо =), что работает

function isOverlay(event) {
  return (
    event.target.classList.contains("popupPreview") ||
    event.target.classList.contains("popup_opened")
  );
}

function closeOverlay(event) {
  if (isOverlay(event)) {
    closePopup(event.target);
  }
}

function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscUp);
}

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
}

function handleEscUp(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscUp);
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  closePopup(popupProfile);
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const data = { name: cardsTitleInput.value, link: cardsimageInput.value };
  console.log(data);
  closePopup(popupAdd);
  formElementAdd.reset();
  formValidatorCard.resetValidation(); // я неуспел запушить это перед ревью, лучше выключать кномпу или перезапускать валидацию?
  listElements.prepend(createCard(data));
}

popupPreview.addEventListener("click", closeOverlay);
popupAdd.addEventListener("click", closeOverlay);
popupProfile.addEventListener("click", closeOverlay);
formElementAdd.addEventListener("submit", handleFormSubmitAdd);
buttonClosePreview.addEventListener("click", () => closePopup(popupPreview));
popupAddButton.addEventListener("click", () => openPopup(popupAdd));
buttonCloseCard.addEventListener("click", () => closePopup(popupAdd));
buttonCloseProfile.addEventListener("click", () => closePopup(popupProfile));
popupForm.addEventListener("submit", handleFormSubmitProfile);
profileNameEdit.addEventListener("click", openPopupProfile);
