"use strict";

class Car {
  #maxHelpValue = 5;
  #goodDirverHelpValue = 3;
  //constructor with default settings
  constructor(
    abs = this.#maxHelpValue,
    traction = this.#maxHelpValue,
    stability = this.#maxHelpValue
  ) {
    this.abs = abs > this.#maxHelpValue || abs <= 0 ? this.#maxHelpValue : abs;
    this.Traction =
      traction > this.#maxHelpValue || traction <= 0 ? this.#maxHelpValue : traction;
    this.Stability =
      stability > this.#maxHelpValue || stability <= 0 ? this.#maxHelpValue : stability;
  } 
  get carProps() {
    return {
      ABS: this.abs,
      "Traction Control": this.traction,
      Stability: this.stability,
    };
  }
  #checker(num) {
    if (num <= 0 || num > this.#maxHelpValue)
      throw new Error(
        `cannot set ${num}. Value must be in range from 0 to ${this.#maxHelpValue}`
      );
  }
  //setters
  setTraction(num) {
    this.#checker(num);
    return (this.traction = num);
  }
  setStability(num) {
    this.#checker(num);
    return (this.stability = num);
  }
  setABS(num) {
    this.#checker(num);
    return (this.abs = num);
  }
  #setAllParams(param) {
    this.setTraction(param);
    this.setStability(param);
    this.setABS(param);
    console.log(
      "Settings have been changed, and now there are like:",
      this.carProps
    );
  }

  setDriverAsBeginner() {
    this.#setAllParams(this.#maxHelpValue);
  }
  setDriverAsGoodDriver() {
    this.#setAllParams(this.#goodDirverHelpValue);
  }
  setDriverAsManiac() {
    this.#setAllParams(1);
  }
}

const carA = new Car();
const carB = new Car(2, 2, 2);
const carC = new Car(1, -5, 0);

carA.setDriverAsManiac();
carA.setABS(2);
carA.setTraction(1);
carB.setStability(3);
carB.setTraction(4);
carC.setDriverAsGoodDriver()
console.log(carA);
console.log(carB);
console.log(carC);
