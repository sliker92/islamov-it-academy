function removeClass(obj, cls) {
  var key = Object.keys(obj);
  var arr = obj[key].split(' ');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == cls) {
      arr.splice(i, i + 1);
    }
  }

  obj[key] = arr.join(' ');

  return obj;
}

