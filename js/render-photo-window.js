export const COMMENTS_TO_SHOW = 5;

const createComment = (comment, commentIndex) => {

  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  if (commentIndex + 1 > COMMENTS_TO_SHOW) {
    commentElement.classList.add('hidden');
  }

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
  bigPicture.querySelector('.social__comment-count').innerHTML = `${Math.min(COMMENTS_TO_SHOW,photo.comments.length)} из <span class="comments-count">${photo.comments.length}<span> комментариев`;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  const comments = bigPicture.querySelector('.social__comments');

  while (comments.firstChild) {
    comments.removeChild(comments.firstChild);
  }

  photo.comments.forEach((element, index) => {
    comments.appendChild(createComment(element, index));
  });
};
