let profileNameEdit = document.querySelector('.profile__edit');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let submitBtn = document.querySelector('.popup__save');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#name') ;
let jobInput = document.querySelector('#job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__caption');

function openPopupProfile() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopupButton() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  closePopupButton();
}

profileNameEdit.addEventListener('click', openPopupProfile);

buttonClose.addEventListener('click', closePopupButton);

formElement.addEventListener('submit', formSubmitHandler);


