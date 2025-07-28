// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// Sample Input:
// 1000
// 700

// Sample Output:
// 300

var takaIhave = 1000;
var oneKgOranges = 300;
var oneKgApples = 400;
var orangesApples = oneKgOranges + oneKgApples;
var returnMoney = takaIhave - orangesApples;

console.log(
  "Ans for the Task 1: I will get " + returnMoney + " BDT in return."
);

// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.5;

var totalMarks = mathematics + biology + chemistry + physics + bangla;

var averageMarks = totalMarks / 5;

console.log(
  "Ans for the Task 2: The average marks wil be " +
    averageMarks.toFixed(2) +
    " in total."
);

// Task-3
// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// Sample Input:
// 119

// Sample Output:
// 4

var givenNumber = 119;

var result = 119 % 5;

console.log(
  "Ans for the Task 3: The remainder will be " + result + " as the output"
);

// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.

var a = isNaN("11");
var a = isNaN(2 - 10);

console.log(
  "Ans for the Task 4: When we need to check whether a variable value is not a number, we can use isNaN(). Here the both variable value is false, 1st one is string but number and 2nd one is a valid negative number."
);
