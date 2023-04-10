import { posts } from './data.js';
import { renderPhotoWindow, COMMENTS_TO_SHOW } from './render-photo-window.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');

const closePopup = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const closeByEsc = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
    document.removeEventListener('keydown', closeByEsc);
  }
};

const openPopup = (evt) => {
  const thumbnail = evt.target.closest('.picture');
  if (!thumbnail) {
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
  bigPicture.querySelector('.comments-loader').classList.remove('hidden');

  document.addEventListener('keydown', closeByEsc);
};

document.querySelector('.pictures').addEventListener('click', openPopup);

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  document.removeEventListener('keydown', closeByEsc);
  closePopup();
});

document.querySelector('.comments-loader').addEventListener('click', (evt) => {
  const socialComments = document.querySelector('.social__comments');
  const hiddenCommentsEl = socialComments.querySelectorAll('.hidden');
  const hiddenCommentsArr = Array.from(hiddenCommentsEl);
  const commentsCount = socialComments.children.length;
  let commentToShow = commentsCount - hiddenCommentsEl.length;
  hiddenCommentsArr.forEach((element, index) => {
    if (index + 1 <= COMMENTS_TO_SHOW) {
      element.classList.remove('hidden');
      commentToShow += 1;
    }
  });
  if (commentToShow === commentsCount) {
    evt.target.classList.add('hidden');
  }
  document.querySelector('.social__comment-count').innerHTML = `${commentToShow} из <span class="comments-count">${commentsCount}<span> комментариев`;

});
