const popupPreview = document.querySelector(".popup_type_photo");
const popupAdd = document.querySelector(".popup_type_add");
const profileNameEdit = document.querySelector(".profile__edit");
const popupAddButton = document.querySelector(".profile__add");
const popupProfile = document.querySelector(".popup_type_profile");
const profileForm = document.forms.editProfileForm;
const cardForm = document.forms.newCardForm;
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__button_disable",
  inputErrorClass: "popup__field",
  errorClass: "popup__field-error",
};

export {
  popupPreview,
  popupAdd,
  profileNameEdit,
  popupAddButton,
  popupProfile,
  formConfig,
  cardForm,
  profileForm,
  nameInput,
  jobInput,
};
