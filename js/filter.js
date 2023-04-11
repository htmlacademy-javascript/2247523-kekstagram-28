import { renderPhotoList } from './render-photo-list.js';
import { posts } from './data.js';
import { debounce } from './util.js';
const MAX_RANDOM_POSTS = 10;
const filtersButton = document.querySelectorAll('.img-filters__button');

const removePictures = () => {
  const pictureElements = document.querySelectorAll('.picture');
  const pictures = Array.from(pictureElements);
  pictures.forEach((element) => {
    element.remove();
  });
};

const sortRandomly = (array) => {
  const comparePostsRandom = () => Math.random() - 0.5;
  return array
    .slice()
    .sort(comparePostsRandom)
    .slice(0, MAX_RANDOM_POSTS);
};

const sortByComments = (array) => {
  const comparePostsComments = (pictureA, pictureB) =>
    pictureB.comments.length - pictureA.comments.length;
  return array
    .slice()
    .sort(comparePostsComments);
};

const toggleFilterButton = (button) => {
  const buttons = Array.from(filtersButton);
  buttons.forEach((element) =>
    element.classList.remove('img-filters__button--active')
  );
  button.classList.add('img-filters__button--active');
};

const render = (type) => {
  switch (type) {
    case 'filter-default':
      renderPhotoList(posts);
      break;
    case 'filter-discussed':
      renderPhotoList(sortByComments(posts));
      break;
    case 'filter-random':
      renderPhotoList(sortRandomly(posts));
      break;
    default:
      renderPhotoList(posts);
  }
};

const renderDebounce = debounce((buttonEl) => {
  removePictures();
  render(buttonEl.id);
  toggleFilterButton(buttonEl);
});

document.querySelector('.img-filters__form').addEventListener('click', (evt) => {
  renderDebounce(evt.target);
});
