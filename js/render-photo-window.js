const createComment = (comment) => {


  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');
  commentElement.innerHTML = `<img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35"> <p class="social__text">${comment.message}</p>`;
  return commentElement;
};

export const renderPhotoWindow = (photo) => {
  const bigPicture = document.querySelector('.big-picture');


  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');//строки 18-19 потом удалить,с ними мы разберёмся позже, в другом домашнем задании.


  const comments = bigPicture.querySelector('.social__comments');
  comments.innerHTML = '';
  photo.comments.forEach((element) => {
    comments.appendChild(createComment(element));
  });
};





// 4.4. При нажатии на любую из миниатюр, показывается блок .big-picture, содержащий полноэкранное изображение с количеством лайков и комментариев.
//  Элементу body задаётся класс modal-open. Данные, описывающие изображение, должны подставляться в соответствующие элементы в разметке.

// 4.5. Выход из полноэкранного режима просмотра фотографии осуществляется либо нажатием на иконку крестика .big-picture__cancel
// в правом верхнем углу блока .big-picture, либо нажатием на клавишу Esc. У элемента body удаляется класс modal-open.

// После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле.
// При закрытии окна не забудьте удалить этот класс.

// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

// Подключите модуль в проект.
