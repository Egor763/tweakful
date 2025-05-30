const headlineOpenPopupButton = document.querySelector('.headline__button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.close__button');

function openPopup() {
  popup.classList.add('popup__active');
}

function closePopup() {
  popup.classList.remove('popup__active');
}

headlineOpenPopupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
