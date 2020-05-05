function gameLoop() {
  if (checkEndOfGame(snake[0])) {
    clearTimeout(gameId);
    if (confirm("Go next?")) {
      initialization();
    }
  }

  let headSnake = snake[0];
  // если голова змеи находится на клетке с едой

  let isEatingFood = table[XYtoIndex(headSnake.x, headSnake.y)] == cellTypes.apple;

  let isEatingPear = table[XYtoIndex(headSnake.x, headSnake.y)] == cellTypes.pear;

  if (isEatingFood) {
    // увеличиваем счет
    score++;
    // увеличиваем скорость
    speed += Math.max(10, 30 - snake.length * 2);
    // когда мы едим яблоко мы его удаляем и создаем новое
    table[XYtoIndex(headSnake.x, headSnake.y)] = cellTypes.empty;
    createRandomCell(cellTypes.apple);
  } else if (isEatingPear) {
    score += 5;
    speed -= 40;
    if (speed < 0) {
      speed = 0;
    }
    clearPear();
  } else {
    //удаление последнего элемента в массиве
    snake.pop(); // [  ]
  }

  if (pear.cell === null) {
    pear.cell = createRandomCell(cellTypes.pear);
    pear.expiredTime = Date.now() + pear.lifeTimeInMS;
    pear.timeoutId = setTimeout(clearPear, pear.lifeTimeInMS);
  }

  const newHead = { ...headSnake };
  // двигаем голову змеи
  if (dir == diractions.left) newHead.x--;
  if (dir == diractions.right) newHead.x++;
  if (dir == diractions.up) newHead.y--;
  if (dir == diractions.down) newHead.y++;
  newHead.dir = dir;

  let isBorder = table[XYtoIndex(newHead.x, newHead.y)] == cellTypes.border;
  if (isBorder) {
    if (dir == diractions.left) newHead.x = sizeTable - 2;
    if (dir == diractions.right) newHead.x = 1;
    if (dir == diractions.up) newHead.y = sizeTable - 2;
    if (dir == diractions.down) newHead.y = 1;
  }
  if (headSnake.dir !== newHead.dir) {
    headSnake.dir = findDir(headSnake.dir, newHead.dir);
  }

  // добавляет один или более элементов в начало массива и возвращает новую длину массива.
  snake.unshift(newHead);
}
function getDeltaTime() {
  return 300 - speed;
}

function nextTick() {
  gameId = setTimeout(function () {
    nextTick();
    gameLoop();
    drawGame();
  }, getDeltaTime());
}

let gameId;
initialization();
