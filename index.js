// Using todays lecture as inspiration, make a little mini project using Javascript and DOM manipulation. Focus is on fun and creativity, don't just remake something using my code.
// Keep it simple, deadline is on thursday. Like I said, if you don't want your project looked at during the thursday lecture, make it clear in the comments of your submission.
// Attached here is the code for the Circle Maker.
// Good luck and have fun!

// console.log("Hello world!");
//

// A simple calculator.
// I made two version of the same calculator, and have commented out one to show the other.
// inputOne + inputTwo automatically turned into a string because of the +, but with adding * 1 behind both names turns it back into a number. A number multiplied by 1 will still only be the given number. (This is the only solution that I found that worked.. I tried using different parse methods but they did not work.) Number() instead of * 1
// Adding .value to operator, inputOne and inputTwo to show the value of the const.
// textContent is what makes the result appear on screen and not only in console
// Using == to make it equal to, (= is only assigning it, so using == makes it check if it is equal)
//

// Access the html trough documents. Using querySelectors instead of getElementByID.
// Connection to input one
const inputOne = document.querySelector("#inputOne");
// Connection to input two
const inputTwo = document.querySelector("#inputTwo");
// Connection to the operators
const operator = document.querySelector("#operator");
// Connection to the result paragraph
const resultText = document.querySelector("#resultText");

// NUMBER ONE
// A function with an if/else statement to go trough the different operators.
//
function calculate() {
  let result = 0;
  if (operator.value == "addition") {
    result = Number(inputOne.value) + Number(inputTwo.value);
  } else if (operator.value == "subtraction") {
    result = inputOne.value - inputTwo.value;
  } else if (operator.value == "multiplication") {
    result = inputOne.value * inputTwo.value;
  } else if (operator.value == "division") {
    result = inputOne.value / inputTwo.value;
  } else {
    result = 0;
  }
  resultText.textContent = result;
}

// NUMBER TWO
// Using a arrow function with a switch to go trough the different operators.
// Remember to break between each case (!!) or it will break
//
// const calculate = () => {
//   switch (operator.value) {
//     case "addition":
//       result = inputOne.value * 1 + inputTwo.value * 1;
//       break;
//     case "subtraction":
//       result = inputOne.value - inputTwo.value;
//       break;
//     case "multiplication":
//       result = inputOne.value * inputTwo.value;
//       break;
//     case "division":
//       result = inputOne.value / inputTwo.value;
//       break;
//     default:
//       result = 0;
//   }
//   resultText.textContent = result;
// };
