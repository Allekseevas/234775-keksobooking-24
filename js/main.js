function getRandomInt(min, max) {
  if(min>=max){
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomFloat(min, max, number) {
  if(min>=max){
    return false;
  }
  return ((Math.random() * (max - min + 1)) + min).toFixed(number);
}


function getAuthor(counter) {
  const numberExpression = counter < 10 ? `0${counter}` : counter;

  return {
    avatar: `img/avatars/user${  numberExpression  }.png`,
  };

}

function getType() {
  const randomType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  return randomType[Math.floor(Math.random() * randomType.length)];
}

function getTime(){
  const randomTime = ['12:00','13:00','14:00'];
  return randomTime[Math.floor(Math.random() * randomTime.length)];
}

function getFeatures (){
  const randomFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const random = getRandomInt(1, randomFeatures.length);
  return randomFeatures.slice(0, random);
}

function getPhotos(){
  const randomPhotos =['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
  const random = getRandomInt(1, randomPhotos.length);
  return randomPhotos.slice(0, random);
}
function main(i) {
  const location =  {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };
  return {
    author: getAuthor(i),
    offer: {
      title: 'Привет!',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInt(1, 99),
      type: getType(),
      rooms: getRandomInt(1,10),
      guests: getRandomInt(1,99),
      checkin: getTime(),
      checkout: getTime(),
      features: getFeatures(),
      description: 'Пока!',
      photos: getPhotos(),
    },
    location,
  };
}

function getData(numberOfRows = 10){
  const result = [];
  for(let i=1;i<=numberOfRows; i++){
    result.push(main(i));

  }
  return result;
}
getData();
