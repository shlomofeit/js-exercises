// // תרגיל 1
// const numbers = [1, 2, 3, 4];

// console.log(numbers);

// // תרגיל 2
// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// // תרגיל 3
// const fruits = ["apple", "banana", "cherry"];

// fruits[1] = "mango";

// console.log(fruits);

// // תרגיל 4
// const fruits = ["apple", "banana", "cherry"];

// const add = fruits.push("orange");
// console.log(add); // מחזיר את האורך החדש של המערך
// console.log(fruits);

// // תרגיל 5
// const fruits = ["apple", "banana", "cherry"];

// const rm = fruits.pop();

// console.log(rm);
// console.log(fruits);

// // תרגיל 6
// const fruits = ["apple", "banana", "cherry"];

// fruits.unshift("kiwi");

// console.log(fruits);

// // תרגיל 7
// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits.shift());
// console.log(fruits);

// // תרגיל 8
// const arr = ["a", "b", "c", "d"];

// const change = arr.splice(1, 1);

// console.log(change);

// console.log(arr);

// // תרגיל 9
// const arr = ["a", "b", "c", "d"];

// const change = arr.splice(1, 0, "x");

// console.log(change); // לא מחזיר כלום כשאין מחיקה
// console.log(arr);

// // תרגיל 10
// const arr = ["a", "b", "c", "d"];

// const change = arr.splice(2, 1, "y");

// console.log(change); // מחזיר מערך עם מה שנמחק
// console.log(arr);

// // תרגיל 11
// const arr = [1, 2, 3, 4, 5, 66];

// let len = arr.length;
// console.log(len);
// console.log(arr[len - 1]);

// // תרגיל 12
// const arr = [22, "abc", true];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// // תרגיל 13
// const nums = [10, 20, 30];

// for (const item of nums) {
//   console.log(item);
// }

// // תרגיל 14
// const arr = [5, 10, 15];
// let sum = 0;

// for (const item of arr) {
//   sum += item;
// }

// console.log(sum);

// // תרגיל 15
// const arr = [3, 8, 12, 1];

// for (const item of arr) {
//   if (item > 5) {
//     console.log(item);
//   }
// }

// // תרגיל 16
// const obj = { name: "Shlomo", age: 29 };

// console.log(obj);

// // תרגיל 17
// const person = { name: "Dan", age: 25 };

// console.log(person.name, person.age);
// console.log(person["name"], person["age"]);

// // תרגיל 18
// const obj = { name: "Shlomo", age: 29 };

// obj.city = "Jerusalem";
// obj.city = "Beit-Shemesh";

// console.log(obj.city);
// console.log(obj);

// // תרגיל 19
// const obj = { name: "Shlomo", age: 29 };

// delete obj.age;

// console.log("age" in obj);

// // תרגיל 20
// const student = {
//   name: "Yael",
//   grades: [90, 80, 100],
// };

// console.log(student.grades[0]);
// student.grades.push(95);
// student.grades.splice(1, 1);

// console.log(student);

// // תרגיל 21
// const product = {
//   name: "Laptop",
//   price: 3500,
//   inStock: true,
// };

// for (const item in product) {
//   console.log(`${item}: ${product[item]}`);
// }

// // תרגיל 22
// const user = {
//   username: "admin",
//   role: "manager",
//   active: true,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));

// for (const key in user) {
//   console.log(`${key} = ${user[key]}`);
// }

// תרגיל 23
const order = {
  id: 101,
  customer: {
    name: "Roi",
    address: {
      city: "Tel Aviv",
      zip: "12345",
    },
  },
};

console.log(order.customer.address.city);
order.customer.address.zip = 6789;

order.customer.phone = "0533403925";

delete order.customer.address.city;

console.log(order);
