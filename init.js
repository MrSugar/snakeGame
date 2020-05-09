const backgroundCanvas = document.getElementById("background");
const backgroundCtx = backgroundCanvas.getContext("2d");

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let drewBG;
const ground = new Image();
ground.src = "img/img.png";

const cellTexture = new Image();
cellTexture.src = "img/borders_and_food_sprite.gif";

const foodImg = new Image();
foodImg.src = "img/food.png";

const mapSprite = new Image();
mapSprite.src = "img/tiled_grass_sprite.gif";

const pearImg = new Image();
pearImg.src = "img/pear.png";

const snakeSpriteSheet = new Image();
snakeSpriteSheet.src = "img/snake_sprite.gif";

let box = 32;
let withBorder = true;
let score;
let speed;
let snake = []; // [ {x:№, y:№, dir: ""}, {x:№, y:№, dir: ""}, {x:№, y:№, dir: ""}, {x:№, y:№}, {x:№, y:№}, {x:№, y:№}, {x:№, y:№}, {x:№, y:№} ]
let dir;
const sizeTable = 26;
let blockCount = Math.ceil(sizeTable / 4);
let pear = {
  cell: null,
  timeoutId: null,
  expiredTime: 0,
  lifeTimeInMS: (sizeTable / 2) * 1000,
};
const table = [];

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
  apple: 3,
  pear: 2,
  border: 4,
};

function initialization() {
  snake = [];
  dir = diractions.up;
  score = 0;
  speed = 0;
  drewBG = false;
  backgroundCanvas.width = sizeTable * box;
  backgroundCanvas.height = sizeTable * box;

  canvas.width = sizeTable * box;
  canvas.height = sizeTable * box;

  for (let i = 0; i < sizeTable * sizeTable; i++) {
    const y = Math.floor(i / sizeTable);
    const x = i % sizeTable;
    const isBorder = x < 1 || y < 1 || y >= sizeTable - 1 || x >= sizeTable - 1;

    if (isBorder) {
      table[i] = cellTypes.border;
    } else {
      table[i] = cellTypes.empty;
    }
  }

  for (let i = 0; i < blockCount; i++) {
    createRandomCell(cellTypes.block);
  }

  createRandomCell(cellTypes.apple);

  snake[0] = {
    x: Math.floor(sizeTable / 2),
    y: Math.floor(sizeTable / 2),
    dir: dir,
  };

  nextTick();
}
