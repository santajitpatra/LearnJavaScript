// 2.. continue method
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) continue;
  console.log(`continue = ${i}`);
}

//1.. what are (High order function)
// function (fn) {return fn}
function multiplyBy(arg) {
  return function (number) {
    return number * arg;
  };
}

let multiplyByTwo = multiplyBy(2);
let res = multiplyByTwo(50);
console.log(`HOF = ${res}`);
