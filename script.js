"use strict";

/* 
Дано ціле число (ввести через 'prompt').
З'ясувати, чи просте воно 
(простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const inputValue = prompt("Please enter some number");

if (inputValue === null) {
  alert("You clicked 'Cancel'");
} 
else if (!inputValue.trim()) {
  alert("You entered nothing (or spaces only)");
} 
else if (isNaN(inputValue)) {
  alert("You entered not a number");
} 
else if (!Number.isInteger(+inputValue)) {
  alert("A floating point number cannot be prime");
} 
else if (+inputValue <= 1) {
  alert("A negative numbers, 1 and 0 are not prime numbers");
} 
else {
  const num = Number(inputValue);
  let resultMessage = "prime number";

  for (let i = 2; i <= num; i++) {

    if (num % i === 0 && i !== num) {
      resultMessage = "not prime number";
      break;
    }
  }

  alert(`${num} is ${resultMessage}`);
}
