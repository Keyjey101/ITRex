function copy(n = 4, x = 1, y = 1) {
  let seconds = 0;
  let min = 0;
  let max = Math.max(x, y) * (n - 1);

  while (max - min > 1) {
    let middle = Math.floor((max + min) / 2);
    if (Math.floor(middle / y) + Math.floor(middle / x) >= n - 1) {
      max = middle;
    } else min = middle;
  }
  return max + Math.min(x, y);
}
console.log(copy())
console.log(copy(5, 1, 2));
