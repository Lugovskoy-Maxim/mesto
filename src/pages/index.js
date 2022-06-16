import Card from "../components/Card.js";
import initialCards from "../components/initialCards.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Sections.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
import {
  popupAdd,
  profileNameEdit,
  popupAddButton,
  popupProfile,
  formConfig,
  cardForm,
  profileForm,
  nameInput,
  jobInput,
} from "../components/constant.js";

const formValidatorProfile = new FormValidator(formConfig, profileForm);
const formValidatorCard = new FormValidator(formConfig, cardForm);
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();

const popupEdit = new PopupWithForm(popupProfile, handleFormSubmitProfile);
const popupAddCard = new PopupWithForm(popupAdd, handleFormSubmitCard);

const generateCard = new Section(initialCards, createCard, ".elements");
generateCard.rendered();

function createCard(data) {
  const card = new Card(data, ".cards-template"); //handleCardClick(name, link)
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
  generateCard.insertCard(createCard(data));
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
