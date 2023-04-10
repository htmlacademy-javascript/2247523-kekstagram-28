import { getData } from './fetch.js';
import { renderPhotoList } from './render-photo-list.js';

let posts = [];

getData().then((response) => {
  renderPhotoList(response);
  posts = response;
  document.querySelector('.img-filters--inactive').classList.remove('img-filters--inactive');
});

export { posts };
