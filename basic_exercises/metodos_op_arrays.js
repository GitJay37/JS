/*
    Metodos: 
    
    forEach
    filter
    find
    map
    
*/

let lang = ["ruby","python","javascript","php","java","c++"]
//lang = lang.filter((element)=> element != "c++")

//lang.forEach(function(index){
//    console.log(index)
//})

let numbers = ["1","2","3","4","5","6","7","8","9","10"]

//numbers = numbers.filter(el => el != 6)
//console.log(numbers)
//numbers = numbers.filter(el => el % 2  != 0)
//console.log(numbers)
//numbers = numbers.filter(el => el % 2 == 0)
//console.log(numbers)
//let search = lang.find(variable => variable == "javascript")
let map = numbers.map(nums =>  parseInt(nums) * parseInt(nums))
console.log(map)
