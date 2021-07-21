"use strict";

function crasher(a) {
  delete a.bla;
}

const a = {
  bla: "bla",
};

// начало блока изменений

const b = Object.assign({}, a)
  crasher(a);
for (let key in b) {
  a[key] = b[key]
}
// конец блока изменений

console.log(a);