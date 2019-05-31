var DragImage = null;
var DragShiftX;
var DragShiftY;
var images = document.querySelectorAll('img');

images.forEach(function (item) {
  item.addEventListener('mousedown', Drag_Start);
});

function Drag_Start (EO) {
  EO = EO || window.event;
  DragImage = EO.target;

  for (var i = 0; i < images.length; i++) {
    images[i].style.zIndex = '0';
  }

  DragImage.style.zIndex = '1';

  var mouseX = EO.pageX,
      mouseY = EO.pageY,
      imageX = DragImage.offsetLeft,
      imageY = DragImage.offsetTop;
  DragShiftX = mouseX - imageX;
  DragShiftY = mouseY - imageY;

  window.onmousemove = Drag_Move;
  window.onmouseup = Drag_Stop;
}

function Drag_Stop () {
  window.onmousemove = null;
  window.onmouseup = null;
}

function Drag_Move (EO) {
  EO = EO || window.event;
  PreventDefault(EO);

  var mouseX = EO.pageX,
    mouseY = EO.pageY,
    imageX = mouseX - DragShiftX,
    imageY = mouseY - DragShiftY;
  DragImage.style.left = imageX + "px";
  DragImage.style.top = imageY + "px";
}

function PreventDefault(EO) {
  EO = EO || window.event;
  EO.preventDefault();
}