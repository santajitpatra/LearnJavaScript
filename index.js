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
