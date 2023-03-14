const createPicture = (url, comments, likes) => {
  const templatePicture = document.querySelector('#picture').content;
  const newPicture = templatePicture.cloneNode(true);

  newPicture.querySelector('.picture__img').src = url;
  newPicture.querySelector('.picture__comments').textContent = comments.length.toString();
  newPicture.querySelector('.picture__likes').textContent = likes.toString();
  return newPicture;
};
export const createPhotoList = (posts) => {
  const fragmentPicture = document.createDocumentFragment();

  posts.forEach((element) => {
    const picture = createPicture(element.url, element.comments, element.likes);
    fragmentPicture.appendChild(picture);
  });

  const picturesHTML = document.querySelector('.pictures');
  picturesHTML.appendChild(fragmentPicture);
};
