(function testVariableDeclaration() {

    var test2;
    console.log(test2, 'no value assigned yet');

    global.test1 = 'global var';

    test2 = 'not global';

    console.log(test1, global.test1 === test1);
    console.log(test2, global.test2 === test2);


    console.log(test3);

})()

test2