"use strict";

class Car {
  //constants
  #limit = 5;
  #average = 3;
  //constructor with default settings
  constructor(
    ABS = this.#limit,
    Traction = this.#limit,
    Stability = this.#limit
  ) {
    this.abs = ABS > this.#limit || ABS <= 0 ? this.#limit : ABS;
    this.Traction =
      Traction > this.#limit || Traction <= 0 ? this.#limit : Traction;
    this.Stability =
      Stability > this.#limit || Stability <= 0 ? this.#limit : Stability;
  }
  //get method to use props as simple object
  get props() {
    return this.#carProps();
  }
  //private method
  #carProps() {
    const car = {
      ABS: this.abs,
      "Traction Control": this.Traction,
      Stability: this.Stability,
    };
    return car;
  }
  #checker(num) {
    if (num <= 0 || num > this.#limit)
      throw new Error(
        `cannot set ${num}. Value must be in range from 0 to ${this.#limit}`
      );
  }
  //setters
  setTraction(num) {
    this.#checker(num);
    return (this.Traction = num);
  }
  setStability(num) {
    this.#checker(num);
    return (this.Stability = num);
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
      this.#carProps()
    );
  }

  setDriverAsBeginner() {
    this.#setAllParams(this.#limit);
  }
  setDriverAsGoodDriver() {
    this.#setAllParams(this.#average);
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
