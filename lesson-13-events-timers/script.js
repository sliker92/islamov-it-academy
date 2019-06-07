// создаём обёртку для часов

var body = document.body;
var wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.style = 'width: 300px; height: 300px; border-radius: 50%; background-color: lightyellow';
body.appendChild(wrapper);

// глобальные переменные
const clockRadius = 120;  //  радиус циферблата
const hourRadius = 70;  //  радиус кружка с цифрами
var degAngle = 0;
var angleBtwHours = 30;
var clockCenterX = wrapper.offsetLeft + wrapper.offsetWidth / 2;
var clockCenterY = wrapper.offsetTop + wrapper.offsetHeight / 2;
var hoursArrow = document.createElement("div");
var minutesArrow = document.createElement("div");
var secondsArrow = document.createElement("div");
var digWatch = document.createElement('div');
var time = new Date();
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()); //определяем по времени где должна быть стрелка часов
var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()); //определяем по времени где должна быть стрелка минут
var secondsDeg = 6 * time.getSeconds(); //определяем по времени где должна быть стрелка секунд

// создаём часовые отметки и позиционируем их

for (var i = 1; i <= 12; i++) {
  var hours = document.createElement('div');
  hours.className = 'hours';
  hours.style = 'width: 30px; height: 30px; border-radius: 50%; background-color: lightgreen; position:absolute;' +
    'display:flex; justify-content: center; align-items: center';

  degAngle += angleBtwHours;
  var radAngle = degAngle / 180 * Math.PI; // угол в радианах между часовыми отметками

  wrapper.appendChild(hours);
  hours.innerHTML = i;

  var hoursCenterX = clockCenterX + clockRadius * Math.sin(radAngle);
  var hoursCenterY = clockCenterY - clockRadius * Math.cos(radAngle);

  hours.style.left = Math.round(hoursCenterX - hours.offsetWidth/2) + "px";
  hours.style.top = Math.round(hoursCenterY - hours.offsetHeight/2) + "px";
}

// привязываем стрелки в DOM, задаём стили и позиционируем
wrapper.appendChild(digWatch);
digWatch.style = 'width: 120px; height: 30px; position: absolute;' +
  'text-align: center; line-height: 30px; font-size: 25px;color: black;';
digWatch.style.left = clockCenterX - digWatch.offsetWidth / 2 + "px";
digWatch.style.top = clockCenterY - hourRadius + "px";

wrapper.appendChild(hoursArrow);
hoursArrow.style = 'width: 7px; height: 70px; border-radius: 10px; ' +
  'position: absolute; background-color: black;';
hoursArrow.style.left =  clockCenterX - hoursArrow.offsetWidth / 2 + "px";
hoursArrow.style.top =  clockCenterY - hoursArrow.offsetHeight + "px";

wrapper.appendChild(minutesArrow);
minutesArrow.style = 'width: 5px; height: 140px; border-radius: 10px; ' +
  'position: absolute; background-color: black;';
minutesArrow.style.left = clockCenterX - minutesArrow.offsetWidth / 2 + "px";
minutesArrow.style.top = clockCenterY - minutesArrow.offsetHeight + "px";

wrapper.appendChild(secondsArrow);
secondsArrow.style = 'width: 2px; height: 150px; border-radius: 10px; ' +
  'position: absolute; background-color: black;';
secondsArrow.style.left = clockCenterX - secondsArrow.offsetWidth / 2 + "px";
secondsArrow.style.top = clockCenterY - secondsArrow.offsetHeight + "px";

hoursArrow.style.transformOrigin = "center 70px";
minutesArrow.style.transformOrigin = "center 140px";
secondsArrow.style.transformOrigin = "center 150px";

function arrows() {
  // электронные часы
  var time = new Date(); //текущее время
  digWatch.innerHTML = time.toLocaleTimeString();
  // секундные стрелки
  secondsDeg += 6; //Определяем угол для секунд
  secondsArrow.style.transform = "rotate(" + secondsDeg + "deg)";
  // минутныеные стрелки
  minutesDeg += 6 * (1/60); //Определяем угол для минут
  minutesArrow.style.transform = "rotate(" + minutesDeg + "deg)";
  // часовые стрелки
  hoursDeg += 6 * (1/360); //Определяем угол для часов
  hoursArrow.style.transform = "rotate(" + hoursDeg + "deg)";
}
//
window.onload = arrows();
window.setInterval (arrows, 1000);
