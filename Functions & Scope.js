// // תרגיל 1
// const sayHello = (name) => `Hello ${name}`;

// console.log(sayHello("Shlomo"));

// // תרגיל 2
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 7));

// // תרגיל 3
// const even = function (num) {
//   return num % 2 == 0;
// };

// console.log(even(44));

// // תרגיל 4
// const firstA = (arr) => arr[0];

// console.log(firstA([11, 22, 33]));

// // תרגיל 5
// const upperLetter = function (str) {
//   return str.toUpperCase();
// };

// console.log(upperLetter("Hi Shlomo"));

// // תרגיל 6

// // יודפס 10 ואז 5 כי ה10 מוגבל לscope של הפונקציה.

// // תרגיל 7
// function test() {
//   let y = 10;
//   console.log(y);
// }

// test();
// // 2 בעיות. גם המשתנה היה גלובלי בלי let וגם ההדפסה לא הייתה עובדת עם let מבחוץ.

// תרגיל 8
// // המשתנה x = 1 נוצר בסקופ הגלובלי ולכן פונקציה a מחפשת אותו כי אין לה משתנה x, אבל x=2 נוצר רק בסקופ של b ובהפעלה של ש הוא לא מכיר את הסקופ של a.

// // תרגיל 9
// function tryError() {
//   let name = "Shlomo";
// }

// tryError();
// console.log(name);

// // תרגיל 10
// function add() {
//   let count = 0;
//   count++;
// }

// // תרגיל 11
// function getArr(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(getArr([1, 3, 5, 5]));

// // תרגיל 12
// const square = (num) => num ** 2;

// function getSquare(num) {
//   return square(num);
// }

// console.log(getSquare(4));

// // תרגיל 13
// // יחזיר 10. המשתנה x הגלובלי מיותר פה.

// // תרגיל 14
// const getEven = function (arr) {
//   let newArr = [];
//   for (const num of arr) {
//     if (num % 2 == 0) {
//       newArr.push(num);
//     }
//   }
//   return newArr;
// };

// console.log(getEven([1, 2, 4, 5, 6]));

// // תרגיל 15
// let total = 0;

// function addToTotal(num) {
//   total += num;
// }

// function reset() {
//   let total = 0;
// }

// addToTotal(5);
// addToTotal(10);
// reset();
// console.log(total);

// // מסוכן כי הפונקציה של האיפוס מאפסת את המשתנה הגלובלי. הוספתי let למשתנה בפונקציה reset אבל כרגע היא לא עושה כלום בעצם.
