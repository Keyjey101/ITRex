const fn2 = require("./maze");

const Maze = [
  ["#", "#", "#", "#", "#", "#", "#", "#", "#"],

  ["#", "+", "+", "+", "#", "+", "+", "+", "#"],

  ["#", "+", "#", "+", "#", "+", "#", "+", "#"],

  ["#", "+", "#", "+", "0", "+", "#", "+", "+"],

  ["#", "#", "#", "+", "#", "#", "#", "+", "#"],

  ["#", "#", "+", "#", "#", "#", "#", "+", "#"],

  ["#", "#", "#", "+", "+", "+", "+", "+", "#"],

  ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
];

console.log(fn2(Maze));
