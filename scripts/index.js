import cardsJs from './cards.js';
const profileNameEdit = document.querySelector('.profile__edit');
const buttonCloseProfile = document.querySelector('.popup__close-profile');
const popupProfile = document.querySelector('.popup_type_profile');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name') ;
const jobInput = document.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__caption');
const cardsTitleInput = document.querySelector('#title');
const cardsimageInput = document.querySelector('#link');
const popupAdd = document.querySelector('.popup__type_add');
const popupAddButton = document.querySelector('.profile__add');
const buttonCloseCard = document.querySelector('.popup__close-card');
const listElements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.cards-template');
const popupPreview = document.querySelector('.popup__type_photo');
const popupPreviewImage = document.querySelector('.popup__image');
const buttonClosePreview = document.querySelector('.popup__close-image');
const previewTitle = document.querySelector('.popup__image-title');
const formElementAdd = document.querySelector('.popup__form_add');

profileNameEdit.addEventListener('click', openPopupProfile); //открыть
buttonCloseProfile.addEventListener('click', function() {closePopup(popupProfile)});
formElement.addEventListener('submit', formSubmitHandler); //сохранить
function openPopup(popupName) {
  popupName.classList.add('popup_opened');
}
function closePopup(popupName){
  popupName.classList.remove('popup_opened');
}
function openPopupProfile() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  closePopup(popupProfile);
}

popupAddButton.addEventListener('click', () => {openPopup(popupAdd)});
buttonCloseCard.addEventListener('click', () => {closePopup(popupAdd)});
formElementAdd.addEventListener('submit', formSubmitHandlerAdd);
buttonClosePreview.addEventListener('click', function () { closePopup(popupPreview) });
cardsJs(initialCards).forEach(function (card) {
  renderImage(card.name, card.link);
});

function renderImage(names, links) {
  const cardsResult = getCard(names, links);
  listElements.prepend(cardsResult);
}
function formSubmitHandlerAdd(evt) {
  evt.preventDefault();
  addCard(cardsTitleInput.value, cardsimageInput.value);
  formElementAdd.reset();
  closePopup();
}
function addCard(name, link) {
  const newCards = getCard(name, link);
  listElements.prepend(newCards);
}
function getCard(name, link) {
  const getTemplate = cardsTemplate.content.cloneNode(true);
  getTemplate.querySelector('.element__title').textContent = name;
  getTemplate.querySelector('.element__image').alt = name;
  getTemplate.querySelector('.element__image').src = link;
  getTemplate.querySelector('.element__cards-remove').addEventListener('click', removeCard);
  getTemplate.querySelector('.element__image').addEventListener('click', function () {
    previewImage(name, link);
  });
  getTemplate.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  return getTemplate;
}
function removeCard(evt) {
  const element = evt.target.closest('.element');
  element.remove();
};
function previewImage(name, link) {
  popupPreviewImage.setAttribute('src', link);
  popupPreviewImage.setAttribute('alt', name);
  previewTitle.textContent = name;
  openPopup(popupPreview);
};





