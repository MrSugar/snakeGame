function drawHeadDown(x, y) {
  ctx.drawImage(snakeSpriteSheet, 0, 0, 42, 42, x * box, y * box, box, box);
}

function drawHeadLeft(x, y) {
  ctx.drawImage(snakeSpriteSheet, 0, 42, 42, 42, x * box, y * box, box, box);
}
function drawHeadUp(x, y) {
  ctx.drawImage(snakeSpriteSheet, 0, 84, 42, 42, x * box, y * box, box, box);
}
function drawHeadRight(x, y) {
  ctx.drawImage(snakeSpriteSheet, 0, 126, 42, 42, x * box, y * box, box, box);
}

function drawBodyHorizontal(x, y) {
  ctx.drawImage(snakeSpriteSheet, 126, 42, 42, 42, x * box, y * box, box, box);
}

function drawBodyVertical(x, y) {
  ctx.drawImage(snakeSpriteSheet, 126, 0, 42, 42, x * box, y * box, box, box);
}

function drawBodyDownRight(x, y) {
  ctx.drawImage(snakeSpriteSheet, 42, 0, 42, 42, x * box, y * box, box, box);
}

function drawBodyDownleft(x, y) {
  ctx.drawImage(snakeSpriteSheet, 42, 42, 42, 42, x * box, y * box, box, box);
}

function drawBodyUpLeft(x, y) {
  ctx.drawImage(snakeSpriteSheet, 42, 80, 42, 42, x * box, y * box, box, box);
}

function drawBodyUpRight(x, y) {
  ctx.drawImage(snakeSpriteSheet, 42, 132, 42, 42, x * box, y * box, box, box);
}

function drawTailUp(x, y) {
  ctx.drawImage(snakeSpriteSheet, 84, 0, 42, 42, x * box, y * box, box, box);
}
function drawTailRight(x, y) {
  ctx.drawImage(snakeSpriteSheet, 84, 42, 42, 42, x * box, y * box, box, box);
}
function drawTailDown(x, y) {
  ctx.drawImage(snakeSpriteSheet, 84, 84, 42, 42, x * box, y * box, box, box);
}
function drawTailLeft(x, y) {
  ctx.drawImage(snakeSpriteSheet, 84, 126, 42, 42, x * box, y * box, box, box);
}

function drawSnake() {
  //создаем счетчик выставляем значение 0
  let i = 0;
  // начало цикла , проверяем значение счетчика
  console.log(snake);
  while (i < snake.length) {
    console.log(i, snake[i].dir);

    //рисуем голову змеи
    if (i == 0) {
      if (
        [diractions.left, diractions.leftUp, diractions.leftDown].includes(
          snake[i].dir
        )
      ) {
        drawHeadLeft(snake[i].x, snake[i].y);
      } else if (
        [diractions.right, diractions.rightDown, diractions.rightUp].includes(
          snake[i].dir
        )
      ) {
        drawHeadRight(snake[i].x, snake[i].y);
      } else if (
        [diractions.downLeft, diractions.downRight, diractions.down].includes(
          snake[i].dir
        )
      ) {
        drawHeadDown(snake[i].x, snake[i].y);
      } else {
        drawHeadUp(snake[i].x, snake[i].y);
      }
    } else {
      //рисуем хвост змеи

      if (i == snake.length - 1) {
        if (
          [diractions.left, diractions.leftUp, diractions.leftDown].includes(
            snake[i].dir
          )
        ) {
          drawTailLeft(snake[i].x, snake[i].y);
        } else if (
          [diractions.right, diractions.rightDown, diractions.rightUp].includes(
            snake[i].dir
          )
        ) {
          drawTailRight(snake[i].x, snake[i].y);
        } else if (
          [diractions.downLeft, diractions.downRight, diractions.down].includes(
            snake[i].dir
          )
        ) {
          drawTailDown(snake[i].x, snake[i].y);
        } else {
          drawTailUp(snake[i].x, snake[i].y);
        }
      } else {
        if (snake[i].dir == diractions.up) {
          drawBodyVertical(snake[i].x, snake[i].y);
        }
        if (snake[i].dir == diractions.leftUp) {
          drawBodyUpRight(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.rightUp) {
          drawBodyUpLeft(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.down) {
          drawBodyVertical(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.leftDown) {
          drawBodyDownRight(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.rightDown) {
          drawBodyDownleft(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.left) {
          drawBodyHorizontal(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.upLeft) {
          drawBodyDownleft(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.downLeft) {
          drawBodyUpLeft(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.right) {
          drawBodyHorizontal(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.upRight) {
          drawBodyDownRight(snake[i].x, snake[i].y);
        }

        if (snake[i].dir == diractions.downRight) {
          drawBodyUpRight(snake[i].x, snake[i].y);
        }
      }
    }

    i++;
  }
}

function drawGame() {
  //рисуем фон
  ctx.drawImage(ground, 0, 0);
  //рисуем яблоко
  ctx.drawImage(foodImg, food.x * box, food.y * box);

  drawSnake();

  //выбор цвета
  ctx.fillStyle = "blue";
  //выбор шрифта счетчика и размера
  ctx.font = "50px Arial";
  //пишем строчку score  в координатах box
  ctx.fillText("score: " + score, box * 2.5, box * 1.7);

  ctx.fillStyle = "yellow";
  ctx.font = "28px Gabriola";
  ctx.fillText("speed: " + speed, box * 13, box * 1.7);
}
