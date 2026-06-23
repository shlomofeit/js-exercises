// תרגיל 1
const age = 20;

if (age >= 18) {
  console.log("מבוגר");
} else {
  console.log("קטין");
}

// תרגיל 2
const number = 7;

if (number % 2 === 0) {
  console.log("זוגי");
} else {
  console.log("אי זוגי");
}

// תרגיל 3
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("ברוך הבא");
} else {
  console.log("אנא התחבר");
}

// תרגיל 4
const num = 9;

if (num > 0) {
  console.log("חיובי");
} else {
  if (num === 0) {
    console.log("אפס");
  } else {
    console.log("שלילי");
  }
}

// תרגיל 5
const a = 10;
const b = 20;

const result_5 = a > b ? "a" : a == b ? "equal" : "b";

// if (a > b) {
//   console.log("a");
// } else {
//   if (a == b) {
//     console.log("equal");
//   } else {
//     console.log("b");
//   }
// }
console.log(result_5);

// תרגיל 6
const password = "1234";

if (password === "1234") {
  console.log("גישה מאושרת");
} else {
  console.log("סיסמה שגויה");
}

// תרגיל 7
const x = 15;
const in_range = 20 > x && x > 10;

console.log(in_range);

// תרגיל 8
const grade = 83;
let result = "";

if (grade >= 90) {
  result = "מצוין";
} else if (grade >= 75) {
  result = "טוב";
} else if (grade >= 60) {
  result = "עובר";
} else {
  result = "נכשל";
}

// console.log(result);

// תרגיל 9
const temp = 28;
let recommendation;

if (temp >= 30) {
  recommendation = "חם מאוד, שתה מים";
} else if (temp >= 20) {
  recommendation = "נעים בחוץ";
} else if (temp < 20) {
  recommendation = "קר, קח ג'קט";
}

console.log(recommendation);

// תרגיל 10
const age1 = 20;
const hasID = true;

if (age1 >= 18 && hasID) {
  console.log("success");
} else {
  console.log("denied");
}

// תרגיל 11
const isADmin = false;
const isManager = true;

if (isADmin || isManager) {
  console.log("success");
} else {
  console.log("denied");
}

// תרגיל 12
const hasCard = false;
let result3 = "אין גישה";

if (hasCard) {
  result3 = "כניסה מאושרת";
}

console.log(result3);

// תרגיל 13
const name = "";
let result13 = name || "אורח";

console.log(result13);

// תרגיל 14
const arr = [];
result14 = arr.length ? "not null" : "null";

console.log(result14);

// תרגיל 15
const x15 = "5";
const y15 = 5;

// משווה ללא בדיקה של type
console.log(x15 == y15);

// השוואה מדויקת ממש כולל type
console.log(x15 === y15);

// תרגיל 16
const username16 = "admin";
const password16 = "1234";

const result16 =
  username16 === "admin" && password16 === "1234" ? "success" : "denied";

console.log(result16);

// תרגיל 17
const age17 = 67;

const result17 =
  age17 >= 65 ? "הנחת גמלאים" : age17 < 18 ? "הנחת נוער" : "אין הנחה";

console.log(result17);

// תרגיל 18
const day = "שני";

const weekend = day === "שישי" || day === "שבת" ? 'סופ"ש וינפש' : "יום עבודה";
console.log(weekend);

// תרגיל 19
const total = 250;

const result_19 =
  total >= 300 ? "משלוח חינם" : total >= 150 ? "משלוח 20 ₪" : "משלוח 40 ₪";

console.log(result_19);

// תרגיל 20
const role = "editor";

let result_20 = "";

if (role === "admin") {
  result_20 = "כל הגישה";
} else if (role === "editor") {
  result_20 = "עריכה בלבד";
} else if (role === "viewer") {
  result_20 = "קריאה בלבד";
}

console.log(result_20);
