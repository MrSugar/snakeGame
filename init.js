const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/img.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

const snakeSpriteSheet = new Image();
snakeSpriteSheet.src = "img/Snake-sprite-sheet.png";

let box = 32;
let score;
let speed;
let food;
let snake = []; // [ {x:№, y:№, dir: ""}, {x:№, y:№, dir: ""}, {x:№, y:№, dir: ""}, {x:№, y:№}, {x:№, y:№}, {x:№, y:№}, {x:№, y:№}, {x:№, y:№} ]
let dir;
let prevDir;

let diractions = {
  up: 0,
  leftUp: 1,
  rightUp: 2,
  down: 3,
  leftDown: 4,
  rightDown: 5,
  left: 6,
  upLeft: 7,
  downLeft: 8,
  right: 9,
  upRight: 10,
  downRight: 11,
};

function initialization() {
  snake = [];
  dir = "up";
  prevDir = "up";
  score = 0;
  speed = 0;
  food = { x: 0, y: 0 };

  snake[0] = {
    x: 9,
    y: 10,
    dir: 0,
  };
  snake[1] = {
    x: 9,
    y: 11,
    dir: 0,
  };
  snake[2] = {
    x: 9,
    y: 12,
    dir: 0,
  };
  setRandomPosition(food);

  nextTick();
}
