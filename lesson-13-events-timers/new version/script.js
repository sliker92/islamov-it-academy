const clockRadius = 300;  //  радиус циферблата
const hourRadius = 30;  //  радиус кружка с цифрами
var body = document.body;
body.style = 'padding: 0; margin: 0;';
var wrapper = document.createElement('div');

function createWatch() {
  wrapper.style = 'position: relative; display: flex; justify-content: center; align-items: center;' +
    'background-color: lightyellow; border-radius: 50%;';
  wrapper.style.width = clockRadius + 'px';
  wrapper.style.height = clockRadius + 'px';
  body.appendChild(wrapper);
  createHourPoints();
  createArrow('hour');
  createArrow('minute');
  createArrow('second');
  createDigitalWatch();
  return wrapper;
}

function createHourPoints() {
  for (var i = 1; i <= 12; i++) {
    var radAngle = i * 30 / 180 * Math.PI; // угол в радианах между часовыми отметками
    var hoursCenterX = ((clockRadius - hourRadius) / 2) + Math.round(Math.sin(radAngle) * 120);
    var hoursCenterY = ((clockRadius - hourRadius) / 2) - Math.round(Math.cos(radAngle) * 120);
    createHourCircle(hoursCenterX, hoursCenterY, i);
  }
}

function createHourCircle(circleX, circleY, number) {
  var hours = document.createElement('div');
  hours.innerHTML = number;
  hours.style = 'width: 30px; height: 30px; border-radius: 50%; background-color: lightgreen; position:absolute;' +
    'display:flex; justify-content: center; align-items: center';
  hours.style.left = circleX + 'px';
  hours.style.top = circleY + 'px';
  wrapper.appendChild(hours);
  return hours;
}

function createDigitalWatch() {
  var digWatch = document.createElement('div');
  wrapper.appendChild(digWatch);
  digWatch.className = 'watch';
  digWatch.style = 'width: 120px; height: 30px; position: absolute;' +
    'text-align: center; line-height: 30px; font-size: 25px;color: black;';
  digWatch.style.top = clockRadius / 2 + clockRadius / 10 + 'px';
  digWatch.style.left = clockRadius / 2 - 50 + 'px';
  return digWatch;
}

function createArrow(arrowType) {
  var arrow = document.createElement('div');
  if (arrowType === 'hour') {
    wrapper.appendChild(arrow);
    arrow.style = 'width: 7px; height: 70px; border-radius: 10px; ' +
      'position: absolute; background-color: black;';
    arrow.className = arrowType + 'Arrow';
    arrow.style.transformOrigin = 'center 70px';
    arrow.style.top = clockRadius / 3.6  + 'px';
    arrow.style.left = clockRadius / 2 - arrow.offsetWidth / 2 + 'px';
  } else if (arrowType === 'second') {
    wrapper.appendChild(arrow);
    arrow.style = 'width: 2px; height: 150px; border-radius: 10px; ' +
      'position: absolute; background-color: black;';
    arrow.className = arrowType + 'Arrow';
    arrow.style.transformOrigin = 'center 150px';
    arrow.style.top = clockRadius / 500 + 'px';
    arrow.style.left = clockRadius / 2 - arrow.offsetWidth / 2 + 'px';
  } else {
    wrapper.appendChild(arrow);
    arrow.style = 'width: 5px; height: 140px; border-radius: 10px; ' +
      'position: absolute; background-color: black;';
    arrow.className = arrowType + 'Arrow';
    arrow.style.transformOrigin = 'center 140px';
    arrow.style.top = clockRadius / 26  + 'px';
    arrow.style.left = clockRadius / 2 - arrow.offsetWidth / 2 + 'px';
  }
  return arrow;
}

function arrows() {
  var digWatch = document.querySelector('.watch');
  var time = new Date();
  var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
  var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
  var secondsDeg = 6 * time.getSeconds();
  var secondsArrow = document.querySelector('.secondArrow');
  var minutesArrow = document.querySelector('.minuteArrow');
  var hoursArrow = document.querySelector('.hourArrow');
  digWatch.innerHTML = time.toLocaleTimeString();
  secondsDeg += 6;
  secondsArrow.style.transform = 'rotate(' + secondsDeg + 'deg)';
  minutesDeg += 6 * (1 / 60);
  minutesArrow.style.transform = 'rotate(' + minutesDeg + 'deg)';
  hoursDeg += 6 * (1 / 360);
  hoursArrow.style.transform = 'rotate(' + hoursDeg + 'deg)';
}

createWatch();
window.setInterval(arrows, 1000);
