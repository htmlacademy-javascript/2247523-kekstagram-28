import { generatePosts } from './data.js';
import { renderPhotoList } from './render-photo-list.js';
import './modal.js';
renderPhotoList(generatePosts());

