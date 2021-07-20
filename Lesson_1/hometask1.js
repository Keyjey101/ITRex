"use strict";

class Car {
  //constants
  #limit = 5;
  #average = Math.round(this.#limit / 2);
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
  //setters
  setTraction(num) {
    if (num <= this.#limit && num > 0) return (this.Traction = num);
    else console.log(`Error: cannot set ${num}. Value must be in range from 0 to ${this.#limit}`)
  }
  setStability(num) {
    if (num <= this.#limit && num > 0) return (this.Stability = num);
    else console.log(`Error: cannot set ${num}. Value must be in range from 0 to ${this.#limit}`)
  }
  setABS(num) {
    if (num <= this.#limit && num > 0) return (this.abs = num);
    else console.log(`Error: cannot set ${num}. Value must be in range from 0 to ${this.#limit}`)
  }

  setDriverAsBeginner() {
    this.setTraction(this.#limit);
    this.setStability(this.#limit);
    this.setABS(this.#limit);
    console.log('Settings have been changed, and now there are like:', this.#carProps())
  }
  setDriverAsAverage() {
    this.setTraction(this.#average);
    this.setStability(this.#average);
    this.setABS(this.#average);
    console.log('Settings have been changed, and now there are like:', this.#carProps())
  }
  setDriverAsManiac() {
    this.setTraction(1);
    this.setStability(1);
    this.setABS(1);
    console.log('Settings have been changed, and now there are like:', this.#carProps())
  }
}

const carA = new Car();
const carB = new Car(2, 2, 2);
const carC = new Car(1, -5, 0);

carA.setDriverAsManiac();
carA.setABS(7);
carA.setTraction(1);
carB.setStability(3);
carB.setTraction(4);

