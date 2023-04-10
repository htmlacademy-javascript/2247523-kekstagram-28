const body = document.querySelector('body');
const templateSuccess = document.querySelector('#success').content;
const newSuccess = templateSuccess.cloneNode(true);
const templateError = document.querySelector('#error').content;

const closeSuccessByEsc = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    document.querySelector('.success').remove();
  }
  document.removeEventListener('keydown', closeSuccessByEsc);
};


const showSuccess = () => {
  body.appendChild(newSuccess);
  document.addEventListener('keydown', closeSuccessByEsc);

  document.querySelector('.success').addEventListener('click', (evt) => {
    if(!evt.target.closest('.success__button') && evt.target.closest('.success__inner')){
      return;
    }
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', closeSuccessByEsc);
  });

};

const closeErrorByEsc = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    document.querySelector('.error').remove();
  }
  document.removeEventListener('keydown', closeErrorByEsc);
};


const showError = () => {
  const newError = templateError.cloneNode(true);
  body.appendChild(newError);
  document.addEventListener('keydown',closeErrorByEsc);
  document.querySelector('.error').addEventListener('click', (evt) => {
    if(!evt.target.closest('.error__button') && evt.target.closest('.error__inner')){
      return;
    }
    document.querySelector('.error').remove();
    document.removeEventListener('keydown', closeErrorByEsc);
  });
};

export {showError,showSuccess};
