/*
    Con la palabra (this) se pueden crear propiedades y metodos
    dentro de un objeto.
*/
function Constructor(param_title){ // Función constructora
    this.title = param_title // this crea una propiedad
    this.inscription = function(user){ // this crea una función o method
        return(user+" Inscription successfull")
    }
}

let couseJavascript = new Constructor("Pro JS Course")
let courseRuby = new Constructor("Pro Ruby Course")
let coursePython = new Constructor("Pro Python Course")

//console.log(new_object.inscription("Rodmy"))
console.log(couseJavascript.title)
console.log(courseRuby.title)
console.log(coursePython.title)