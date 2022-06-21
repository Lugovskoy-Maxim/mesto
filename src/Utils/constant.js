const profileNameEdit = document.querySelector(".profile__edit");
const popupAddButton = document.querySelector(".profile__add");
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
  profileNameEdit,
  popupAddButton,
  formConfig,
  cardForm,
  profileForm,
  nameInput,
  jobInput,
};
