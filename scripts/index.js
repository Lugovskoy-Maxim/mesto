const profileNameEdit = document.querySelector('.profile__edit');
const buttonCloseProfile = document.querySelector('.popup__close');
const popupProfile = document.querySelector('.popup_profile');
const submitBtn = document.querySelector('.popup__save');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name') ;
const jobInput = document.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__caption');

const popupAdd = document.querySelector('.popup_add');
const popupAddButton = document.querySelector('.profile__add')
const buttonCloseCard = document.querySelector('.popup__close-card');
const like = document.querySelector('.element__like');
const titleInput = document.querySelector('#title') ;
const linkInput = document.querySelector('#link');

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

function openPopup(popupName) {
  popupName.classList.add('popup_opened');
}

function closePopup(popupName){
  popupName.classList.remove('popup_opened');
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

profileNameEdit.addEventListener('click', openPopupProfile); //открыть
buttonCloseProfile.addEventListener('click', function() {closePopup(popupProfile)});
formElement.addEventListener('submit', formSubmitHandler); //сохранить

popupAddButton.addEventListener('click', openPopupAdd);
buttonCloseCard.addEventListener('click', closePopupAdd);

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}



////////// выводит карточки из масива
const listElements = document.querySelector ('.elements');
const cardsTemplate = document.querySelector ('.cards-template');

function render() {
  const html = initialCards.map(getCard);
  listElements.append(...html);
}

function getCard(item) {
  const getTemplate = cardsTemplate.content.cloneNode(true);

  const titleCard = getTemplate.querySelector('.element__title');
  titleCard.textContent = item.name;

  const ImageCard = getTemplate.querySelector('.element__image');
  ImageCard.src = item.link;

  getTemplate.querySelector('.element__like').addEventListener('click', function (item) {
    item.target.classList.toggle('element__like_active');
  });

  return getTemplate;
}




render();


///








