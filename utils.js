function findDir(prev, next) {
  if (prev == diractions.up && next == diractions.up) {
    return diractions.up;
  }
  if (prev == diractions.left && next == diractions.up) {
    return diractions.leftUp;
  }
  if (prev == diractions.right && next == diractions.up) {
    return diractions.rightUp;
  }
  if (prev == diractions.down && next == diractions.down) {
    return diractions.down;
  }
  if (prev == diractions.left && next == diractions.down) {
    return diractions.leftDown;
  }
  if (prev == diractions.right && next == diractions.down) {
    return diractions.rightDown;
  }
  if (prev == diractions.left && next == diractions.left) {
    return diractions.left;
  }
  if (prev == diractions.up && next == diractions.left) {
    return diractions.upLeft;
  }
  if (prev == diractions.down && next == diractions.left) {
    return diractions.downLeft;
  }
  if (prev == diractions.right && next == diractions.right) {
    return diractions.right;
  }
  if (prev == diractions.up && next == diractions.right) {
    return diractions.upRight;
  }
  if (prev == diractions.down && next == diractions.right) {
    return diractions.downRight;
  }
}

function setRandomPosition(point) {
  point.x = Math.floor(1 + Math.random() * (sizeTable - 1));
  point.y = Math.floor(1 + Math.random() * (sizeTable - 1));
}

document.addEventListener("keydown", direction);
//проверка клавиш
function direction(event) {
  if (event.keyCode == 37 && snake[0].dir != diractions.right) {
    dir = diractions.left;
  } else if (event.keyCode == 38 && snake[0].dir != diractions.down) {
    dir = diractions.up;
  } else if (event.keyCode == 39 && snake[0].dir != diractions.left) {
    dir = diractions.right;
  } else if (event.keyCode == 40 && snake[0].dir != diractions.up) {
    dir = diractions.down;
  }
}

function cellIsBlock() {
  let headOfSnake = snake[0];
  const i = headOfSnake.y * sizeTable + headOfSnake.x;
  if (table[i] == cellTypes.block) {
    return true;
  } else {
    return false;
  }
}

function checkEndOfGame(headSnake) {
  return cellIsBlock() || checkEatMyself();
}

function checkEatMyself() {
  let isEat = false;
  let headOfSnake = snake[0];
  let i = 1;
  //начало цикла , проверяем значение счетчика
  while (i < snake.length && isEat != true) {
    const portOfBody = snake[i];
    //проверка координат головы и части туловища змейки не равны
    if (headOfSnake.x == portOfBody.x && portOfBody.y == headOfSnake.y) {
      isEat = true;
    }
    // увеличивание счетчика
    i++;
  }
  console.log("isEat", isEat);
  return isEat;
}
