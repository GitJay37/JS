let user = {
    name: "Jeison De Jesús",
    lastname: "Anillo Pérez",
    full_name: function(){
        setTimeout(/*function*/()=>{
        console.log(this.name+" "+this.lastname)
        }, 1000 )
    }
}

user.full_name()



