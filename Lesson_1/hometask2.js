"use strict";

function counter(num = 1) {
  let current = num;
  let addValue = 2;

  return () => {
    if (!current) return (current += addValue);
    if (current && current % 5 === 0) {
      addValue = 3;
      return (current = current / 5);
    }
    if (current && current % 7 === 0) {
      addValue = 1;
      return (current -= 7);
    }
    current += addValue;
    return current;
  };
}
const number = counter(2);

console.log(number());
console.log(number());
console.log(number());
console.log(number());
console.log(number());
console.log(number());
