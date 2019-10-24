let numbers = [3,6,9];
let array = ['Hola', 'Mundo']
let another_arr = ["Wooo", "Hooo"]
let object1 = { key1: 3}
let object2 = { key2: 7}
let newObject = {
    ...object1, ...object2
}

function plus(num_a, num_b, num_c){
    return num_a + num_b + num_c;
}

let apply = plus.apply(this, numbers);
console.log(apply)

let result = plus(...numbers)
console.log(result)

console.log( [...numbers, ...array] ) // Merging arrays

console.log( [numbers, ...another_arr, ...array] )

console.log(object1)
console.log(object2)
console.log(newObject)

