async function  plus(){
    return val1 + val2
}

async function calc(){
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, 500, 5)
    });
}

// Async retorna una promesa interna sin necesidad de especificar en la función
// Lo que queremos que haga la promesa

let result = plus(2, 5)
console.log(result)