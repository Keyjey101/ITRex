"use strict";

function counter(num = 1) {
  let current = num;
  let addValue = 2;

  return () => {
    if (current && current % 5 === 0) {
      current = current / 5;
      addValue = 3;
    }
    if (current && current % 7 === 0) {
      current -= 7;
      addValue = 1;
    }
    current += addValue;
    return current;
  };
}

const number = counter(1);

console.log(number());
console.log(number());
console.log(number());
console.log(number());
console.log(number());
console.log(number());
