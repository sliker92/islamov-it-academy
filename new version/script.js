var wrapper = document.querySelector('.wrapper');
var racket1 = document.createElement('div');
var racket2 = document.createElement('div');
var ball = document.createElement('div');
function Player(PosX, PosY, Speed, Width, Height, classname) {
  var self = this;
  self.PosX = PosX,
  self.PosY = PosY,
  self.Speed = Speed,
  self.Width = Width,
  self.Height = Height,
  self.Score = 0;
  self.Update = function () {
    classname.style.transform = 'translateX(' + this.PosX + 'px) translateY(' + this.PosY + 'px) translateZ(0)';
  };
}

function BallObj(PosX, PosY, SpeedX, SpeedY, Width, Height, classname) {
  var self = this;
  self.PosX = PosX,
  self.PosY = PosY,
  self.SpeedX = SpeedX,
  self.SpeedY = SpeedY,
  self.Width = Width,
  self.Height = Height,
  self.Update = function () {
    classname.style.transform = 'translateX(' + this.PosX + 'px) translateY(' + this.PosY + 'px) translateZ(0)';
  };
}

var Area = {
  Width: 600,
  Height: 400
};
var Player1 = new Player(0, 0, 0, 10, 100, racket1);
var Player2 = new Player(0, 0, 0, 10, 100, racket2);
var Ball = new BallObj(0, 0, 0, 0, 30, 30, ball);

function createGameField() {
  var body = document.body;
  var buttonStart = document.createElement('button');
  var scoreWrap = document.createElement('span');
  buttonStart.type = 'button';
  racket1.className = 'racket1';
  racket2.className = 'racket2';
  ball.className = 'ball';
  buttonStart.className = 'buttonStart';
  scoreWrap.className = 'scoreWrap';
  buttonStart.textContent = 'Старт!';
  wrapper.style.width = Area.Width + 'px';
  wrapper.style.height = Area.Height + 'px';
  racket1.style.width = Player1.Width + 'px';
  racket1.style.height = Player1.Height + 'px';
  racket2.style.width =  Player2.Width  + 'px';
  racket2.style.height =  Player2.Height  + 'px';
  racket1.style.top = 67 + Area.Height / 2 - Player1.Height / 2  + 'px';
  racket2.style.left = Area.Width - Player2.Width + 'px';
  racket2.style.top = 67 + Area.Height / 2 - Player1.Height / 2  + 'px';
  ball.style.width = Ball.Width + 'px';
  ball.style.height = Ball.Height + 'px';
  ball.style.borderRadius = 50 + 'px';
  ball.style.left = Area.Width / 2 - Ball.Width / 2 + 'px';
  ball.style.top = 67 + Area.Height / 2 - Ball.Height / 2 + 'px';
  scoreWrap.innerHTML = Player1.Score + ':' + Player2.Score;
  wrapper.appendChild(racket1);
  wrapper.appendChild(racket2);
  wrapper.appendChild(ball);
  body.insertBefore(buttonStart, wrapper);
  body.insertBefore(scoreWrap, wrapper);
}

function gameStart() {
  window.addEventListener('keydown', KeyCheck);
  window.addEventListener('keyup', racketStop);
  var buttonStart = document.querySelector('.buttonStart');
  buttonStart.addEventListener('click', playGame);
  racketDrag();
  ballDrag();
  requestAnimationFrame(gameStart);
}

function KeyCheck(EO) {
  EO = EO || window.event;
  if (EO.keyCode === 16) {
    Player1.Speed = -6;
  }
  if (EO.keyCode === 17) {
    Player1.Speed = 6;
  }
  if (EO.keyCode === 38) {
    Player2.Speed = -6;
  }
  if (EO.keyCode === 40) {
    Player2.Speed = 6;
  }
}

function racketDrag() {
  Player1.Update();
  Player2.Update();
  Player1.PosY += Player1.Speed;
  Player2.PosY += Player2.Speed;

  if (Player1.PosY < -Area.Height / 2 + Player1.Height / 2) {
    Player1.PosY = -Area.Height / 2 + Player1.Height / 2;
  }
  if (Player1.PosY > Area.Height / 2 - Player1.Height / 2) {
    Player1.PosY = Area.Height / 2 - Player1.Height / 2;
  }

  if (Player2.PosY < -Area.Height / 2 + Player2.Height / 2) {
    Player2.PosY = -Area.Height / 2 + Player2.Height / 2;
  }
  if (Player2.PosY > Area.Height / 2 - Player2.Height / 2) {
    Player2.PosY = Area.Height / 2 - Player2.Height / 2;
  }
  // Ball.PosX = getRandomInt(Ball.Width, Area.Width - Ball.Width);
  // Ball.PosY = getRandomInt(wrapper.offsetTop + Player2.Width / 2,
  //   wrapper.offsetTop + Area.Height - Player2.Height - Player2.Width / 2);
}

function playGame() {
  Ball.SpeedX = 6;
  Ball.SpeedY = 2;
}

function ballDrag() {
  Ball.PosX += Ball.SpeedX;
  // вылетел ли мяч правее стены?
  if (Ball.PosX > Area.Width / 2 - Ball.Width / 2) {
    Ball.SpeedX = -Ball.SpeedX;
    Ball.PosX = Area.Width / 2 - Ball.Width / 2;
  }
  // вылетел ли мяч левее стены?
  if (Ball.PosX < -Area.Width / 2 + Ball.Width / 2) {
    Ball.SpeedX = -Ball.SpeedX;
    Ball.PosX = -Area.Width / 2 + Ball.Width / 2;
  }

  Ball.PosY += Ball.SpeedY;
  // вылетел ли мяч ниже пола?
  if (Ball.PosY  > Area.Height / 2 - Ball.Height / 2) {
    Ball.SpeedY = -Ball.SpeedY;
    Ball.PosY = Area.Height / 2 - Ball.Height / 2;
  }
  // вылетел ли мяч выше пола?
  if (Ball.PosY < -Area.Height / 2 + Ball.Height  / 2) {
    Ball.SpeedY = -Ball.SpeedY;
    Ball.PosY = -Area.Height / 2 + Ball.Height / 2;
  }
  Ball.Update();
}

function racketStop() {
  Player1.Speed = 0;
  Player2.Speed = 0;
}

function scoreUpdate() {
  var scoreWrap = document.querySelector('.scoreWrap');
  scoreWrap.innerHTML = Player1.Score + ':' + Player2.Score;
}

function gameUpdate() {
  Player1.Score = 0;
  Player2.Score = 0;
  scoreUpdate();
  Ball.PosX = 0;
  Ball.PosY = 0;
  Ball.Update();
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

createGameField();
gameStart();

