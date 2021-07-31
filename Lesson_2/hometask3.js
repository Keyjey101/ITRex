function copy(numersOfCopy, xerox1, xerox2) {
  let seconds = 0;
  let min = 0;
  let max = Math.max(xerox1, xerox2) * (numersOfCopy - 1);

  while (max - min > 1) {
    let middle = Math.floor((max + min) / 2);
    if (
      Math.floor(middle / xerox2) + Math.floor(middle / xerox1) >=
      numersOfCopy - 1
    ) {
      max = middle;
    } else min = middle;
  }
  return max + Math.min(xerox1, xerox2);
}

console.log(copy(5, 1, 2));
