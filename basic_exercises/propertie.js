function User() {}
    User.prototype.saludo = function(){
    console.log("Hola");
}

function Admin(){}
    Admin.prototype = new User();{

}

let user = new User();
let jay = Object.create(user)
let jason = new Admin();

user.saludo();
jay.saludo();
jason.saludo();
/*
console.log(user.__proto__)
console.log(User.prototype)
console.log(user.__proto__ === User.prototype)
*/