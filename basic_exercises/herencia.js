// Herencia

class Player{
    play(){ this.video.play();}
    duration(){ return this.video.duration() / 100;}
}


class Vimeo extends Player{
    open(){ this.redirectToVimeo(this.video);}
}

class Youtube extends Player{
    open(){ this.redirectToYoutube(this.video);}
}

let video = new Youtube();

class CustomDate extends Date{}; // Herencia de clases por default de JS
class Collection extends Array{}; // Herencia de clases por default de JS

//function User(){}
//class Admin extends User{} // Herencia de la función constructora User

// Overwrite

class User{
    constructor(nombre){
        this.nombre = nombre
    }

    saludo(){
        console.log("Hola "+ this.nombre);
    }
}

class Administrator extends User{
    constructor(nombre){
        super(nombre);
    }

    saludo(){
        super.saludo();
        console.log("Panel Admin");
    }
}

let admin = new Administrator("Jeison De Jesús Anillo Pérez");
admin.saludo();