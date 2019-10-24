// Mayor de edad
const my_name = "Jeison De Jesús Anillo Pérez"

function mayor_menor(edad){
    if (edad >= 18){
        let result = console.log("Eres mayor de edad")
    }else{
        let result = console.log("No eres mayor de edad")
    }
    console.log(result)
}
mayor_menor(12)

/*
 Declarar una variable let permite que solo dicha variable se alcance 
 dentro del bloque de código.

 Por otro lado declarar una variable var permite tener acceso global en la función

*/

function mayor_menor(edad){
    let result
    if (edad >= 18){
        result = console.log("Eres mayor de edad")
    }else{
        result = console.log("No eres mayor de edad")
    }
    console.log(result)
}
mayor_menor(18)

/*
    let si está muy proximo al bloque de código funcionará
*/
// my_name = "Juanchito Polo" esto dará error porque es una constante
console.log(my_name)