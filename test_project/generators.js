function* counter(){
    /*
    console.log("I am here!!");
    yield 1;
    console.log("Now I'm here ok!! ;)");
    yield 2;
    */
    for( var i = 1;i <= 5 ; i++){
        yield i;
    }
}

let generator = counter();

function* returner(){
    //return 3;
    yield* counter();
    console.log("I'm back!!");
}

let g = returner();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
/*
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
*/