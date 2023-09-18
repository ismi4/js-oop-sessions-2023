function foo(){
    var a = 2;
    // can we create a bridge between lexical scopes of foo and bar?
    this.bar();
}

function bar(){
    console.log(this.a);
}


foo();