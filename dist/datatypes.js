"use strict";
// String
let fname;
let lname;
fname = "Vishnu";
lname = "Satish";
console.log(fname.toUpperCase(), lname.toUpperCase());
//Number
let age;
age = parseInt("25");
console.log(age);
//Boolean
let isValid = false;
console.log(isValid);
//Array
let empList;
empList = ["Hello", "World"];
let numList;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let newNum = numList[0];
let results = numList.filter((e) => e < 5);
let result = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
let emp = empList.find((e) => e == "Hello");
console.log(sum);
let c = 2 /* Color.Blue */;
//tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(1, 2);
console.log(swapNumbs[1]);
//any
let department;
department = "Computer Science";
