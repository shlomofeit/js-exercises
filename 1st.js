// משתנים
const name = "Shlomo";
let age = 25;
age = 26; // מותר, כי זה let

// סוגי נתונים + typeof
let price = 19.9;
console.log(typeof price);      // "number"
console.log(typeof name);       // "string"
console.log(typeof true);       // "boolean"

// תנאי
if (age >= 18) {
  console.log("בגיר");
} else {
  console.log("קטין");
}

// לולאת for - כשיודעים כמה פעמים
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// לולאת while - כשהתנאי קובע מתי לעצור
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// for...of - מעבר על Array
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Object
const user = { name: "Shlomo", age: 25 };
console.log(user.name); // "Shlomo"

console.log(typeof user)