import { posts } from './data.js';
import { renderPhotoWindow, COMMENTS_TO_SHOW } from './render-photo-window.js';


const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');

const openPopup = (evt) => {
  const thumbnail = evt.target.closest('.picture');
  if(!thumbnail){
    return;
  }

  const pictureElements = document.querySelectorAll('.picture');
  evt.preventDefault();
  const pictures = Array.from(pictureElements);
  const index = pictures.indexOf(thumbnail);

  if (index >= 0) {
    renderPhotoWindow(posts[index]);
  }

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closePopup = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

document.querySelector('.pictures').addEventListener('click', openPopup);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
});

document.querySelector('.big-picture__cancel').addEventListener('click', closePopup);

document.querySelector('.comments-loader').addEventListener('click', () => {
  const socialComments = document.querySelector('.social__comments');
  const hiddenCommentsEl = socialComments.querySelectorAll('.hidden');
  const hiddenCommentsArr = Array.from(hiddenCommentsEl);
  let commentToShow = socialComments.children.length - hiddenCommentsEl.length;
  hiddenCommentsArr.forEach((element, index) => {
    if (index + 1 <= COMMENTS_TO_SHOW) {
      element.classList.remove('hidden');
      commentToShow += 1;
    }
  });
  document.querySelector('.social__comment-count').innerHTML = `${commentToShow} из <span class="comments-count">${socialComments.children.length}<span> комментариев`;
});

