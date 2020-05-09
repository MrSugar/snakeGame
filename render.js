function drawHeadDown(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 0, 0, 64, 64, _x * box, _y * box, box, box);
}

function drawHeadLeft(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 0, 64, 64, 64, _x * box, _y * box, box, box);
}
function drawHeadUp(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 0, 128, 64, 64, _x * box, _y * box, box, box);
}
function drawHeadRight(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 0, 192, 64, 64, _x * box, _y * box, box, box);
}

function drawBodyHorizontal(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 192, 64, 64, 64, _x * box, _y * box, box, box);
}

function drawBodyVertical(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 192, 0, 64, 64, _x * box, _y * box, box, box);
}

function drawBodyDownRight(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 64, 0, 64, 64, _x * box, _y * box, box, box);
}

function drawBodyDownleft(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 64, 64, 64, 64, _x * box, _y * box, box, box);
}

function drawBodyUpLeft(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 64, 128, 64, 64, _x * box, _y * box, box, box);
}

function drawBodyUpRight(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 64, 192, 64, 64, _x * box, _y * box, box, box);
}

function drawTailUp(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 128, 0, 64, 64, _x * box, _y * box, box, box);
}
function drawTailRight(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 128, 64, 64, 64, _x * box, _y * box, box, box);
}
function drawTailDown(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 128, 128, 64, 64, _x * box, _y * box, box, box);
}
function drawTailLeft(_x, _y, _ctx) {
  _ctx.drawImage(snakeSpriteSheet, 128, 192, 64, 64, _x * box, _y * box, box, box);
}

function drawCell(_x, _y, _ctx) {
  const randomTextureX = Math.ceil(Math.random() * 3);
  const randomTextureY = Math.ceil(Math.random() * 3);
  _ctx.drawImage(mapSprite, randomTextureX * 64, randomTextureY * 64, 64, 64, _x * box, _y * box, box, box);
}

function drawApple(_x, _y, _ctx) {
  _ctx.drawImage(cellTexture, 0, 192, 64, 64, _x * box, _y * box, box, box);
}

function drawPear(_x, _y, _ctx) {
  _ctx.drawImage(cellTexture, 64, 192, 64, 64, _x * box, _y * box, box, box);
}

function drawBlock(_x, _y, type, _ctx) {
  if (type == cellTypes.block) {
    _ctx.drawImage(cellTexture, 64, 64, 64, 64, _x * box, _y * box, box, box);
  } else if (type == cellTypes.border && withBorder) {
    _ctx.fillStyle = "green";
    _ctx.fillRect(_x * box, _y * box, box, box);
    if (_x == 0 && _y == 0) {
      _ctx.drawImage(cellTexture, 0, 0, 64, 64, _x * box, _y * box, box, box);
    } else if (_x == sizeTable - 1 && _y == 0) {
      _ctx.drawImage(cellTexture, 128, 0, 64, 64, _x * box, _y * box, box, box);
    } else if (_x == 0 && _y == sizeTable - 1) {
      _ctx.drawImage(cellTexture, 0, 128, 64, 64, _x * box, _y * box, box, box);
    } else if (_x == sizeTable - 1 && _y == sizeTable - 1) {
      _ctx.drawImage(cellTexture, 128, 128, 64, 64, _x * box, _y * box, box, box);
    } else {
      if (_x == 0) {
        _ctx.drawImage(cellTexture, 0, 64, 64, 64, _x * box, _y * box, box, box);
      } else if (_y == 0) {
        _ctx.drawImage(cellTexture, 64, 0, 64, 64, _x * box, _y * box, box, box);
      } else if (_x == sizeTable - 1) {
        _ctx.drawImage(cellTexture, 128, 64, 64, 64, _x * box, _y * box, box, box);
      } else if (_y == sizeTable - 1) {
        _ctx.drawImage(cellTexture, 64, 128, 64, 64, _x * box, _y * box, box, box);
      }
    }
  }
}

