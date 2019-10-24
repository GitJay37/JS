let symbol1 = Symbol('Description 1');
let symbol2 = Symbol('Description 2');

let obj = {};

obj[symbol1] = function(){
    console.log("I'm the symbol number 1!! ");
}

obj[symbol1]();
//console.log(symbol1 == symbol2)
