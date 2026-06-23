// function hello() {
//   console.log("Hello world");
// }

// const helloWorld = function () {
//   console.log("hello world");
// };

// helloWorld();
// hello();

// const hello = () => {
//   console.log("Hello world");
// };

// hello();

// const hello = (name) => {
//   console.log(`${name}`);
// };

// hello("shsh");

function logger(cb) {
  const start = Date.now();
  cb();
  times.push(Date.now() - start);
}

const times = [];

// logger(() => console.log("start"));

function createMessage(name) {
  return `hello ${name}`;
}

// const msg = createMessage("avi");

const createMessage2 = (name) => `hello ${name}`;

const msg2 = createMessage2("Shlomo");

console.log(msg2);

function momo(name, age) {
  console.log(name, age);
}

momo((age = 30), (name = "Shlomo"));
