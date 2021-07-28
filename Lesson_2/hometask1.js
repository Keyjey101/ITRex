function lampSwithcer(amountOfLamps = 20, arrayOfInversions = [2, 3, 8]) {
  const originalLampState = new Array(amountOfLamps);
  originalLampState.fill(false);
  arrayOfInversions.forEach((element) => {
    for (let i = element; i <= amountOfLamps; i += element) {
      originalLampState[i] = !originalLampState[i];
    }
  });
  const newLampState = originalLampState.filter((x) => x === true);
  return newLampState.length;
}
console.log(lampSwithcer());
console.log(lampSwithcer(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]));
