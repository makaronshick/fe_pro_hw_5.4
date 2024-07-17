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
else {
  const absInt = Math.abs(parseInt(inputValue));

  if (absInt <= 1) {
    alert("1 and 0 are not prime numbers");
  } 
  else {
    let resultMessage = 'prime number';
    const result = [];
    for (let i = 2; i <= absInt; i++) {

      if (absInt % i === 0) {
        result.push(i);

        if (result.length > 1) {
          resultMessage = 'not prime number';
          break;
        } 
      }
    }

    alert(`${absInt} is ${resultMessage}`);
  }
}
