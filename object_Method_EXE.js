// תרגיל 1
const lower = function (str) {
  return str.toLowerCase();
};

console.log(lower("AlIce"));

// תרגיל 2
function trimStr(str) {
  return str.trimStart().trimEnd();
}

console.log(trimStr("  hello  world   "));

// תרגיל 3
const emailValidation = (email) => email.includes("@");

console.log(emailValidation("abc@gmail.com"));

// תרגיל 4
const endW = function (email) {
  return email.endsWith(".com");
};

console.log(endW("abc@gmail.com"));

// תרגיל 5
const firstName = (name) => name.slice(0, name.indexOf(" "));

console.log(firstName("Shlomo Feit"));

// תרגיל 6
function strToArray(name) {
  return name.split(" ");
}

console.log(strToArray("Shlomo Feit"));

// תרגיל 7
function alwaysGood(bad) {
  return bad.replace("bad", "good");
}

console.log(alwaysGood("evrything is bad"));

// תרגיל 8
function manyA(str) {
  return str.split("a").length - 1;
}

console.log(manyA("banana"));

// תרגיל 9
const startJS = (str) => str.startsWith("JS");

console.log(startJS("JScript"));

// תרגיל 10
const onlyFirstTen = function (str) {
  return str.slice(0, 10);
};

console.log(onlyFirstTen("Shlomo Feit"));

// תרגיל 11
const addZeros = (num) => "0".repeat(5 - num.toString().length) + num;

console.log(addZeros(443));

// תרגיל 12
function repeatN(str, n) {
  return str.repeat(n);
}

console.log(repeatN("a", 6));

// תרגיל 13
const cleanAndUpper = function (str) {
  const tempList = [];

  for (const word of str.trim().split(" ")) {
    tempList.push(word[0].toUpperCase() + word.slice(1));
  }

  return tempList.join(" ");
};

console.log(cleanAndUpper("  john doe  "));

// תרגיל 14
function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys({ a: "a", ab: "b" }));

// תרגיל 15
function getValues(obj) {
  return Object.values(obj);
}

console.log(getValues({ a: "a", ab: "b" }));

// תרגיל 16
function getEntries(obj) {
  for (const item of Object.entries(obj)) {
    console.log(`${item[0]}: ${item[1]}`);
  }
}

getEntries({ a: "a", ab: "b" });

// תרגיל 17
function getAverage(obj) {
  let total = 0;
  const val = Object.values(obj);

  val.forEach((num) => (total += num));

  return total / val.length;
}

console.log(getAverage({ math: 80, english: 90, science: 70 }));

// תרגיל 18
function mergeTwo(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log(mergeTwo({ first_name: "Shlomo" }, { last_name: "feit" }));

// תרגיל 19
const generalSettings = (defaultSetting, userSetting) => ({
  ...defaultSetting,
  ...userSetting,
});

const defaultS = { theme: "light", lang: "en" };
const userS = { lang: "he" };

console.log(generalSettings(defaultS, userS));

// תרגיל 20
const keyInObj = (obj, key) => Object.hasOwn(obj, key);

console.log(keyInObj({ a: 1, b: 2 }, "s"));

// תרגיל 21
const obj = Object.freeze({ a: 1 });
obj.a = 2;

console.log(obj);

// תרגיל 22
const toObj = (arr) => Object.fromEntries(arr);

console.log(
  toObj([
    ["name", "Alice"],
    ["age", 25],
  ]),
);

// תרגיל 23
function discountTenP(obj) {
  const arr = Object.entries(obj);
  const dis = arr.map(([name, price]) => (price[1] = [name, price * 0.9]));

  const result = Object.fromEntries(dis);

  return result;
}

console.log(discountTenP({ apple: 10, banana: 5, mango: 20 }));

// תרגיל 24
function onlyNum(obj) {
  const result = Object.fromEntries(
    Object.entries(obj).filter(([key_, val]) => Number.isFinite(val)),
  );

  return result;
}

console.log(onlyNum({ a: "a", b: 123 }));

// תרגיל 25
function copyObj(obj) {
  return { ...obj };
}

// תרגיל 26
const equalKeys = function (obj1, obj2) {
  console.log(Object.keys(obj1), Object.keys(obj2));
  //   console.log(["a", "b"] === ["a", "b"]);

  return Object.keys(obj1).join(",") === Object.keys(obj2).join(",");
};

console.log(equalKeys({ a: 2, b: 3 }, { a: 22, b: 55 }));
