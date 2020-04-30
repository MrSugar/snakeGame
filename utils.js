function findDir(prev, next) {
  if (!prev) {
    prev = next;
  }
  if (prev == "up" && next == "up") {
    return diractions.up;
  }
  if (prev == "left" && next == "up") {
    return diractions.leftUp;
  }
  if (prev == "right" && next == "up") {
    return diractions.rightUp;
  }
  if (prev == "down" && next == "down") {
    return diractions.down;
  }
  if (prev == "left" && next == "down") {
    return diractions.leftDown;
  }
  if (prev == "right" && next == "down") {
    return diractions.rightDown;
  }
  if (prev == "left" && next == "left") {
    return diractions.left;
  }
  if (prev == "up" && next == "left") {
    return diractions.upLeft;
  }
  if (prev == "down" && next == "left") {
    return diractions.downLeft;
  }
  if (prev == "right" && next == "right") {
    return diractions.right;
  }
  if (prev == "up" && next == "right") {
    return diractions.upRight;
  }
  if (prev == "down" && next == "right") {
    return diractions.downRight;
  }
}

function setRandomPosition(point) {
  point.x = Math.floor(Math.random() * 17 + 1);
  point.y = Math.floor(Math.random() * 15 + 3);
}

document.addEventListener("keydown", direction);
//проверка клавиш
function direction(event) {
  if (event.keyCode == 37 && prevDir != "right") {
    dir = "left";
  } else if (event.keyCode == 38 && prevDir != "down") {
    dir = "up";
  } else if (event.keyCode == 39 && prevDir != "left") {
    dir = "right";
  } else if (event.keyCode == 40 && prevDir != "up") {
    dir = "down";
  }
}

function checkEndOfGame(headSnake) {
  //край карты
  const checkBorder =
    headSnake.x < 1 || headSnake.x > 17 || headSnake.y < 3 || headSnake.y > 17;

  return checkBorder || checkEatMyself();
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
