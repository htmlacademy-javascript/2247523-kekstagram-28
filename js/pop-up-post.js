import { posts } from './data.js';
import { renderPhotoWindow } from './render-photo-window.js';


const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');

const openPopup = (evt) => {
  const pictureElements = document.querySelectorAll('.picture');

  evt.preventDefault();
  const parentElement = evt.target.parentElement;
  const pictures = Array.from(pictureElements);
  const index = pictures.indexOf(parentElement);

  if (index >= 0) {
    renderPhotoWindow(posts[index]);
  }

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

document.querySelector('.pictures').addEventListener('click', openPopup);

const closePopup = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};


document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
});

document.querySelector('.big-picture__cancel').addEventListener('click', closePopup);
