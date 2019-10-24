function exe(func){
    //func() 
    //func.call(user) // (call) Llama al objeto user y executa su sentencia
    //func.apply(user) // (apply) hace lo mismo que call según entendí
}                    
 
let user = {
    name: "Jeison De Jesús",
    lastname: "Anillo Pérez",
    full_name: function(){
        console.log(this.name+" "+this.lastname)
    }
}
 
//user.full_name()
//exe(user.full_name.bind(user))
//exe(user.full_name)
 
function saludo(nombre){
    console.log("Hola!! "+nombre)
}
 
//saludo.apply(window, ["Rodmy"]) // (call) funciona enviando el segundo argumento
// como un string y (apply) debe ser un array



