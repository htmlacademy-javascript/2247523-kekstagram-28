const TAG_ERROR_TEXT = 'Неправильно заполнены хештеги';
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const body = document.querySelector('body');
const imdUpload = body.querySelector('.img-upload__overlay');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const form = document.querySelector('.img-upload form');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const closeDownloadPopup = () => {
  form.reset();
  pristine.reset();
  // resetScale();
  // resetEffects();
  imdUpload.classList.add('hidden');
  body.classList.remove('modal-open');
};

const closeByEsc = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeDownloadPopup();
    document.removeEventListener('keydown', closeByEsc);
  }
};
document.querySelector('#upload-cancel').addEventListener('click', closeDownloadPopup);

const openDownloadPopup = () => {
  imdUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', closeByEsc);
};
document.querySelector('#upload-file').addEventListener('change', openDownloadPopup);

const isValidTag = (tag) => VALID_HASHTAG.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);
