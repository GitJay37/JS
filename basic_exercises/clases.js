/* 
    Las clases en javascripts no esxisten, es orientado a prototipos
*/ 

class MyClass{
    constructor(param_title){
        this.title = param_title
    }

    insription(user){
        return("Hola "+user  )
    }
} // class declaration

let testPrint = new MyClass("Probando Título")

console.log(testPrint.title)
console.log(testPrint.insription("Jeison"))






let Class = class{} // class expression

let User = class User{} // class expression