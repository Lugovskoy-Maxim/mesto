const profileNameEdit = document.querySelector('.profile__edit');
const buttonClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const submitBtn = document.querySelector('.popup__save');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name') ;
const jobInput = document.querySelector('#job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__caption');

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

const modalWindowToggle = () => {
  popup.classList.toggle('popup_opened');
}

function openPopupProfile() {
  modalWindowToggle();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  modalWindowToggle();
}

profileNameEdit.addEventListener('click', openPopupProfile); //открыть
buttonClose.addEventListener('click', modalWindowToggle);  //закрыть
formElement.addEventListener('submit', formSubmitHandler); //сохранить


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

  return getTemplate;
}

render();


