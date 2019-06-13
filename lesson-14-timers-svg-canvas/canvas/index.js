var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var radius = canvas.height / 2;
const rad = canvas.height / 2; // радиус окружности часов
ctx.translate(radius, radius);
radius = radius * 0.90;
setInterval(createWatch, 1000);

function createWatch() {
  createClockFace(ctx, radius);
  createHourNumber(ctx, radius);
  updateWatch(ctx, radius);
}

function createClockFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.07, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function createHourNumber(ctx, radius) {
  for (var number = 1; number <= 12; number++) {
    var angle = number * 30 / 180 * Math.PI;
    var x = (radius / 300) + Math.round(Math.sin(angle) * rad / 1.3);
    var y = (radius / 300) - Math.round(Math.cos(angle) * rad / 1.3);
    var ang = number * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(number.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
    ctx.font = '14px arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
  }
}

function updateWatch(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  createDigitalWatch(ctx, hour, minute, second);
  //  hour
  hour = hour % 12;
  hour = (hour * Math.PI / 6) +
    (minute * Math.PI / (6 * 60)) +
    (second * Math.PI / (360 * 60));
  drawHand(ctx, hour, radius * 0.5, radius * 0.05);
  //  minute
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(ctx, minute, radius * 0.8, radius * 0.03);
  // second
  second = (second * Math.PI / 30);
  drawHand(ctx, second, radius * 0.9, radius * 0.01);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

function createDigitalWatch(ctx, hour, minute, second) {
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText('', radius / 20, -30);
  ctx.fillText(addZeroToNumber(hour) + ':', -20, -30);
  ctx.fillText(addZeroToNumber(minute) + ':',  0, -30);
  ctx.fillText(addZeroToNumber(second), 20, -30);
  console.log(addZeroToNumber(hour));
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