function drawSnake(_ctx) {
  //создаем счетчик выставляем значение 0
  let i = snake.length - 1;
  // начало цикла , проверяем значение счетчика
  while (i >= 0) {
    //рисуем голову змеи
    if (i == 0) {
      if ([diractions.left, diractions.upLeft, diractions.downLeft].includes(snake[i].dir)) {
        drawHeadLeft(snake[i].x, snake[i].y, _ctx);
      } else if ([diractions.right, diractions.downRight, diractions.upRight].includes(snake[i].dir)) {
        drawHeadRight(snake[i].x, snake[i].y, _ctx);
      } else if ([diractions.down, diractions.leftDown, diractions.rightDown].includes(snake[i].dir)) {
        drawHeadDown(snake[i].x, snake[i].y, _ctx);
      } else {
        drawHeadUp(snake[i].x, snake[i].y, _ctx);
      }
    } else {
      //рисуем хвост змеи

      if (i == snake.length - 1) {
        if ([diractions.left, diractions.upLeft, diractions.downLeft].includes(snake[i].dir)) {
          drawTailLeft(snake[i].x, snake[i].y, _ctx);
        } else if ([diractions.right, diractions.upRight, diractions.downRight].includes(snake[i].dir)) {
          drawTailRight(snake[i].x, snake[i].y, _ctx);
        } else if ([diractions.down, diractions.leftDown, diractions.rightDown].includes(snake[i].dir)) {
          drawTailDown(snake[i].x, snake[i].y, _ctx);
        } else {
          drawTailUp(snake[i].x, snake[i].y, _ctx);
        }
      } else {
        if (snake[i].dir == diractions.up) {
          drawBodyVertical(snake[i].x, snake[i].y, _ctx);
        }
        if (snake[i].dir == diractions.leftUp) {
          drawBodyUpRight(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.rightUp) {
          drawBodyUpLeft(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.down) {
          drawBodyVertical(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.leftDown) {
          drawBodyDownRight(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.rightDown) {
          drawBodyDownleft(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.left) {
          drawBodyHorizontal(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.upLeft) {
          drawBodyDownleft(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.downLeft) {
          drawBodyUpLeft(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.right) {
          drawBodyHorizontal(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.upRight) {
          drawBodyDownRight(snake[i].x, snake[i].y, _ctx);
        }

        if (snake[i].dir == diractions.downRight) {
          drawBodyUpRight(snake[i].x, snake[i].y, _ctx);
        }
      }
    }

    i--;
  }
}

function drawTable(_ctx, dynamic) {
  for (let i = 0; i < table.length; i++) {
    const { x: _x, y: _y } = indexToXY(i);

    if (table[i] == cellTypes.apple && dynamic === true) {
      drawApple(_x, _y, _ctx);
    } else if (table[i] == cellTypes.pear && dynamic === true) {
      drawPear(_x, _y, _ctx);
    } else if (table[i] == cellTypes.border && dynamic === false) {
      drawBlock(_x, _y, table[i], _ctx);
    } else if (table[i] == cellTypes.block && dynamic === false) {
      drawBlock(_x, _y, table[i], _ctx);
    } else if (dynamic === false) {
      drawCell(_x, _y, _ctx);
    }
  }
}

function drawText(_ctx, text = "", _x = 0, _y = 0, color = "black", fontSize = 14, fontStyle = "Gabriola") {
  //выбор цвета
  _ctx.fillStyle = color;
  //выбор шрифта счетчика и размера
  _ctx.font = `${fontSize}px ${fontStyle}`;
  //пишем строчку score  в координатах box
  _ctx.fillText(text, _x * box, _y * box);
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTable(ctx, true);
  if (!drewBG) {
    drawTable(backgroundCtx, false);
    drewBG = true;
  }
  drawSnake(ctx);

  drawText(ctx, `score: ${score}`, 0, 1, "blue", 30);
  drawText(ctx, `speed: ${speed}`, 13, 1, "yellow", 30);
  if (pear.cell !== null) {
    drawText(
      ctx,
      Math.ceil((pear.expiredTime - Date.now()) / 1000),
      pear.cell.x + 0.4,
      pear.cell.y + 0.8,
      "black",
      22,
      "Gabriola bold"
    );
  }
}
