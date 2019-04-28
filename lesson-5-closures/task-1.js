function board(rows, columns) {
  var element1 = [];
  var element2 = [];

  for (var i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      element1.push(' ');
      element2.push('#');
    } else {
      element1.push('#');
      element2.push(' ');
    }
  }

  for (var j = 0; j < columns; j++) {
    if (j % 2 === 1) {
      console.log(element1.join(''));
    } else {
      console.log(element2.join(''));
    }
  }
}

var result = board(8, 8);
console.log(result);
