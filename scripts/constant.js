const popupPreviewImage = document.querySelector(".popup__image");
const listElements = document.querySelector(".elements");
const previewTitle = document.querySelector(".popup__image-title");
const popupPreview = document.querySelector(".popup_type_photo");
const popupAdd = document.querySelector(".popup_type_add");
const profileNameEdit = document.querySelector(".profile__edit");
const popupAddButton = document.querySelector(".profile__add");
const popupProfile = document.querySelector(".popup_type_profile");
const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__button_disable",
  inputErrorClass: "popup__field",
  errorClass: "popup__field-error",
};
const profileForm = document.forms.editProfileForm;
const cardForm = document.forms.newCardForm;
const buttonCloseProfile = document.querySelector(".popup__close-profile");
const popupForm = document.querySelector(".popup__form");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__caption");
const cardsTitleInput = document.querySelector("#title");
const cardsimageInput = document.querySelector("#link");
const buttonCloseCard = document.querySelector(".popup__close-card");
const buttonClosePreview = document.querySelector(".popup__close-image");
const formElementAdd = document.querySelector(".popup__form_add");

export {
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
};
