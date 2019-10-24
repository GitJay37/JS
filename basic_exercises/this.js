/*
// this o "el contexto"

obj.demo()
*/

/*
let executor = {
    exe: function(f){
        f()
    }
}
executor.exe(obj.demo)
*/

let obj = {
    demo: function demo(){
        console.log(this)
    }
}

let user = {
    name: "Jeison De Jesús",
    lastname: "Anillo Pérez",
    full_name: function(){
        console.log(this.name+" "+this.lastname)
    }
}

let executor = {
    func: null,
    exe: function(f){
        this.func = f
        this.func()
    }
}

executor.exe(user.full_name)
user.full_name()