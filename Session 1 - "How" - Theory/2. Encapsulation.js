// 1. SIMPLE COFFEE MACHINE

class CoffeeMachine {

    waterAmount = 0; 

    constructor(power) {
      this.power = power;
    }
  
  }
  
let coffeeMachine = new CoffeeMachine(100);
  
coffeeMachine.waterAmount = 200;

// 2. PROTECTING WATER AMOUNT

/* class CoffeeMachine {
_waterAmount = 0;
  
set waterAmount(value) {
    if (value < 0) {
    value = 0;
    }
    this._waterAmount = value;
}
  
get waterAmount() {
    return this._waterAmount;
}
  
constructor(power) {
    this._power = power;
}
  
}
  
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
  
// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10 */

// 3. READ ONLY POWER

/*
class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // Error (no setter)

*/

// 4. READ ONLY POWER WITHOUT GET/SET

/*
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);
*/

// 5. PRIVATE WATER LIMIT

/* 
class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error
*/

// 5. CREATING ACCESSOR FOR PRIVATE FIELD - WATER AMOUNT

/*
class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error
*/