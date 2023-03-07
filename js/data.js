import { getRandomInt, getRandomArrayElement } from './util.js';

const NAMES = [
  'Вася', 'Маша', 'Даша', 'Глаша', 'Саша', 'Мася', 'Дуся', 'Муся',
];

const RANDOM_OBJECT = 25;

const DESCRIPTIONS = [
  'Представляю вашему вниманию фото сестры Кекса - мисс Флекс.',
  'Посмотрите на эти виды!',
  'Незабываемые ощщения! Зацените, друзья!',
  'Делюсь с вами фоточками с нашей свадьбы.',
  'Мое самое лучшее фото!',
  'Учусь фотографировать, делюсь с вами результатами.',
  'Ура,это уже мой сотый пост в Кексограмме!',
  'Лучшие фотографии в этом посте, наслаждайтесь...',
  'А вот и мои результаты до/после...',
  'Поставьте лайк, мои старания ведь не напрасны?!',
];


const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const createComments = (_, index) => ({
  name: getRandomArrayElement(NAMES),
  id: index + 1,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
});

export const similarComments = () => Array.from({ length: getRandomInt(1, 3) }, createComments);


const createPhotoPost = (_, index) => ({
  name: getRandomArrayElement(NAMES),
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: similarComments(),
});

export const similarPost = () => Array.from({ length: RANDOM_OBJECT }, createPhotoPost);
