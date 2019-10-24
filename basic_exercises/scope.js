/* 
    //Global scope

    let num_a = 2
    let num_b = 8

    function suma(){
        // Local Scope
        let result = num_a + num_b
        console.log("Resultado: "+result)
    }
    suma()

    var name = "Jeison"

    function function_name(){
        var name = "De Jesús"
        console.log(name)
    }
    function_name()
    console.log(name)
*/

// variable global automatica

function function_name(){
    name = "De Jesús"
}
function_name()
console.log(name)




