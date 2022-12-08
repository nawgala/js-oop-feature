let namea = 'sampath' // namea is a globle variable. it can be accessed from any where


function showScope(){ // Lexial scoping
    let message = 'Hi'
    console.log(message + name)
}
showScope();


function greeting(name) {
    let message = "hi "
    // console.log(name)

    function sayHi(name) {
        console.log(message + name)
    }
    sayHi(name)
}
greeting('sampath')

// Closure

for (var index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}

function greeting2(message) {
    return function(name){
         return message + ' ' + name;
    }
 }
 let sayHi = greeting2('Hi');
 let sayHello = greeting2('Hello');
 
 console.log(sayHi('John')); // Hi John
 console.log(sayHello('John')); // Hello John