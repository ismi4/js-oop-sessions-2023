class Character {

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    dying = () => {
        console.log("dead");
    }

}

class Bug extends Character {

    constructor(...args){
        super(...args)
        this.species = "bug";
    }

    sayPhrase = () => {
        console.log(`Your debugger doesn't work with me, because I am bug ${this.name}!`); 
    }

    hide = () => {
        console.log("You can't catch me now!");
    }

}

const bug1 = new Bug("buggy", "bugac");
bug1.dying();
bug1.name = "haha"
bug1.sayPhrase = () => {
    
}

/* 
class Robot extends Character {

    constructor(name){
        this.name = name;
        this.species = "robot";
        // why not like this
        // this.sayPhrase = () => {}
    }

    sayPhrase = () => {
        console.log(`Hasta la vista ---- because I am robot ${this.name}!`); 
    }

    hide = () => {
        console.log("Run run run cuz I am robot!");
    }

}

class Alien extends Character {

    constructor(name){
        this.name = name;
        this.species = "alien"
    }

    sayPhrase = () => {
        console.log(`Your debugger doesn't work with me, because I am an alien ${this.name}!`); 
    }

    hide = () => {
        console.log("You can't catch me now, cuz I am an alien!");
    }

}

const bug1 = new Bug("bugica 1");
const robot1 = new Robot("robot 1");
const alien1 = new Alien("alien 1");

alien1.dying()
console.log(robot1.name); */