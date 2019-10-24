let message = "Hi there, please enter a number";
let data = prompt(message); 
 
let evenNum = "Hey! Your number "+data+" is even"
let oddNum = "Hey! Your number "+data+" is odd" 
 
if(data / 2 == 0){
    console.log(evenNum);
}else{
    console.log(oddNum);
}