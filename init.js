const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/img.png";

const cellTexture = new Image();
cellTexture.src = "img/floor.jpg";

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

const table = [];
const sizeTable = 20;

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

let cellTypes = {
  empty: 0,
  block: 1,
};

function initialization() {
  snake = [];
  dir = diractions.up;
  score = 0;
  speed = 0;
  food = { x: 0, y: 0 };

  canvas.width = sizeTable * box;
  canvas.height = sizeTable * box;

  for (let i = 0; i < sizeTable * sizeTable; i++) {
    const y = Math.floor(i / sizeTable);
    const x = i % sizeTable;
    const isBorder = x < 1 || y < 1 || y >= sizeTable - 1 || x >= sizeTable - 1;

    if (isBorder) {
      table[i] = cellTypes.block;
    } else {
      table[i] = cellTypes.empty;
    }
  }
  // случайное целое число от 1 до sizetable -2
  const randomX = 1 + Math.floor(Math.random() * (sizeTable - 2));
  const randomY = 1 + Math.floor(Math.random() * (sizeTable - 2));
  const i = randomY * sizeTable + randomX;
  table[i] = cellTypes.block;

  console.log(table);
  snake[0] = {
    x: Math.floor(sizeTable / 2),
    y: Math.floor(sizeTable / 2),
    dir: dir,
  };
  setRandomPosition(food);

  nextTick();
}
