const createComment = (comment) => {

  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const imgElement = document.createElement('img');
  imgElement.classList.add('social__picture');
  imgElement.src = comment.avatar;
  imgElement.alt = comment.name;
  imgElement.width = 35;
  imgElement.height = 35;

  commentElement.appendChild(imgElement);

  const pElement = document.createElement('p');
  pElement.classList.add('social__text');
  pElement.textContent = comment.message;

  commentElement.appendChild(pElement);

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

  while (comments.firstChild) {
    comments.removeChild(comments.firstChild);
  }

  photo.comments.forEach((element) => {
    comments.appendChild(createComment(element));
  });
};
