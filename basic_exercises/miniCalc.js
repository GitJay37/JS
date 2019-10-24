// Data catcher
let numberA = prompt("Please insert a number: "); 
let numberB = prompt("Please insert another number: ");
 
let miniCalc = () => { // Arrows function
    let sum = parseInt(numberA) + parseInt(numberB);
    let rest = parseInt(numberA) - parseInt(numberB);
    let mult = parseInt(numberA) * parseInt(numberB);
    let div = parseInt(numberA) / parseInt(numberB);
    let mod = parseInt(numberA) % parseInt(numberB);
    // Template
    console.log(`Resultados a continuación:  Suma: ${sum}, resta: ${rest}, mult: ${mult}, div: ${div} and mod: ${mod}`);
}
miniCalc();