let profileNameEdit = document.querySelector('.profile__edit');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let submitBtn = document.querySelector('.popup__save');
let formElement = document.querySelector ('.popup__form')
let nameInput = document.querySelector ('.popup__input_name')
let jobInput = document.querySelector ('.popup__input_desc')
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__caption');

profileNameEdit.addEventListener('click', function() {
  popup.classList.add('popup__opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

buttonClose.addEventListener('click', function() {
  popup.classList.remove('popup__opened');
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  popup.classList.remove('popup__opened');
}

formElement.addEventListener('submit', formSubmitHandler);


