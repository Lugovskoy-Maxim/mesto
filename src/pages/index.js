import Card from "../components/Card.js";
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
  profileEditAvatar,
  profileName,
  profileAbout,
  profileAvatar,
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
const popupAvatar = new PopupWithForm(".popup_type_avatar", handleFormSubmitAvatar);
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
  name: profileName,
  job: profileAbout,
  avatar: profileAvatar,
});



function handleFormSubmitProfile(data) {
  renderLoading(true, ".popup_type_profile", 'Сохранить');
  api.setUserInfo(data)
  .then ((res) => {
    userInfo.setUserInfo(res);
    return res.json();
  })
  .then ((data) => {
    profileName.textContent = data.name;
    profileAbout.textContent = data.about;
    popupEdit.closePopup();
  })
  .catch((err) => {
    console.log(`ошибка ${err}`);
  })
  .finally(() => {
    renderLoading(false, ".popup_type_profile", 'Сохранить');
  });

}

function renderLoading (statusLoading, popupName, text) {
  if (!statusLoading) {
    document.querySelector(popupName).querySelector('.popup__save').textContent = text;
  } else {
    document.querySelector(popupName).querySelector('.popup__save').textContent = "Сохранение...";
  };
};

function handleFormSubmitCard(data) {
  cardElement.insertCard(createCard(data));
  popupAddCard.closePopup();
}



function handleFormSubmitAvatar(data) {
  renderLoading(true, ".popup_type_avatar", 'Сохранить');
  api.setUserAvatar(data)
  .then ((res) => {
    userInfo.setUserAvatar(res);
    return res.json();
  })
  .then ((data) => {
    profileAvatar.src = data.avatar;
    popupEdit.closePopup();
  })
  .catch((err) => {
    console.log(`ошибка ${err}`);
  })
  .finally(() => {
    renderLoading(false, ".popup_type_avatar", 'Сохранить');
  });

  popupAvatar.closePopup();
}

profileEditAvatar.addEventListener("click", () => {
  formValidatorAvatar.resetValidation();
  popupAvatar.openPopup();
});


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
popupAvatar.setEventListener();
