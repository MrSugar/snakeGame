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

function drawCell(_x, _y) {
  ctx.drawImage(cellTexture, 0, 86, 172, 172, _x * box, _y * box, box, box);
}

function drawApple(_x, _y) {
  ctx.drawImage(foodImg, _x * box, _y * box);
}

function drawPear(_x, _y) {
  ctx.drawImage(pearImg, _x * box, _y * box);
}

function drawBlock(_x, _y) {
  // console.log(_x, _y);
  ctx.fillStyle = "green";
  ctx.fillRect(_x * box, _y * box, box, box);
}

function drawSnake() {
  //создаем счетчик выставляем значение 0
  let i = snake.length - 1;
  // начало цикла , проверяем значение счетчика
  while (i >= 0) {
    //рисуем голову змеи
    if (i == 0) {
      if ([diractions.left, diractions.upLeft, diractions.downLeft].includes(snake[i].dir)) {
        drawHeadLeft(snake[i].x, snake[i].y);
      } else if ([diractions.right, diractions.downRight, diractions.upRight].includes(snake[i].dir)) {
        drawHeadRight(snake[i].x, snake[i].y);
      } else if ([diractions.down, diractions.leftDown, diractions.rightDown].includes(snake[i].dir)) {
        drawHeadDown(snake[i].x, snake[i].y);
      } else {
        drawHeadUp(snake[i].x, snake[i].y);
      }
    } else {
      //рисуем хвост змеи

      if (i == snake.length - 1) {
        if ([diractions.left, diractions.upLeft, diractions.downLeft].includes(snake[i].dir)) {
          drawTailLeft(snake[i].x, snake[i].y);
        } else if ([diractions.right, diractions.upRight, diractions.downRight].includes(snake[i].dir)) {
          drawTailRight(snake[i].x, snake[i].y);
        } else if ([diractions.down, diractions.leftDown, diractions.rightDown].includes(snake[i].dir)) {
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

    i--;
  }
}

function drawTable() {
  for (let i = 0; i < table.length; i++) {
    const { x, y } = indexToXY(i);

    if (table[i] == cellTypes.empty) {
      drawCell(x, y);
    } else if (table[i] == cellTypes.apple) {
      drawApple(x, y);
    } else if (table[i] == cellTypes.pear) {
      drawPear(x, y);
    } else if (table[i] == cellTypes.border) {
      drawBlock(x, y);
    } else {
      drawBlock(x, y);
    }
  }
}

function drawText(text = "", _x = 0, _y = 0, color = "black", fontSize = 14, fontStyle = "Gabriola") {
  //выбор цвета
  ctx.fillStyle = color;
  //выбор шрифта счетчика и размера
  ctx.font = `${fontSize}px ${fontStyle}`;
  //пишем строчку score  в координатах box
  ctx.fillText(text, _x * box, _y * box);
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTable();

  drawSnake();

  drawText(`score: ${score}`, 0, 1, "blue", 30);
  drawText(`speed: ${speed}`, 13, 1, "yellow", 30);
  if (pear.cell !== null) {
    drawText(
      Math.ceil((pear.expiredTime - Date.now()) / 1000),
      pear.cell.x + 0.4,
      pear.cell.y + 0.8,
      "black",
      22,
      "Gabriola bold"
    );
  }
}
