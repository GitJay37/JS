class User{
    constructor(_name){this._name = _name;}

    get name(){ // Metodo getter "name" hace que la primera letra sea mayuscula
        return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }

    set name(_name){
        this._name = _name;
    }
}

let user = new User("jason");
console.log(user.name) // muestra la acción del metodo name que ingresa o accede a la propiedad "_name"
user.name = "jeison"
console.log(user.name)
// por convención es buena practica nombrar una propiedad con "_" al principio



