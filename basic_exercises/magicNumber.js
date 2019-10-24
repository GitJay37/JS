const magicNum = 37;
let numUser = prompt("Please insert your attempt to guess the number: ");

while (numUser !== magicNum){
    let numUser = prompt("Please try again: ");
    if(numUser >= 30 && numUser < magicNum ){
        console.log(`Your number is ${numUser} and my number is bigger`);
    }else if(numUser > magicNum && numUser <= 50 ){
        console.log(`Your number is ${numUser} and my number is minor`);
    }
    else if(numUser == magicNum){ 
        console.log("Yay you got it! my number is: "+numUser);
        break
    }
}