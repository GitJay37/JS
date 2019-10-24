let user = {name: "Jay"}

console.log(typeof(user));

//console.log(user.__proto__)

let animal = Object.create(null)

animal.vivo = true

animal.estaVivo = function(){ if(this.vivo) console.log("Sigue vivo") }

let perro = Object.create(animal)

console.log(perro.estaVivo()) // Herencia de prototipos

