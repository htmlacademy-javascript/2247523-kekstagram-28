const createMiniature = (post) => {
  const templatePicture = document.querySelector('#picture').content;
  const newPicture = templatePicture.cloneNode(true);

  newPicture.querySelector('.picture__img').src = post.url;
  newPicture.querySelector('.picture__comments').textContent = post.comments.length;
  newPicture.querySelector('.picture__likes').textContent = post.likes;
  return newPicture;
};
export const renderPhotoList = (posts) => {
  const fragmentPicture = document.createDocumentFragment();
  posts.forEach((post) => {
    fragmentPicture.appendChild(createMiniature(post));
  });

  const picturesHTML = document.querySelector('.pictures');
  picturesHTML.appendChild(fragmentPicture);
};
