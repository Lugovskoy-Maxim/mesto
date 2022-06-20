import Card from "../components/Card.js";
import initialCards from "../components/initialCards.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Sections.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "./index.css";
import {
  profileNameEdit,
  popupAddButton,
  formConfig,
  cardForm,
  profileForm,
  nameInput,
  jobInput,
} from "../Utils/constant.js";

const formValidatorProfile = new FormValidator(formConfig, profileForm);
const formValidatorCard = new FormValidator(formConfig, cardForm);
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();

const popupEdit = new PopupWithForm(".popup_type_profile", handleFormSubmitProfile);
const popupAddCard = new PopupWithForm(".popup_type_add", handleFormSubmitCard);
const popupImage = new PopupWithImage(".popup_type_photo");
const cardElement = new Section(initialCards, renderer, ".elements");

function renderer(item) {
  cardElement.insertCard(createCard(item));
}

cardElement.rendered();

function handleCardClick(title, link) {
  popupImage.openPopup(title, link);
}

function createCard(data) {
  const card = new Card(data, ".cards-template", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const userInfo = new UserInfo({
  name: ".profile__name",
  job: ".profile__caption",
  avatar: ".profile__avatar",
});

function handleFormSubmitProfile(data) {
  userInfo.setUserInfo(data);
  popupEdit.closePopup();
}

function handleFormSubmitCard(data) {
  cardElement.insertCard(createCard(data));
  popupAddCard.closePopup();
}

popupAddButton.addEventListener("click", () => {
  formValidatorCard.resetValidation();
  popupAddCard.openPopup();
});

profileNameEdit.addEventListener("click", () => {
  formValidatorProfile.resetValidation();
  popupEdit.openPopup();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
});

popupAddCard.setEventListener();
popupEdit.setEventListener();
popupImage.setEventListener();
