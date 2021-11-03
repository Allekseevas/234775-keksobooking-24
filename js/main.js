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

const vocabulary ={
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

function translate(word) {
  return vocabulary[word] ? vocabulary[word] : word;

}

function  formatAd(tpl, ads) {
  tpl.querySelector('.popup__text--address').textContent = ads.offer.address;
  tpl.querySelector('.popup__title').textContent = ads.offer.title;
  tpl.querySelector('.popup__text--price').textContent = `${ads.offer.price} ₽/ночь`;
  tpl.querySelector('.popup__type').textContent = translate(ads.offer.type);
  tpl.querySelector('.popup__text--capacity').textContent = `${ads.offer.rooms} комнаты для ${ads.offer.guests} гостей`;
  tpl.querySelector('.popup__text--time').textContent = `Заезд после ${ads.offer.checkin}, выезд до ${ads.offer.checkout}`;
  tpl.querySelector('.popup__features').textContent = ads.offer.features;
  const deskscriptionElement = tpl.querySelector('.popup__description');
  if (ads.offer.description.length){
    deskscriptionElement.textContent = ads.offer.description;
  } else {
    deskscriptionElement.classList.add('hidden');
  }


  tpl.querySelector('.popup__features').textContent = ads.offer.features;
}

function formatPhotos(tpl, photos){
  const popupPhotos = tpl.querySelector('.popup__photos');
  const img = popupPhotos.querySelector('img');
  for (let i = 0; i < photos.length; i++){
    const imgClone = img.cloneNode(true);
    imgClone.setAttribute('src', photos[i]);
    popupPhotos.appendChild(imgClone);
  }
  img.remove();
}

function formatAvatar(tpl, avatar){
  const img = tpl.querySelector('.popup__avatar');
  img.setAttribute('src', avatar);
}

document.addEventListener('DOMContentLoaded', () => {
  const ads = main();
  const tpl = document.querySelector('#card').content;
  const mapDiv = document.querySelector('#map-canvas');
  formatAd(tpl, ads);
  formatPhotos(tpl, ads.offer.photos);
  formatAvatar(tpl, ads.author.avatar);
  mapDiv.appendChild(tpl);
}, false);
