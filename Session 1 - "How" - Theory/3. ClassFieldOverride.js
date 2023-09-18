class Animal {
    name = 'animal';
  
    constructor() {
      alert(this.name); // (*)
    }
  }
  
  class Rabbit extends Animal {
    name = 'rabbit';
  }
  
  new Animal(); // animal
  new Rabbit(); // animal