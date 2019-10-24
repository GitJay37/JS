function calc(){
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, 500, 5);
    })
}

function secondCalc(number){
    console.log(number);
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, 200, "Second promise");
    })
}

calc().then(secondCalc).then(console.log);