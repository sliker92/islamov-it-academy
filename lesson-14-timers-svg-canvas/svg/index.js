'use strict';
const baseRadius = 300; //  радиус циферблата
const numbersBaseRadius = baseRadius / 2.5; //  радиус оси цифр циферблата
const circleRadius = 30; // радиус кружков с цифрами
const wrapper = document.getElementById('wrapper'); // тэг svg

wrapper.appendChild(createWatch());
setInterval(tickTimer, 1000);

// UI

function createWatch() {
  var base = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  base.appendChild(createClockFace());
  wrapper.appendChild(base);
  wrapper.setAttribute('width', baseRadius);
  wrapper.setAttribute('height', baseRadius);
  base.setAttribute('stroke', 'green');
  base.setAttribute('fill', 'none');
  base.setAttribute('rx', baseRadius / 2);
  base.setAttribute('ry', baseRadius / 2);
  base.setAttribute('cx', baseRadius / 2);
  base.setAttribute('cy', baseRadius / 2);
  wrapper.appendChild(createDigitalWatch());
  wrapper.appendChild(createArrow('hours', 6 , 'black'));
  wrapper.appendChild(createArrow('minutes', 4, 'black'));
  wrapper.appendChild(createArrow('seconds', 2, 'red'));
  wrapper.appendChild(createDecorativeDot());
  base.id = 'base';
  return base;
}

function createClockFace() {
  var clockFace = document.createDocumentFragment();

  for (var number = 1; number <= 12; number++) {
    var angle = number * 30 / 180 * Math.PI;
    var x = (baseRadius / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
    var y = (baseRadius / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
    var xx = ((baseRadius - circleRadius / 4) / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
    var yy = ((baseRadius + circleRadius / 4) / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
    wrapper.appendChild(createHourCircle(x, y));
    wrapper.appendChild(createHourNumber(xx, yy, number));
  }

  return clockFace;
}

function createHourCircle(circleX, circleY) {
  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', circleX);
  circle.setAttribute('cy', circleY);
  circle.setAttribute('r', circleRadius / 2);
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', 'black');
  return circle;
}

function createHourNumber(circleX, circleY, number) {
  var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.id = 'number';
  text.setAttribute('x', circleX);
  text.setAttribute('y', circleY);
  text.textContent = number;
  return text;
}

function createDigitalWatch() {
  var textClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textClock.id = 'textclock';
  ['hourstext', 'minutestext', 'secondstext'].map(watchDigits => {
    var digits = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    digits.id = watchDigits;
    digits.setAttribute('font-size', 30);
    wrapper.appendChild(digits);
  });
  return textClock;
}

function createArrow(arrowType, arrowWidth, color) {
  var point = baseRadius / 2 - (arrowWidth / 2);
  var arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  arrow.id = arrowType + 'arrow';
  arrow.setAttribute('x1', point);
  arrow.setAttribute('y1', baseRadius / 2);
  arrow.setAttribute('x2', baseRadius);
  arrow.setAttribute('y2', baseRadius / 2);
  arrow.setAttribute('stroke', color);
  arrow.setAttribute('stroke-width', arrowWidth);
  arrow.setAttribute('transform-origin', '50%');
  return arrow;
}

function createDecorativeDot() {
  var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.id = 'dot';
  dot.setAttribute('cx', baseRadius / 2);
  dot.setAttribute('cy', baseRadius / 2);
  dot.setAttribute('r', circleRadius / 3);
  return dot;
}

// Logic

function tickTimer() {
  var now = new Date();
  var thisSecond = now.getSeconds();
  var thisMinute = now.getMinutes();
  var thisHour   = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  var thisSecondRotate = (second / 60) * 360 - 90;
  var thisMinuteRotate = (minute) / 60 * 360 - 90;
  var thisHourRotate   = (hour + minute / 60) / 12 * 360 - 90;
  rotateHandle('seconds', thisSecondRotate );
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
  var arrow = document.getElementById(handle + 'arrow');
  arrow.style.transform = `rotate(${degree}deg)`;
}

function updateDigitalWatch(hour, minute, second ){
  var digitalWatchSeconds = document.querySelector('#secondstext');
  var digitalWatchMinutes = document.querySelector('#minutestext');
  var digitalWatchHours = document.querySelector('#hourstext');
  digitalWatchSeconds.setAttribute('x', baseRadius / 2 + baseRadius / 10);
  digitalWatchSeconds.setAttribute('y', baseRadius / 2 + baseRadius / 10 - 50);
  digitalWatchMinutes.setAttribute('x', baseRadius / 2 + baseRadius / 10 - 40);
  digitalWatchMinutes.setAttribute('y', baseRadius / 2 + baseRadius / 10 - 50);
  digitalWatchHours.setAttribute('x', baseRadius / 2 + baseRadius / 10 - 80);
  digitalWatchHours.setAttribute('y', baseRadius / 2 + baseRadius / 10 - 50);
  digitalWatchSeconds.textContent = addZeroToNumber(second);
  digitalWatchMinutes.textContent = addZeroToNumber(minute) + ':';
  digitalWatchHours.textContent = addZeroToNumber(hour) + ':';
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
