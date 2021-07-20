"use strict";

//Вариант второй не затрагивает начальные условия задачи. 
// Можно думаю через .call сделать, но усложнять намеренно код не хотет

let variantChanger = 2

//variant 1
if (variantChanger === 1) {
function crasher(a) {
  try {
    delete a.bla;
  } catch (e) {
    console.log("Error:", e);
  }
}

let a = {
  bla: "bla",
};
// начало блока изменений
Object.seal(a);
// function call
crasher(a);

let tempObj = {};
for (let i in a) {
  tempObj[i] = a[i];
}
a = tempObj;
a.num = 3
// конец блока изменений
console.log(a);
}

//variant 2
else {
function crasher(a) {
  delete a.bla;
}

const a = {
  bla: "bla",
};

// начало блока изменений
let b = crasher;

let old = b;

crasher = function () {
  return console.log("harmless function call");
};
// function call
crasher(a);
crasher = old;
a.num = 3
// конец блока изменений

console.log(a);
}