var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};
function typeOfNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function multiplyNumeric(obj) {
  for (var key in obj) {
    if (typeOfNumber(obj[key])) {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(image);
module.exports = multiplyNumeric;
