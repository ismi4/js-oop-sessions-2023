let myObject = {

    get a() {
        return this._a;
    },
       
    set a(val) {
        this._a = val * 2;
    }

};

Object.defineProperty(myObject, "b", {
    get: function(){ return this.a * 2 },
    enumerable: true
});

console.log(myObject.a); 
console.log(myObject.b);