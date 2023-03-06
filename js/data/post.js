import { getRandomInt, getRandomArrayElement } from './../util.js';
import { NAMES } from './const.js';
import { similarComments } from './comments.js';

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

const createPhotoPost = (_, index) => ({
  name: getRandomArrayElement(NAMES),
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: similarComments(),
});

export const similarPost = () => Array.from({ length: RANDOM_OBJECT }, createPhotoPost);
