function isPal(str) {
  var result = true;
  var result2 = false;

  if (typeof str !== 'string')  return result2;

  str = str.toString().toLowerCase().replace(/\s/g,'');

  for (var i = 0, j = parseInt(str.length / 2), k = str.length - 1; i < j; i++, k--) {
    if (str.charAt(i) != str.charAt(k)) {
      result = false;
      break;
    }
  }

  return result;
}

module.exports = isPal;

