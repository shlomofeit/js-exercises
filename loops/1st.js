import input from "analiza-sync";

// *חלק 1*

// // תרגיל 1

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // תרגיל 2
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // תרגיל 3
// const numbers = [1, 2, 3, 4, 5];

// let sum_3 = 0;

// for (const result_3 of numbers) {
//   sum_3 += result_3;
// }

// console.log(sum_3);

// // תרגיל 4
// const names = ["דנה", "יוסי", "מיכל", "רון"];

// for (const name of names) {
//   console.log(name);
// }

// // תרגיל 5
// const numbers_5 = [2, 5, 8, 11, 14, 17, 20];

// for (const number_5 of numbers_5) {
//   if (number_5 % 2 === 0) {
//     console.log(number_5);
//   }
// }

// // תרגיל 6
// const numbers_6 = [3, 99, 12, 45, 78];
// let result_6 = numbers_6[0];

// for (const number_6 of numbers_6) {
//   if (number_6 > result_6) {
//     result_6 = number_6;
//   }
// }
// console.log(result_6);

// // תרגיל 7
// const word = "javascript";

// for (const letter of word) {
//   console.log(letter);
// }

// // תרגיל 8
// const numbers_8 = [1, 2, 3, 4];

// for (const num of numbers_8) {
//   console.log(num * 2);
// }

// *חלק 2*

// // תרגיל 9
// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// // תרגיל 10
// let input_10;

// while (input_10 !== "stop") {
//   input_10 = input("input: ");
// }

// // תרגיל 11
// let input_11;
// let sum_11 = 0;

// while (true) {
//   input_11 = Number(input("input: "));
//   if (input_11 != 0) {
//     break;
//   }
//   sum_11 += input_11;
// }
// console.log(`sum of inputs: ${sum_11}`);

// // תרגיל 12
// const secret = 7;
// let input_12 = input("input: ");

// while (input_12 != secret) {
//   input_12 = input("input: ");
// }

// console.log("kulululu");

// // תרגיל 13
// let x = 1;

// while (x <= 20) {
//   console.log(x);
//   x++;
// }

// // תרגיל 14
// let password = "";

// while (password != "1234") {
//   password = input("password: ");
// }

// // תרגיל 15
// let count = 0;

// do {
//   console.log(count);
// } while (count > 0);

// // תרגיל 16
// let choice;

// do {
//   choice = input("input: ");
// } while (choice != "exit");

// // תרגיל 17
// const numbers = [1, 3, 7, 9, 15, 2];

// for (let number of numbers) {
//   if (number >= 10) {
//     console.log(number);
//     break;
//   }
// }

// // תרגיל 18
// const numbers = [5, -1, 8, -3, 10];

// for (let number of numbers) {
//   if (number < 0) {
//     continue;
//   }
//   console.log(number);
// }

// // תרגיל 19
// const ages = [12, 15, 18, 21, 25];

// for (const age of ages) {
//   if (age >= 18) {
//     console.log(age);
//     break;
//   }
// }

// // תרגיל 20
// const arr = [10, 20, 30, 40, 50];

// for (const num of arr) {
//   console.log(num);
// }

// // תרגיל 21
// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// for (const num of numbers) {
//   if (num % 2 != 0) continue;

//   sum += num;
// }
// console.log(sum);

// // תרגיל 22
// const target = 25;
// const numbers = [10, 15, 20, 25, 30];
// let find = false;

// for (const num of numbers) {
//   if (num == target) {
//     console.log(num);
//     find = true;
//     break;
//   }
// }
// console.log(find);

// // תרגיל 23
// const word = "hello world";

// for (const letter of word) {
//   console.log(letter.toUpperCase());
// }

// // תרגיל 24
// const numbers = [2, 4, 6, 8, 10, 12];

// for (const num of numbers) {
//   if (num > 8 && num % 2 == 0) {
//     console.log(num);
//     break;
//   }
// }

// תרגיל 25
const students = [
  { name: "דנה", grade: 55 },
  { name: "יוסי", grade: 90 },
  { name: "מיכל", grade: 78 },
  { name: "רון", grade: 45 },
];

for (const student of students) {
  if (student.grade >= 60) {
    console.log(student);
  }

  if (student.grade == 100) break;
}
