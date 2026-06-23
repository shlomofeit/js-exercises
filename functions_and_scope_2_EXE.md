<div dir="rtl">

# Functions & Scope 2 – תרגילים

---

## תרגילים בסיסיים

---

### תרגיל 1

כתוב פונקציה שמקבלת מספר ומחזירה את המספר **כפול 3**.

---

### תרגיל 2

כתוב פונקציה שמקבלת מחרוזת ומחזירה את **האורך** שלה.

---

### תרגיל 3

כתוב פונקציה שמקבלת מספר ומחזירה אם הוא **חיובי / שלילי / אפס**.

---

### תרגיל 4

כתוב פונקציה שמקבלת שני מספרים ומחזירה את **הגדול** מביניהם.

---

### תרגיל 5

כתוב פונקציה שמקבלת מערך ומחזירה את **מספר האיברים** בו.

---

## תרגילים – Scope והבנה

---

### תרגיל 6

מה יודפס? הסבר למה.

</div>

```javascript
let a = 3;

function test() {
  a = 7;
}

test();
console.log(a);
```

---

<div dir="rtl">

### תרגיל 7

מה יודפס? למה מתקבלת תוצאה כזו?

</div>

```javascript
function test() {
  let a = 5;
}

test();
console.log(a);
```

---

<div dir="rtl">

### תרגיל 8

מצא את הבעיה בקוד. האם זה באג או קוד תקין? הסבר.

</div>

```javascript
let x = 10;

function change() {
  let x = 20;
}

console.log(x);
```

---

<div dir="rtl">

### תרגיל 9

מה יודפס?

</div>

```javascript
let num = 1;

function first() {
  num++;
}

function second() {
  num = num + 2;
}

first();
second();

console.log(num);
```

---

<div dir="rtl">

### תרגיל 10

תקן את הקוד כך שהמשתנה **לא יהיה גלובלי**.

</div>

```javascript
let message = "Hi";

function print() {
  console.log(message);
}
```

---

<div dir="rtl">

## תרגילים בינוניים

---

### תרגיל 11

כתוב פונקציה שמקבלת מערך ומחזירה את **המספר הקטן ביותר** בו.

---

### תרגיל 12

כתוב פונקציה שמקבלת שני מספרים ומחזירה `true` אם הראשון **מתחלק** בשני.

---

### תרגיל 13

כתוב פונקציה שמקבלת מערך של מחרוזות ומחזירה **מחרוזת אחת מחוברת** (join).

---

### תרגיל 14

מה יודפס?

</div>

```javascript
let x = 5;

function test(x) {
  x = x + 10;
  return x;
}

let result = test(x);
console.log(x);
console.log(result);
```

---

<div dir="rtl">

### תרגיל 15

כתוב פונקציה שמקבלת מספר `n` ומדפיסה את כל המספרים מ-1 עד `n` — **בלי להשתמש במשתנה גלובלי**.

---

## תרגילים מתקדמים

---

### תרגיל 16

כתוב פונקציה שמקבלת מערך ומחזירה **מערך חדש ללא כפילויות**.

---

### תרגיל 17

מצא את הבאג:

</div>

```javascript
let sum = 0;

function add(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
}

add([1, 2]);
add([3, 4]);

console.log(sum);
```

<div dir="rtl">

- למה זה בעייתי?
- איך מתקנים?

---

### תרגיל 18

כתוב פונקציה שמקבלת מערך ומחזירה את **סכום האיברים הזוגיים** בלבד.

---

### תרגיל 19

מה יודפס?

</div>

```javascript
let x = 1;

function a() {
  let x = 2;

  function b() {
    console.log(x);
  }

  b();
}

a();
```

---

<div dir="rtl">

### תרגיל 20

שפר את הקוד כך שלא תהיה תלות חיצונית:

</div>

```javascript
let discount = 0.1;

function getPrice(price) {
  return price - price * discount;
}
```

<div dir="rtl">

- הפוך את הפונקציה ליותר גנרית
- בלי שימוש במשתנה גלובלי

</div>
