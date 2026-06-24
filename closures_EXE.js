// תרגיל 1
function createLogger() {
  console.log("Hello");
}

createLogger();

// תרגיל 2
function createGreeting(name) {
  let uName = name;
  function printHello() {
    console.log(`Hello ${uName}`);
  }
  return printHello;
}

createGreeting("Shlomo")();

// תרגיל 3
function createCounter() {
  let counter = 0;

  function increment() {
    counter++;
    return counter;
  }
  return increment;
}

const counter = createCounter();
counter();
counter();
console.log(counter());

// תרגיל 4
function outer() {
  let x = 10;
  return function () {
    console.log(x);
  };
}

const fn = outer();
fn(); // מחזיר 10 כי יש פה closure שמחזיק reference למשתנה x.

// תרגיל 5
function createMultiplier(x) {
  function dup(y) {
    return x * y;
  }
  return dup;
}

const double = createMultiplier(2);
console.log(double(5));

// תרגיל 6
function createAdder(num1) {
  function addNum(num2) {
    return num1 + num2;
  }
  return addNum;
}

const add5 = createAdder(5);
console.log(add5(3));

// תרגיל 7
function createSecret() {
  let var7 = "Shlomo";
  return {
    getName: function () {
      return var7;
    },

    changeName: function (newName) {
      if (typeof newName === typeof var7) {
        var7 = newName;
        return "success";
      } else {
        return "Name must be string";
      }
    },
  };
}

const myName = createSecret();

console.log(myName.getName());
console.log(myName.changeName("Miriam"));
console.log(myName.getName());

// תרגיל 8
function once(fn) {
  let runned = false;

  function checkRunned() {
    if (!runned) {
      runned = true;
      return fn();
    }
  }
  return checkRunned;
}

function printOnce() {
  console.log("Hello only once");
}

const oneRun = once(printOnce);

oneRun();
oneRun();

// תרגיל 9
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1);
// }
// // הפונקציה מאפשרת לפונקציה לרוץ בדיליי של x מילי שניות.

// תרגיל 10
// skip

// תרגיל 11
// skip

// תרגיל 12
const createStack = function () {
  const arr = [];

  return {
    peek: function () {
      if (arr.length) {
        return arr[arr.length - 1];
      } else {
        return "emty";
      }
    },

    push: function (item) {
      arr.push(item);
    },

    pop: function () {
      arr.pop();
    },
  };
};

const arrManeger = createStack();

console.log(arrManeger.peek());
arrManeger.push("123");
arrManeger.pop();
arrManeger.push("abc");
console.log(arrManeger.peek());

// תרגיל 13
function createIdGenerator() {
  let id = 0;
  function generator() {
    id++;
    return id;
  }

  return generator;
}

const gen = createIdGenerator();

gen();
gen();

console.log(gen());

// תרגיל 14
// skip

// תרגיל 15
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
      }
    },
    withdraw: function (amount) {
      if (balance - amount >= 0) {
        balance -= amount;
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const myAccount = createBankAccount(100);

myAccount.deposit(50);
myAccount.withdraw(5);
console.log(myAccount.getBalance());
