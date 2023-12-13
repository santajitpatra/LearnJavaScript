// what are (High order function)
// function (fn) {return fn} 
function multiplyBy(arg) {
  return function (number) {
    return number * arg;
  };
}

let multiplyByTwo = multiplyBy(2)
let res = multiplyByTwo(50)
console.log(`HOF = ${res}`)