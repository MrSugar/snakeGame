function gameLoop() {
  if (checkEndOfGame(snake[0])) {
    clearTimeout(gameId);
    if (confirm("Go next?")) {
      initialization();
    }
  }

  let headSnake = snake[0];
  // если голова змеи находится на клетке с едой
  let isEatingFood = headSnake.x == food.x && headSnake.y == food.y;

  if (isEatingFood) {
    // увеличиваем счет
    score++;
    // увеличиваем скорость
    speed += Math.max(10, 30 - snake.length * 2);
    //перенос еды на новую случайную клетку
    setRandomPosition(food);
  } else {
    //удаление последнего элемента в массиве
    snake.pop(); // [  ]
  }

  const newHead = { ...headSnake };
  // двигаем голову змеи
  if (dir == diractions.left) newHead.x--;
  if (dir == diractions.right) newHead.x++;
  if (dir == diractions.up) newHead.y--;
  if (dir == diractions.down) newHead.y++;
  newHead.dir = dir;

  if (headSnake.dir !== newHead.dir) {
    headSnake.dir = findDir(headSnake.dir, newHead.dir);
  }

  // добавляет один или более элементов в начало массива и возвращает новую длину массива.
  snake.unshift(newHead);
}
// TODO fix speed
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
