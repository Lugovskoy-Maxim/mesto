import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Sections.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";
import PopupRemove from "../components/PopupRemove.js";
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
  popupRemoveCardButton,
} from "../Utils/constant.js";
const formValidatorAvatar = new FormValidator(formConfig, avatarForm);
const formValidatorProfile = new FormValidator(formConfig, profileForm);
const formValidatorCard = new FormValidator(formConfig, cardForm);
const popupEdit = new PopupWithForm(
  ".popup_type_profile",
  handleFormSubmitProfile
);
const popupRemoveCard = new PopupRemove(
  ".popup_type_remove",
  handleRemoveCardSubmit
);
const popupAvatar = new PopupWithForm(
  ".popup_type_avatar",
  handleFormSubmitAvatar
);
const userInfo = new UserInfo({
  name: profileName,
  job: profileAbout,
  avatar: profileAvatar,
});
const popupAddCard = new PopupWithForm(".popup_type_add", handleFormSubmitCard);
const popupImage = new PopupWithImage(".popup_type_photo");
const cardElement = new Section(renderer, ".elements");
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-43",
  headers: {
    authorization: "73b17bd9-3a97-41a4-b24d-ab14544edf37",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserData(), api.getInitialCards()])
  .then((data) => {
    userInfo.setUserInfo({
      name: data[0].name,
      job: data[0].about,
    });
    userInfo.setUserAvatar(data[0].avatar);
    getUserId(data[0]._id);
    cardElement.rendered(data[1]);
  })
  .catch((err) => {
    console.log(`ошибка ${err}`);
  });

let userId = "";
function getUserId(id) {
  return (userId = id);
}

function renderer(item) {
  cardElement.insertCard(createCard(item));
}

function handleCardClick(title, link) {
  popupImage.openPopup(title, link);
}

function createCard(data) {
  let card = new Card(
    data,
    ".cards-template",
    handleCardClick,
    userId,
    handleRemoveCardClick,
    handleLikeCardClick
  );
  const cardElement = card.generateCard();
  return cardElement;
}

function renderLoading(statusLoading, popupName, text) {
  if (!statusLoading) {
    document
      .querySelector(popupName)
      .querySelector(".popup__save").textContent = text;
  } else {
    document
      .querySelector(popupName)
      .querySelector(".popup__save").textContent = "Сохранение ...";
  }
}

function handleLikeCardClick(data) {
  if (this._element.querySelector(".element__like_active")) {
    api
      .deleteLikeCard(data._id)
      .then((res) => {
        this.minusLikesLenght(res.likes.length);
      })
      .catch((err) => {
        console.log(`ошибка ${err}`);
      });
  } else {
    api
      .setLikeCard(data._id)
      .then((res) => {
        this.plusLikesLenght(res.likes.length);
      })
      .catch((err) => {
        console.log(`ошибка ${err}`);
      });
  }
}

function handleRemoveCardClick(thisCard) {
  popupRemoveCard.openPopup(thisCard);
}

function handleRemoveCardSubmit(thisCard) {
  // передать готовую карточку и взять id
  renderLoading(true, ".popup_type_remove", "Да");
  api
    .deleteCard(thisCard._cardId)
    .then(() => {
      thisCard.deleteCard();
    })
    .then(() => {
      popupRemoveCard.closePopup();
    })
    .catch((err) => {
      console.log(`ошибка ${err}`);
    })
    .finally(() => {
      renderLoading(false, ".popup_type_remove", "Да");
    });
}

function handleFormSubmitCard(data) {
  renderLoading(true, ".popup_type_add", "Сохранить");
  api
    .addCard(data)
    .then((res) => {
      cardElement.addNewCard(createCard(res));
      popupAddCard.closePopup();
    })
    .catch((err) => {
      console.log(`ошибка ${err}`);
    })
    .finally(() => {
      renderLoading(false, ".popup_type_add", "Сохранить");
    });
}

function handleFormSubmitProfile(data) {
  renderLoading(true, ".popup_type_profile", "Сохранить");
  api
    .setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      profileName.textContent = res.name;
      profileAbout.textContent = res.about;
      popupEdit.closePopup();
    })
    .catch((err) => {
      console.log(`ошибка ${err}`);
    })
    .finally(() => {
      renderLoading(false, ".popup_type_profile", "Сохранить");
    });
}

function handleFormSubmitAvatar(data) {
  renderLoading(true, ".popup_type_avatar", "Сохранить");
  api
    .setUserAvatar(data)
    .then((res) => {
      userInfo.setUserAvatar(res);
      profileAvatar.src = res.avatar;
      popupEdit.closePopup();
    })
    .catch((err) => {
      console.log(`ошибка ${err}`);
    })
    .finally(() => {
      renderLoading(false, ".popup_type_avatar", "Сохранить");
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
popupRemoveCard.setEventListener();
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
formValidatorAvatar.enableValidation();
