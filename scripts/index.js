const profileNameEdit = document.querySelector('.profile__edit');
const buttonCloseProfile = document.querySelector('.popup__close-profile');
const popupProfile = document.querySelector('.popup_profile');
const submitBtn = document.querySelector('.popup__save');
const submitCardsBtn = document.querySelector('.popup__save-card');
const formElement = document.querySelector('.popup__form');
const formElementADD = document.querySelector('.popup__form_add');
const nameInput = document.querySelector('#name') ;
const jobInput = document.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__caption');
const cardsTitleInput = document.querySelector('#title');
const cardsimageInput = document.querySelector('#link');
const popupAdd = document.querySelector('.popup_add');
const popupAddButton = document.querySelector('.profile__add')
const buttonCloseCard = document.querySelector('.popup__close-card');
const like = document.querySelector('.element__like');
const titleInput = document.querySelector('#title') ;
const linkInput = document.querySelector('#link');
const listElements = document.querySelector ('.elements');
const cardsTemplate = document.querySelector ('.cards-template');
const popupPreview = document.querySelector ('.popup__photo');
const popupPreviewImage = document.querySelector ('.popup__image');
const buttonClosePreview = document.querySelector('.popup__close-image');
const previewTitle = document.querySelector('.popup__image-title');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
profileNameEdit.addEventListener('click', openPopupProfile); //открыть
buttonCloseProfile.addEventListener('click', function() {closePopup(popupProfile)});
formElement.addEventListener('submit', formSubmitHandler); //сохранить
popupAddButton.addEventListener('click', openPopupAdd);
buttonCloseCard.addEventListener('click', closePopupAdd);
formElementADD.addEventListener('submit', formSubmitHandlerAdd);
buttonClosePreview.addEventListener('click', function() {closePopup(popupPreview)});
initialCards.forEach(function(card){
  renderImage(card.name, card.link);
})
function renderImage(names, links){
  const cardsResult = getCard(names, links);
  listElements.prepend(cardsResult);
}
function openPopup(popupName) {
  popupName.classList.add('popup_opened');
}
function closePopup(popupName){
  popupName.classList.remove('popup_opened');
}
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}
function openPopupProfile() {
  popupName =  popupProfile;
  openPopup(popupName);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  popupName =  popupProfile;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  openPopup(popupName);
}
function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  addCard(cardsTitleInput.value, cardsimageInput.value);
  formElementADD.reset();
}
function addCard(name, link){
  const newCards = getCard(name, link);
  listElements.prepend(newCards);
}
function getCard(name, link) {
  const getTemplate = cardsTemplate.content.cloneNode(true);
  getTemplate.querySelector('.element__title').textContent = name;
  getTemplate.querySelector('.element__image').alt = name;
  getTemplate.querySelector('.element__image').src = link;
  getTemplate.querySelector('.element__cards-remuve').addEventListener('click', removeCard);
  getTemplate.querySelector('.element__image').addEventListener('click', function () {
    previewImage (name, link);
  });
  getTemplate.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  return getTemplate;
}
function removeCard (evt) {
  const element = evt.target.closest('.element');
  element.remove();
};
function previewImage (name, link) {
  popupPreviewImage.setAttribute('src',link);
  popupPreviewImage.setAttribute('alt', name);
  previewTitle.textContent = name;
  popupName = popupPreview;
  openPopup(popupName);
};






