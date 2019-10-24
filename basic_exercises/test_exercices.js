/*
1. Tomando como entrada un número entero, imprimir si es par o impar.

let entrada = prompt("Hola digita un numero para conocer si es par o impar")
if (entrada % 2 == 0){
  console.log("Tu numero: "+ entrada+" es un numero par")
}else{
  console.log("Tu número: "+entrada+" es impar")
}

2.	Recibir dos números usando prompt y sumarlos, restarlos, dividirlos y multiplicarlos.

alert("Operaremos dos numeros ingresados por tí!! Da clic en OK para comenzar!! :D")
let input1 = prompt("Hola digita prímer número: ")
let input2 = prompt("Hola digita segundo número: ")

let suma = parseInt(input1) + parseInt(input2) 
let resta = parseInt(input1) - parseInt(input2) 
let multiplicacion = parseInt(input1) * parseInt(input2) 
let division = parseInt(input1) / parseInt(input2) 

console.log("Los resultados son: "+"suma: "+suma+" resta: "+resta+" multiplicación: "+multiplicacion+" división: "+division)

4. Programar el juego del "Número Mágico" en el que se define un número y el usuario trata 
de adivinarlo, si el número que ingresó el usuario es menor, 
imprimir la pista "El número mágico es mayor", si el número que ingresó el usuario es mayor, 
imprimir la pista "El número mágico es menor”.

let number = prompt("Adivina el numero!!!: ")
 
while (parseInt(number) !== 37){
  if (number <= 29){
    number = prompt(":S Estás frio!!! y lejos!! "+number+" es menor al numero a adivinar, intenta de nuevo: ")
  }else if (number >= 41){
    number = prompt(":S Estás frio!!! y lejos!! "+number+" es mayor al numero a adivinar, intenta de nuevo: ")
  }
  else if (number >=30 && number <=34){
    number = prompt(":O Estás tibio y muy cerca!! "+number+" es menor al numero a adivinar, intenta de nuevo: ")
  }else if (number >= 35 && number <= 40){
    number = prompt(":V Estás caliente!!! "+number+" es cercano al numero que quieres adivinar, intenta de nuevo: ")
  }
}
alert("Yay!!! Adivinaste!!! "+number+" Es el numero ganador!! :D")
*/

//3. Imprimir la sucesión fibonacci el número de veces que indicó el usuario.


}