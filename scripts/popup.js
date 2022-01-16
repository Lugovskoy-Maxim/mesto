let profileNameEdit = document.querySelector('.profile__edit-info-button');
let buttonClose = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');

let formElement = document.querySelector ('.popup__form')
let nameInput = document.querySelector ('.popup__input_name')//
let jobInput = document.querySelector ('.popup__input_desc')//
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__caption')
//
//function popupToggle () {
//  popup.classList.toggle('popup_opened');
//  if (popup.classList.contains('popup_opened')) {
//    nameInput.value = profileName.textContent;
//    jobInput.value = profileJob.textContent;
//  } else {
//    nameInput.value = '';
//    jobInput.value = '';
//  }}
//

//сохранение имени из попап
profileNameEdit.addEventListener('click', function()  {
  popup.classList.add('popup__opened');
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
}
formElement.addEventListener('submit', formSubmitHandler);


