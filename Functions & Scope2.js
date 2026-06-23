// // תרגיל 1
// function dup3(num) {
//   return num * 3;
// }

// console.log(dup3(3));

// // תרגיל 2
// function len(str) {
//   return str.length;
// }

// console.log(len("abcd"));

// // תרגיל 3
// function whatNum(num) {
//   let result;
//   if (num > 0) {
//     result = "+";
//   } else if (num < 0) {
//     result = "-";
//   } else if (num == 0) {
//     result = 0;
//   }
//   return result;
// }

// const whatNum = (num) => (num > 0 ? "+" : num < 0 ? "-" : num == 0 ? 0 : null);
// console.log(whatNum(55));

// // תרגיל 4
// function bigger(a, b) {
//   if (a == b) {
//     return "equal";
//   } else if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(bigger(7, 2));

// // תרגיל 5
// function len(arr) {
//   return arr.length;
// }

// console.log(len([1, 2, 3]));

// // תרגיל 6
// // יודפס 7, כי זה בלי let וזה מעדכון את המשתנה הגלובלי.

// // תרגיל 7
// // שגיאה כי זה משתנה בscope פנימי ואתה ניגש מהחיצוני.

// תרגיל 8

// תרגיל 9

// תרגיל 10

// // תרגיל 11
// function smaller(arr) {
//   return Math.min(...arr);
// }

// console.log(smaller([11, 23, 4, 56]));

// // תרגיל 12
// function equal(a, b) {
//   return a % b === 0;
// }

// console.log(equal(4, 2));

// // תרגיל 13
// function joinString(arr) {
//   return arr.join(" ");
// }

// console.log(joinString(["ab", "cd"]));

// תרגיל 14

// // תרגיל 15
// function oneTon(num) {
//   for (i = 1; i < num; i++) {
//     console.log(i);
//   }
// }

// oneTon(5);

// // תרגיל 16
// function noDup(arr) {
//   return [...new Set(arr)];
// }

// console.log(noDup([1, 1, 3, 4, 4, 5]));

// תרגיל 17

// תרגיל 18

// תרגיל 19

// תרגיל 20

function getPrice(price, discount) {
  return price - price * discount;
}
