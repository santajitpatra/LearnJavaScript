var month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Array Basic
console.log(month[2]);
console.log(month.length);
console.log(month[month.length - 1]);

// For Loop
for (var i = 0; i < month.length; i++) {
  console.log(month[i]);
}

// For in
for (let elements in month) {
  console.log(elements);
}

// For of
for (let elements of month) {
  console.log(elements);
}

// forEach
month.forEach(function (element, index, array) {
  console.log(element + " " + index + " " + array);
});

// indexOf
console.log(month.indexOf("Jun", 6));

// lastIndexOf
console.log(month.lastIndexOf("Jun", 4));

// includes
console.log(month.includes("Jun", 6));

// find
const price = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];

console.log(price.find((amount) => amount < 500));

// findIndex
console.log(price.findIndex((amount) => amount > 2000));

// filter
console.log(price.filter((amount, index) => amount < 200));

// sort
console.log(month.sort());
console.log(price.sort());

// push
var animals = [
  "Donkey",
  "Bat",
  "Bear",
  "Alpaca",
  "Ant",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
];

const count = animals.push("Goat", "Hare");
console.log(count);
console.log(animals);

//unshift (added to the starting number also)
const counter = animals.unshift("Gnu", "Goose", "Gull");
console.log(counter);
console.log(animals);

//pop
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(days);
console.log(days.pop());
console.log(days);

// shift
console.log(days);
console.log(days.shift());
console.log(days);

// splice
var cars = ["Saab", "Volvo", "BMW"];
//add
const newDays = cars.splice(cars.length,0,"Tata")
console.log(cars)
console.log(newDays)

//delete and update
const indexOfCar = cars.indexOf("BMW")

if(indexOfCar != -1) {
  const updatedCar = cars.splice(indexOfCar,1,"Bmw")
  console.log(cars)
} else {
  console.log("No cars found")
}

// delete
const indexOfCarDelete = cars.indexOf("Volvo")

if(indexOfCar != -1) {
  const updatedCar = cars.splice(indexOfCarDelete,1)
  console.log(cars)
  console.log(updatedCar)
} else {
  console.log("No cars found")
}