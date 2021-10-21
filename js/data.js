import{getRandomInt} from './util.js';

function getAuthor(counter) {
  const numberExpression = counter < 10 ? `0${counter}` : counter;

  return {
    avatar: `img/avatars/user${  numberExpression  }.png`,
  };

}
export{getAuthor};
function getType() {
  const randomType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  return randomType[Math.floor(Math.random() * randomType.length)];
}
export{getType};
function getTime(){
  const randomTime = ['12:00','13:00','14:00'];
  return randomTime[Math.floor(Math.random() * randomTime.length)];
}
export{getTime};
function getFeatures (){
  const randomFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const random = getRandomInt(1, randomFeatures.length);
  return randomFeatures.slice(0, random);
}
export{getFeatures};
function getPhotos(){
  const randomPhotos =['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
  const random = getRandomInt(1, randomPhotos.length);
  return randomPhotos.slice(0, random);
}
export{getPhotos};
