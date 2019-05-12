var john = {
  bills: [124, 48, 268, 180, 42],
  tipCalculated: [],
  payed: [],
  tip: function () {
    for (var key in john.bills) {
      if (john.bills[key] < 50) {
        john.tipCalculated.push(Math.round(john.bills[key] * 0.2)) && john.payed.push(john.bills[key] + john.tipCalculated[key]);
      } else if (john.bills[key] >= 50 && john.bills[key] < 200) {
        john.tipCalculated.push(Math.round(john.bills[key] * 0.15)) && john.payed.push(john.bills[key] + john.tipCalculated[key]);
      } else {
        john.tipCalculated.push(Math.round(john.bills[key] * 0.1)) && john.payed.push(john.bills[key] + john.tipCalculated[key]);
      }
    }
  }
};

john.tip();

var mark = {
  bills: [77, 375, 110, 45],
  tipCalculated: [],
  payed: [],
  tip: function () {
    for (var key in mark.bills) {
      if (mark.bills[key] < 100) {
        mark.tipCalculated.push(Math.round(mark.bills[key] * 0.2)) && mark.payed.push(mark.bills[key] + mark.tipCalculated[key]);
      } else if (mark.bills[key] >= 100 && mark.bills[key] < 300) {
        mark.tipCalculated.push(Math.round(mark.bills[key] * 0.1)) && mark.payed.push(mark.bills[key] + mark.tipCalculated[key]);
      } else {
        mark.tipCalculated.push(Math.round(mark.bills[key] * 0.25)) && mark.payed.push(mark.bills[key] + mark.tipCalculated[key]);
      }
    }
  }
};

mark.tip();

function averageTip(obj) {
  var sum = 0;
  for (var key in obj) {
    sum += obj[key];
  }
  return sum / obj.length;
}

function taskResult() {
  if (averageTip(john.tipCalculated) > averageTip(mark.tipCalculated)) {
    console.log("John's family richer than Mark!");
  } else {
    console.log("Mark's family richer than John!");
  }
}

taskResult();

