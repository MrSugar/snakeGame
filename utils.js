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

function cellIs(headOfSnake, type) {
  const i = headOfSnake.y * sizeTable + headOfSnake.x;
  if (table[i] == type) {
    return true;
  } else {
    return false;
  }
}

function checkEndOfGame(headOfSnake) {
  return (
    (withBorder && cellIs(headOfSnake, cellTypes.border)) ||
    cellIs(headOfSnake, cellTypes.block) ||
    checkEatMyself(headOfSnake)
  );
}

function checkEatMyself(headOfSnake) {
  let isEat = false;
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

function XYtoIndex(_x, _y) {
  return _y * sizeTable + _x;
}

function indexToXY(index) {
  return {
    y: Math.floor(index / sizeTable),
    x: index % sizeTable,
  };
}

function checkPointInSnake(_x, _y) {
  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x == _x && snake[i].y == _y) {
      return true;
    }
  }
  return false;
}

function createRandomCell(type) {
  let randomX = 1 + Math.floor(Math.random() * (sizeTable - 2));
  let randomY = 1 + Math.floor(Math.random() * (sizeTable - 2));

  while (table[XYtoIndex(randomX, randomY)] != cellTypes.empty && checkPointInSnake(randomX, randomY)) {
    randomX = 1 + Math.floor(Math.random() * (sizeTable - 2));
    randomY = 1 + Math.floor(Math.random() * (sizeTable - 2));
  }

  table[XYtoIndex(randomX, randomY)] = type;
  return { x: randomX, y: randomY };
}

function clearPear() {
  if (pear.cell !== null) {
    table[XYtoIndex(pear.cell.x, pear.cell.y)] = cellTypes.empty;
  }
  clearTimeout(pear.timeoutId);
  pear.cell = null;
}
