function checkStringLength(string, stringLength) {
  return string.length <= stringLength;
}
checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);


function checkStringPalindrome(string) {
  const stringNoGap = string.replaceAll(' ', '');
  const stringLength = stringNoGap.length;
  let newString = '';
  for (let i = stringLength - 1; i >= 0; i--) {
    newString += stringNoGap[i];
  }
  return newString.toLowerCase() === stringNoGap.toLowerCase();
}
checkStringPalindrome('Лёша на полке клопа нашёл');
checkStringPalindrome('топот');
checkStringPalindrome('ДовОд');
checkStringPalindrome('Кекс');
checkStringPalindrome('Лёша на полке клопа нашёл ');


function findNumber(value) {
  if (typeof value === 'number') {
    const string = String(Math.abs(value));
    return Number(string.replaceAll('.', ''));
  }
  const valueLength = value.length;
  let number = '';
  for (let i = 0; i < valueLength; i++) {
    if (value[i] !== ' ' && (Number(value[i]) || Number(value[i]) === 0)) {
      number += value[i];
    }
  }
  if (!number) {
    return NaN;
  }
  return number;
}
findNumber('2023 год');
findNumber('ECMAScript 2022');
findNumber('1 кефир, 0.5 батона');
findNumber('а я томат');
findNumber(-1.4);


function createString(string, minLength, addSymbol) {
  if (string.length >= minLength) {
    return string;
  }
  const lengthAdd = minLength - string.length;
  let addString = '';
  while (addString.length < lengthAdd) {
    addString += addSymbol;
  }
  const newString = addString.slice(0, lengthAdd) + string;
  return newString;
}
createString('1', 2, '0');
createString('1', 4, '0');
createString('q', 4, 'werty');
createString('q', 4, 'we');
createString('qwerty', 4, '0');
