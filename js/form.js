import { changeScalePhoto } from './scale-photo.js';
import { changeEffects } from './slider.js';
import { sendData } from './fetch.js';
import { showError, showSuccess } from './message.js';
import { showAlert } from './util.js';
const TAG_ERROR_TEXT = 'Неправильно заполнены хештеги';
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const body = document.querySelector('body');
const imgUpload = body.querySelector('.img-upload__overlay');
const hashtagField = body.querySelector('.text__hashtags');
const commentField = body.querySelector('.text__description');
const form = body.querySelector('.img-upload form');
const cancelButton = body.querySelector('#upload-cancel');
const submitButton = body.querySelector('.img-upload__submit');
const imgUploadPreview = body.querySelector('.img-upload__preview img');

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
  changeScalePhoto();
  changeEffects();
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadPreview.src = 'img/upload-default-image.jpg';
  const previewElements = document.querySelectorAll('.effects__preview');
  const effectsPreview = Array.from(previewElements);
  effectsPreview.forEach((element) => {
    element.removeAttribute('style');
  });
};

const closeByEsc = (evt) => {
  const errorPopup = document.querySelector('.error');
  if (evt.key === 'Escape' && !isTextFieldFocused() && !errorPopup) {
    evt.preventDefault();
    closeDownloadPopup();
    document.removeEventListener('keydown', closeByEsc);
  }
};
cancelButton.addEventListener('click', closeDownloadPopup);

const openDownloadPopup = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (!matches) {
    showAlert('Неправильный тип файла!');
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener('load', () => {
    imgUploadPreview.src = reader.result;
    const previewElements = document.querySelectorAll('.effects__preview');
    const effectsPreview = Array.from(previewElements);
    effectsPreview.forEach((element) => {
      element.style.backgroundImage = `url(${reader.result})`;
    });
  });
  imgUpload.classList.remove('hidden');
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

const onFormSubmit = (evt) => {
  evt.preventDefault();
  submitButton.setAttribute('disabled', 'disabled');
  sendData(new FormData(form))
    .then(() => {
      closeDownloadPopup();
      showSuccess();
    })
    .catch(() => {
      showError();
    })
    .finally(()=>{
      submitButton.removeAttribute('disabled');
    });
};

form.addEventListener('submit', onFormSubmit);

hashtagField.addEventListener('input', () => {
  if (pristine.validate()) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
});

commentField.addEventListener('input', () => {
  if (pristine.validate()) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
});
