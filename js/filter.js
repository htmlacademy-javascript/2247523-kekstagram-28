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

document.querySelector('#filter-default').addEventListener('click', (evt) => {
  const renderDefault = debounce(() => {
    toggleFilterButton(evt.target);
    removePictures();
    renderPhotoList(posts);
  }
  );
  renderDefault();
});

document.querySelector('#filter-random').addEventListener('click', (evt) => {
  const renderRandom = debounce(() => {
    toggleFilterButton(evt.target);
    removePictures();
    renderPhotoList(sortRandomly(posts));
  }
  );
  renderRandom();
});

document.querySelector('#filter-discussed').addEventListener('click', (evt) => {
  const renderDiscussed = debounce(() => {
    toggleFilterButton(evt.target);
    removePictures();
    renderPhotoList(sortByComments(posts));
  }
  );
  renderDiscussed();
});

