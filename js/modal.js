import { generatePosts } from './data.js';
import { renderPhotoWindow } from './render-photo-window.js';

const openModal = ()=>{
  renderPhotoWindow(generatePosts()[0])
  document.querySelector('.big-picture').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};
openModal()

// document.querySelector('.pictures').addEventListener('click',openModal);



