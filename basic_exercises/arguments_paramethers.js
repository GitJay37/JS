// Argumentos
// Parametros

function calc(num){ // -> Parametro o variable
    let result = num * num
    console.log(result)
}
calc(2) // -> Argumento

function test(num = 0){ // -> Parametro o variable por default
    let result = num * num
    console.log(result)
}
test() 

function test1(){ // -> Parametro o variable por default
    result = arguments[0] + arguments[1] + arguments[2]
    console.log(result)
}
test1(3,4,3) 

// los parametros que reciben valor por default deben ir al final



