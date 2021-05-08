const LEFT_ASCII = 37;
const RIGHT_ASCII = 39;
const SPACE_ASCII = 32;

const clearColor = "#121212";

let gameCanvas, canvasWidth, canvasHeight;

let leftkey = (rightkey = false);
let createCanvas, game;

function init() {
  //oyunumuzu olusturcagimiz canvasi olusturuyoruz
  gameCanvas = document.getElementById("canvas");
  canvasHeight = gameCanvas.height;
  canvasWidth = gameCanvas.width;

  // oyunu oynacagimiz tuslari dinliyoruz
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("keydown", onKeyDown);

  createCanvas = gameCanvas.getContext("2d");
  game = new Game();
  game.init();
}

function update() {
  clearCanvas(createCanvas);
  game.update(createCanvas);
  requestAnimationFrame(update);
}

// oyunda kullancagimiz tuslara basililmasini kontrol ediyor
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

// oyunda kullancagimiz tuslara basildiktan sonra birakilmasini kontrol ediyor
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

// @desc : src/router/pages.js
// id: "2",
// url: "#game",
// html: gameScreen,
// projede route kurulan route sistemini
// hash kontrol edip, game route'una gelindiyse oyunu init ve updateliyoruz.

const events = ["hashchange", "load"];

events.forEach((event) => {
  window.addEventListener(event, function () {
    if (window.location.hash == pages.find((page) => page.id == 2).url) {
      init();
      update();
    }
  });
});
