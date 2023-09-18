// 1. DEFAULT BINDING

function foo(){
    console.log(this.a);
}

let a = 5;

foo();
//why think about use strict nuances???

// 2. IMPLICIT BINDING - when there is an explicit context object==

let obj = {
    a: 2,
    foo: foo
};

obj.foo();

// Implicit binding lost

let bar = obj.foo;

bar();

function doFoo(fn){
    fn();
}

doFoo(obj.foo);

//setTimeout(obj.foo, 100);

// 3. EXPLICIT BINDING

foo.call(obj);

// hard binding

function tar(){
    foo.call(obj);
}

tar();

//setTimeout(tar, 100);
//tar.call(w)

// simple `bind` helper
function bind(fn, obj) {
    return function() {
        return fn.apply( obj, arguments);
    };
}