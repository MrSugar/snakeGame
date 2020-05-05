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

// let array = [20, 30, 40]; // array.length => 3

// function sumOfArray() {
//   let sum = 0;
//   // 1 < 3 => true
//   // 2 < 3 => true
//   // 3 < 3 => false
//   // -----------------------------------------
//   // for (let i = 0; i < array.length; i++) {
//   //   let one = array[i];
//   //   sum = sum + one;
//   // }
//   // -----------------------------------------
//   let = 0;
//   while (i < array.length) {
//     let one = array[i];
//     sum = sum + one;
//     i++;
//   }

// let one = array[0]; // sum = 0 one = 20
// sum = sum + one ;// sum = 20 one = 20
// one = array[1]; // sum = 30 one = 30
// sum = sum + one; // sum = 50 one = 30
// one = array[2]; // sum =50 one =40
// sum = sum + one; // sum =90 one =40

//

//   return sum;
// }

// git pull - подтянуть все новые изменения в проекте

// git add {название файла} - добавить один фаил
// git add . - добавить все измененные файлы

// git commit -m "smth changes" - подписываем наш коммит

// git push

// git status - показывает текущее состояние индекc

// полный сценарий заливки изменений
// git add .
// git commit -m "МЕНЯ ЗВАТЬ ЭЛЭН"
// git push

const apple = "apple";
const banana = "banana";
const lime = "lime";

const array = [];
const price = [];
const priceList = {};

array.push(apple);
array.push(lime);
array.push(banana);

// ['apple', 'lime', 'banana']

const indexLime = array.indexOf(lime); // 1
const indexApple = array.indexOf(apple); // 0
const indexBanana = array.indexOf(banana); // 2

price[indexApple] = 100;
price[indexBanana] = 70;
price[indexLime] = 130;

priceList.apple = price[indexApple]; // { apple: 100, banana: 70, lime: 130 }
priceList.banana = price[indexBanana];
priceList.lime = price[indexLime];
priceList.tomato = 80;

let i;
while (i != 5) {
  i = Math.ceil(Math.random() * 10);
  console.log(i);
}

console.log(array, price, priceList); // [100 130 70]
// []
