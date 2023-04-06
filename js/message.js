const body = document.querySelector('body');
const templateSuccess = document.querySelector('#success').content;
const newSuccess = templateSuccess.cloneNode(true);
const templateError = document.querySelector('#error').content;
const newError = templateError.cloneNode(true);

const showSuccess = () => {
  body.appendChild(newSuccess);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      document.querySelector('.success').remove();
    }
  });
  document.querySelector('.success').addEventListener('click', (evt) => {
    if(evt.target.closest('.success__button')){
      document.querySelector('.success').remove();
      return;
    }
    if (evt.target.closest('.success__inner')){
      return;
    }
    document.querySelector('.success').remove();
  });
};

const showError = () => {
  body.appendChild(newError);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      document.querySelector('.error').remove();
    }
  });
  document.querySelector('.error').addEventListener('click', (evt) => {
    if(evt.target.closest('.error__button')){
      document.querySelector('.error').remove();
      return;
    }
    if (evt.target.closest('.error__inner')){
      return;
    }
    document.querySelector('.error').remove();
  });
};
export {showError,showSuccess};

