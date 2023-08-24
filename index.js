// Closure in javascript
const myName = document.getElementById("my_name");
const myBtn = document.getElementById("my_btn");

console.log("Hi, There");

// right way to get the data promises by async function
async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(await data.json());
}
getData();

// 2nd way to get the data (wrong way)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Closure in javascript
function makeTextSizeChangeHandler(size) {
  function sizeChange() {
    myName.style.fontSize = `${size}px`;
  }
  return sizeChange;
}

const size12 = makeTextSizeChangeHandler(12);
const size20 = makeTextSizeChangeHandler(20);
const size52 = makeTextSizeChangeHandler(52);
const size5 = makeTextSizeChangeHandler(5);

myBtn.addEventListener("click", size12);

// Currying in javascript
function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(`sent email to ${to} with subject ${subject} body: ${body}`);
    };
  };
}
// OR by using ES7
// const sendAutoEmail = to => subject => body => {
//  console.log(`sent email to ${to} with subject ${subject} body: ${body}`);
// }

let step1 = sendAutoEmail(`santajitpatra@gmail.com`);
let step2 = step1(`New email confirmation`);
step2(`Hello everyone I know you are here`);

// Composition in Javascript
function add(a, b) {
  return a + b;
}
function multiplying(args) {
  return args[0] * args[1];
}
function square(value) {
  return value * value;
}
function addNum(val) {
  return val + 2;
}

//old functions
function composeTwoFunctions(fun1, fun2) {
  return function (a, b) {
    return fun2(fun1(a, b));
  };
}

//OR ES7 functions
const C2F = (f1, f2) => (a, b) => f2(f1(a, b));

const task = C2F(add, square);
console.log(task(2, 3));

// Composition passing multiple functions
//old functions

function composition(...fns) {
  return function (...value) {
    return fns.reduce((a, b) => b(a), value);
  };
}
//OR ES7 functions
const compositionAll =
  (...fns) =>
  (...value) =>
    fns.reduce((a, b) => b(a), value);

const task2 = compositionAll(multiplying, square, addNum);
console.log(task2(2, 5));

// IIFE in javascript
(() => console.log("first task"))();
const atm = function (initalBalance) {
  let balance = initalBalance;
  function withdraw(amt) {
    if (amt > balance) {
      return "balance not enough";
    } else {
      balance -= amt;
      return balance;
    }
  }
  return { withdraw };
};

const money = atm(1000);
console.log(money.withdraw(600));
console.log(money.withdraw(200));



// Generator Functions in Javascript 
function* makeMyIterator(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

const one = makeMyIterator(1, 30, 2);

// for (const val of one) {
//   console.log(val);
// }

const nextBtn = document.getElementById("next_btn");
nextBtn.addEventListener("click", () =>{
nextBtn.innerText = one.next().value
})