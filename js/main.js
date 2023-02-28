
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
const NAMES = [
  'Вася', 'Маша', 'Даша', 'Глаша', 'Саша', 'Мася', 'Дуся', 'Муся',
];
const RANDOMOBJECT = 25;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

function createIdGenerator() {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const generatePhotoId = createIdGenerator();
const generateUrlId = createIdGenerator();
const generateCommentId = createIdGenerator();

const createComments = () => ({
  name: getRandomArrayElement(NAMES),
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
});

const similarComments = () => Array.from({ length: getRandomIntInclusive(1, 3) }, createComments);

const createPhotoPost = () => ({
  name: getRandomArrayElement(NAMES),
  id: generatePhotoId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(15, 200),
  comments: similarComments(),
});
const similarPost = () => Array.from({ length: RANDOMOBJECT }, createPhotoPost);
similarPost();
