// תרגיל 1
const arr1 = [1, 2, 3, 4, 5];

const dubDup = arr1.map((n) => n * 2);

console.log(dubDup);

// תרגיל 2
const words2 = ["hello", "world"];
const upperWords2 = words2.map((word) => word.toUpperCase());

console.log(upperWords2);

// תרגיל 3
const price2 = [10, 20, 25];
const total2 = price2.map((n) => n * 1.17);

console.log(total2);

// תרגיל 4
const even4 = [1, 2, 3, 4, 5, 6];
const onlyEven = even4.filter((n) => n % 2 == 0);

console.log(onlyEven);

// תרגיל 5

// תרגיל 6
const users6 = [
  { name: "Avi", age: 17 },
  { name: "Dana", age: 22 },
];
const moreThan18 = users6.filter((user) => user["age"] >= 18);

console.log(moreThan18);

// תרגיל 7
const users7 = [
  { name: "Avi", age: 17 },
  { name: "Dana", age: 22 },
];

const onlyNames7 = users7.map((name) => name["name"]);

console.log(onlyNames7);

// תרגיל 8
const prices8 = [
  { name: "computer", price: 1500 },
  { name: "airpods", price: 650 },
  { name: "bag", price: 4 },
];
const total8 = prices8
  .filter((price) => price["price"] > 100)
  .map((total) => {
    return { ...total, price: Math.round(total.price * 1.1) };
  });

console.log(total8);

// תרגיל 9
const numbers9 = [10, 20, 30];
const result9 = numbers9.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(result9);

// תרגיל 10
const numbers10 = [10, 20, 30];
const result10 = numbers9.reduce((acc, curr) => {
  return acc * curr;
}, numbers10[0]);

console.log(result10);

// תרגיל 11

// תרגיל 12
const ages = [
  { name: "Shlomo", age: 29 },
  { name: "Miriam", age: 24 },
];
const averageAge =
  ages.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0) / ages.length;

console.log(averageAge);

// תרגיל 13

// תרגיל 14

// תרגיל 15

// תרגיל 16

// תרגיל 17

// תרגיל 18

// תרגיל 19

// תרגיל 20

// תרגיל 21

// תרגיל 22

// תרגיל 23

// תרגיל 24
const arr24 = [1, 2, 5, 8, 2, 66, 22];
const sortArr = arr24.sort((a, b) => b - a);

console.log(sortArr);

// תרגיל 25
const arr25 = [1, 2, 5, 8, 2, 66, 22];
const sortArr25 = arr25.sort((a, b) => a - b);

console.log(sortArr25);

// תרגיל 26

// תרגיל 27

// תרגיל 28

// תרגיל 29
const arr29 = [1, 2, 5, 8, 2, 66, 22];
arr29.splice(1, 2);

console.log(arr29);

// תרגיל 30

// תרגיל 31

// תרגיל 32
const arr32 = [1, 2, 5, [8, 2], 66, 22];
const flat32 = arr32.flat();

console.log(flat32);

// תרגיל 33

// תרגיל 34

// תרגיל 35

// תרגיל 36
const arr36 = [1, 2, 5, 8];
const result36 = arr36
  .filter((num) => num % 2 == 0)
  .map((num) => num * 2)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

console.log(result36);

// תרגיל 37

// תרגיל 38
const arr38 = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];
const result38 = arr38.reduce((acc, curr) => {
  const currentVal = curr.type;
  if (!acc[currentVal]) {
    acc[curr.type] = [];
  }
  acc[currentVal].push(curr);
  return acc;
}, {});

console.log(result38);

// תרגיל 39
const arr39 = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];
const result39 = arr39.reduce((acc, curr) => {
  const currentVal = curr.type;
  if (!acc[currentVal]) {
    acc[curr.type] = [];
  }
  if (!acc[currentVal].length) {
    acc[currentVal].push(curr);
  }
  return acc;
}, {});

console.log(result39);

// תרגיל 40

// תרגיל 41
const products = [
  { name: "Laptop", price: 800, inStock: true, category: "tech" },
  { name: "Phone", price: 400, inStock: false, category: "tech" },
  { name: "Shirt", price: 50, inStock: true, category: "fashion" },
];

const chain41 = products
  .filter((product) => product.inStock && product.price > 100)
  .sort((a, b) => a.price - b.price)
  .map((productName) => productName.name)
  .join(", ");
console.log(chain41);
