import { getData } from './fetch.js';
import { renderPhotoList } from './render-photo-list.js';

let posts = [];

getData().then((response) => {
  renderPhotoList(response);
  posts = response;
});

export { posts };
