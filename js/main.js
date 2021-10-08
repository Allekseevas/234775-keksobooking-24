function getRandomInt(min, max) {
  if(min>=max){
    console.error('min not max');
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(50,20));



function getRandomFloat(min, max, number) {
  if(min>=max){
    console.log('min not max');
    return false;
  }
  return ((Math.random() * (max - min + 1)) + min).toFixed(number);
}
console.log(getRandomFloat(25,50, 6));
