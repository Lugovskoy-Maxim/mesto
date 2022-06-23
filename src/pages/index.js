import Card from "../components/Card.js";
//import initialCards from "../components/initialCards.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Sections.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";
import "./index.css";
import {
  profileNameEdit,
  popupAddButton,
  formConfig,
  cardForm,
  profileForm,
  nameInput,
  jobInput,
  avatarForm,
} from "../Utils/constant.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '73b17bd9-3a97-41a4-b24d-ab14544edf37',
    'Content-Type': 'application/json'
  }
});


Promise.all([api.getUserData(), api.getInitialCards()])
 .then((data)=>{
    userInfo.setUserInfo({
     name: data[0].name,
     job: data[0].about
    });
    console.log(data[0]._id);
    userInfo.setUserAvatar(data[0].avatar);
    getUserId(data[0]._id);
    cardElement.rendered(data[1]);
 })
 .catch((err)=>{
  console.log(`ошибка ${err}`); ;
})


function getUserId(id) { //передать в карточку что бы убрать корзину
  const userToken = id;
};










const formValidatorAvatar = new FormValidator(formConfig, avatarForm);
const formValidatorProfile = new FormValidator(formConfig, profileForm);
const formValidatorCard = new FormValidator(formConfig, cardForm);
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
formValidatorAvatar.enableValidation();

const popupEdit = new PopupWithForm(
  ".popup_type_profile",
  handleFormSubmitProfile
);
const popupAddCard = new PopupWithForm(".popup_type_add", handleFormSubmitCard);
const popupImage = new PopupWithImage(".popup_type_photo");
const cardElement = new Section(renderer, ".elements");

function renderer(item) {
  cardElement.insertCard(createCard(item));
}

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
