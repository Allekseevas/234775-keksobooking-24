function getRandomInt(min, max) {
  if(min>=max){
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export{getRandomInt};

function getRandomFloat(min, max, number) {
  if(min>=max){
    return false;
  }
  return ((Math.random() * (max - min + 1)) + min).toFixed(number);
}
export{getRandomFloat};
