var wrapper = document.querySelector('.wrapper');
var Area = {
  Width: 600,
  Height: 400
};
var Ball = {
  PosX: 0,
  PosY: 0,
  SpeedX: 0,
  SpeedY: 0,
  Width: 30,
  Height: 30,
  Update: function () {
    var ball = document.querySelector('.ball');
    this.PosX = wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width / 2 - ball.getBoundingClientRect().width / 2;
    this.PosY = wrapper.getBoundingClientRect().top + wrapper.getBoundingClientRect().height / 2 - ball.getBoundingClientRect().height / 2;
    // ball.style.left = Area.Width / 2 - ball.Width / 2 + 'px';
    // ball.style.top = Area.Height / 2 + ball.Height / 2  + 20 + 'px';
  }
};
var Player1 = {
  PosX: 0,
  PosY: 0,
  Speed: 0,
  Width: 10,
  Height: 100,
  Score: 0,
  Update: function () {
    var racket1 = document.querySelector('.racket1');
    this.PosX = wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width - racket1.getBoundingClientRect().width;
    this.PosY = wrapper.getBoundingClientRect().top + wrapper.getBoundingClientRect().height / 2 - racket1.getBoundingClientRect().height / 2;
  }
};
var Player2 = {
  PosX: 0,
  PosY: 0,
  Speed: 0,
  Width: 10,
  Height: 100,
  Score: 0,
  Update: function () {
    var racket2 = document.querySelector('.racket2');
    this.PosX = wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width - racket2.getBoundingClientRect().width;
    this.PosY = wrapper.getBoundingClientRect().top + wrapper.getBoundingClientRect().height / 2 - racket2.getBoundingClientRect().height / 2;
  }
};

function createGameField() {
  var body = document.body;
  var buttonStart = document.createElement('button');
  var racket1 = document.createElement('div');
  var racket2 = document.createElement('div');
  var ball = document.createElement('div');
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
  racket1.style.top = Area.Height / 2 + racket1.offsetHeight / 2 + 'px';
  racket2.style.left = Area.Width - Player2.Width + 'px';
  racket2.style.top = Area.Height / 2 + racket2.offsetHeight / 2 + 'px';
  ball.style.width = Ball.Width + 'px';
  ball.style.height = Ball.Height + 'px';
  ball.style.borderRadius = 50 + 'px';
  ball.style.left = Area.Width / 2 - Ball.Width / 2 + 'px';
  ball.style.top = Area.Height / 2 + Ball.Height / 2  + 20 + 'px';
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
  var racket1 = document.querySelector('.racket1');
  var racket2 = document.querySelector('.racket2');

  Player1.PosY += Player1.Speed;
  racket1.style.top = Player1.PosY + 'px';

  Player2.PosY += Player2.Speed;
  racket2.style.top = Player2.PosY + 'px';

  if (Player1.PosY < wrapper.offsetTop + Player1.Width / 2) {
    Player1.PosY = wrapper.offsetTop + Player1.Width / 2;
  }
  if (Player1.PosY > wrapper.offsetTop + Area.Height - Player1.Height - Player1.Width / 2) {
    Player1.PosY = wrapper.offsetTop + Area.Height - Player1.Height - Player1.Width / 2;
  }
  if (Player2.PosY < wrapper.offsetTop + Player2.Width / 2) {
    Player2.PosY = wrapper.offsetTop + Player2.Width / 2;
  }
  if (Player2.PosY > wrapper.offsetTop + Area.Height - Player2.Height - Player2.Width / 2) {
    Player2.PosY = wrapper.offsetTop + Area.Height - Player2.Height - Player2.Width / 2;
  }
  // Ball.PosX = getRandomInt(Ball.Width, Area.Width - Ball.Width);
  // Ball.PosY = getRandomInt(wrapper.offsetTop + Player2.Width / 2,
  //   wrapper.offsetTop + Area.Height - Player2.Height - Player2.Width / 2);
}

function playGame() {
  // Ball.Update();
  Ball.SpeedX = 6;
  Ball.SpeedY = 3;
}

function ballDrag() {
  var ball = document.querySelector('.ball');
  Ball.PosX += Ball.SpeedX;
  Ball.PosY += Ball.SpeedY;
  ball.style.left = Ball.PosX + 'px';
  ball.style.top = Ball.PosY + 'px';
  if ((Ball.PosY + Ball.Height < Player2.PosY || Ball.PosY > (Player2.PosY + Player2.Height)) && Ball.PosX + Ball.Width >= (wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width)) {
    Player1.Score++;
    scoreUpdate();
    Ball.Update();
    Ball.SpeedX = 0;
    Ball.SpeedY = 0;
    Ball.PosX = wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width - Ball.Width - 1;
  } else if (!(Ball.PosY + Ball.Height < Player2.PosY || Ball.PosY > (Player2.PosY + Player2.Height)) && Ball.PosX + Ball.Width > (Player2.PosX)) {
    Ball.SpeedX = -Ball.SpeedX;
    Ball.PosX = wrapper.getBoundingClientRect().left + wrapper.getBoundingClientRect().width - Player1.Width - Ball.Width;
  }
  // вылет мяча левее стены
  if ((Ball.PosY + Ball.Height < Player1.PosY || Ball.PosY > (Player1.PosY + Player1.Height)) && Ball.PosX <= (wrapper.getBoundingClientRect().left)) {
    Player2.Score++;
    scoreUpdate();
    Ball.Update();
    Ball.SpeedX = 0;
    Ball.SpeedY = 0;
    Ball.PosX = wrapper.getBoundingClientRect().left + 1;
  }
  console.log(Ball.SpeedX, Ball.SpeedY);
  // else if (!(Ball.PosY + Ball.Height < Player1.PosY || Ball.PosY > (Player1.PosY + Player1.Height)) && Ball.PosX < (Player1.Width + Player1.PosX)) {
  //   Ball.SpeedX = -Ball.SpeedX;
  //   Ball.PosX = wrapper.getBoundingClientRect().left + Player1.Width;
  // }

  Ball.PosY -= Ball.SpeedY;
  // вылет мяча ниже пола?
  if (Ball.PosY + Ball.Height > (wrapper.getBoundingClientRect().top + Area.Height)) {
    Ball.SpeedY = -Ball.SpeedY;
    Ball.PosY = wrapper.getBoundingClientRect().top + Area.height - Ball.Height;
  }
  // вылет мяча выше потолка?
  if (Ball.PosY < wrapper.getBoundingClientRect().top) {
    Ball.SpeedY = -Ball.SpeedY;
    Ball.PosY = wrapper.getBoundingClientRect().top;
  }
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
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

createGameField();
Ball.Update();
Player1.Update();
Player2.Update();
gameStart()
setInterval(gameStart, 15);
