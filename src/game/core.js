const LEFT_ASCII = 37;
const RIGHT_ASCII = 39;
const SPACE_ASCII = 32;

const clearColor = "#121212";
const shipMissileColor = "#FC427B";
const invaderMissileColor = "#8854d0";

let gameCanvas, canvasWidth, canvasHeight;

let leftkey = (rightkey = false);
let cc, game;

function init() {
  gameCanvas = document.getElementById("canvas");
  canvasHeight = gameCanvas.height;
  canvasWidth = gameCanvas.width;

  // oyunu oynacagimiz tuslari dinliyoruz
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("keydown", onKeyDown);

  cc = gameCanvas.getContext("2d");
  game = new Game();
  game.init();
}

function update() {
  clearCanvas(cc);
  game.update(cc);
  requestAnimationFrame(update);
}

function onKeyDown(e) {
  let keycode = e.keyCode;
  //left
  if (keycode == LEFT_ASCII) {
    leftkey = true;
  }
  //right
  if (keycode == RIGHT_ASCII) {
    rightkey = true;
  }
  //space
  if (keycode == SPACE_ASCII) {
    game.shipShootMissile();
  }
}

function onKeyUp(e) {
  let keycode = e.keyCode;
  //left
  if (keycode == LEFT_ASCII) {
    leftkey = false;
  }
  //right
  if (keycode == RIGHT_ASCII) {
    rightkey = false;
  }
}

const events = ["hashchange", "load"];

events.forEach((event) => {
  window.addEventListener(event, function () {
    if (window.location.hash == pages.find((page) => page.id == 2).url) {
      init();
      update();
    }
  });
});
