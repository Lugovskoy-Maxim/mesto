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
const popupAdd = document.querySelector('.popup_type_add');
const popupAddButton = document.querySelector('.profile__add');
const buttonCloseCard = document.querySelector('.popup__close-card');
const listElements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.cards-template');
const popupPreview = document.querySelector('.popup_type_photo');
const popupPreviewImage = document.querySelector('.popup__image');
const buttonClosePreview = document.querySelector('.popup__close-image');
const previewTitle = document.querySelector('.popup__image-title');
const formElementAdd = document.querySelector('.popup__form_add');



// закрыте по оверлею
popupPreview.addEventListener("click", closeOverlay);
popupAdd.addEventListener("click", closeOverlay);
popupProfile.addEventListener("click", closeOverlay);


function isOverlay(event) {
	return event.target.classList.contains("popupPreview") || event.target.classList.contains("popup_opened");
}


function closeOverlay(event) {
	if (isOverlay(event)) {
		closePopup(event.target);
	}
}


// закрыте по ESC
function openPopup(popupName) {
  popupName.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscUp);
}

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
}

function handleEscUp(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector(".popup_opened")
    closePopup(openedPopup);
  }
}
//

profileNameEdit.addEventListener('click', openPopupProfile);

function closePopup(popupName){
  popupName.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscUp);
}

buttonCloseProfile.addEventListener('click', () => {closePopup(popupProfile)});
formElement.addEventListener('submit', handleFormSubmitProfile);

function handleFormSubmitProfile (evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  closePopup(popupProfile);
}

popupAddButton.addEventListener('click', () => {openPopup(popupAdd)});
buttonCloseCard.addEventListener('click', () => {closePopup(popupAdd)});
function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  addCard(cardsTitleInput.value, cardsimageInput.value);
  closePopup(popupAdd);
  formElementAdd.reset();
}

formElementAdd.addEventListener('submit', handleFormSubmitAdd);
buttonClosePreview.addEventListener('click', () => { closePopup(popupPreview) });

initialCards.forEach(function (card) {
  renderImage(card.name, card.link);
});

function renderImage(names, links) {
  const cardsResult = getCard(names, links);

  listElements.prepend(cardsResult);
}

function addCard(name, link) {
  const newCard = getCard(name, link);

  listElements.prepend(newCard);
}

function removeCard(evt) {
  evt.target.closest('.element').remove();
}

function openPreviewImage(name, link) {
  popupPreviewImage.setAttribute('src', link);
  popupPreviewImage.setAttribute('alt', name);
  previewTitle.textContent = name;
  openPopup(popupPreview);
}

function getCard(name, link) {
  const templateCard = cardsTemplate.content.cloneNode(true);

  templateCard.querySelector('.element__title').textContent = name;
  const elementImage = templateCard.querySelector('.element__image');

  elementImage.alt = name;
  elementImage.src = link;
  templateCard.querySelector('.element__cards-remove').addEventListener('click', removeCard);
  templateCard.querySelector('.element__image').addEventListener('click', () => {
    openPreviewImage(name, link);
  });
  templateCard.querySelector('.element__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });

  return templateCard;
}
