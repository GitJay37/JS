let array = [1,2,3,4,5]

for(num of array){
    console.log(num)
}

function greetToall(){
    for(names of arguments)
    console.log("Hello " + names)
}

greetToall("Rodmy", "Lola", "Pablo", "Karen", "Pablito", "Juanpi", "Esteban")

