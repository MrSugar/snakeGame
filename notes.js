// Задачка на завтра:
// Сделать проверку что змея есть сама себя
// Как:
// в каждом кадре нужно проверять что координата головы не равна ни с одной координатой части тела
//

// Условные операторы:
// &&,  "и"
// ||,  "или"
// !,   "не"
// >,   "больше"
// <,   "меньше"
// >=,   "больше или равно"
// <=,   "меньше или равно"
// ==,   "равенство"
// ===,  "строгое равенство"
// !=,   "не равенство"

// a && b   *
// 0 && 0 = 0
// 1 && 0 = 0
// 0 && 1 = 0
// 1 && 1 = 1

// a || b   +
// 0 || 0 = 0
// 1 || 0 = 1
// 0 || 1 = 1
// 1 || 1 = 1

// let a = "10";

// if (a == 10) {
//   console.log("a == 10");
// }

// if (a === "10") {
//   console.log('a === "10"');
// }

// if (a === 10) {
//   // не попадем
// }

let array = [20, 30, 40]; // array.length => 3

function sumOfArray() {
  let sum = 0;
  // 1 < 3 => true
  // 2 < 3 => true
  // 3 < 3 => false
  // -----------------------------------------
  // for (let i = 0; i < array.length; i++) {
  //   let one = array[i];
  //   sum = sum + one;
  // }
  // -----------------------------------------
  let = 0;
  while (i < array.length) {
    let one = array[i];
    sum = sum + one;
    i++;
  }

  // let one = array[0]; // sum = 0 one = 20
  // sum = sum + one ;// sum = 20 one = 20
  // one = array[1]; // sum = 30 one = 30
  // sum = sum + one; // sum = 50 one = 30
  // one = array[2]; // sum =50 one =40
  // sum = sum + one; // sum =90 one =40

  //

  return sum;
}
//найти змейку , новый фон ,

// drawHeadDown(0, 0);
// drawHeadLeft(1, 0);
// drawHeadUp(2, 0);
// drawHeadRight(3, 0);

// drawBodyHorizontal(0, 1);
// drawBodyVertical(1, 1);

// drawBodyDownRight(0, 2);
// drawBodyDownleft(1, 2);
// drawBodyUpLeft(2, 2);
// drawBodyUpRight(3, 2);

// drawTailUp(0, 3);
// drawTailRight(1, 3);
// drawTailDown(2, 3);
// drawTailLeft(3, 3);

// скачать фотошоп и найти красивый фон