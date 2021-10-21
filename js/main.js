import{getRandomInt,getRandomFloat} from './util.js';
import{getAuthor,getType,getPhotos,getTime,getFeatures} from './data.js';

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
