let p1 = new Promise( (resolve, reject) => setTimeout(resolve, 500, "Hola world!!!") );
let p2 = new Promise( (resolve, reject) => setTimeout(resolve, 600, "2th Hola world!!!") );
let p3 = Promise.reject(); 
let greet = () => console.log("Hello buddies");

/*
p1.then(function(){
    p2.then(function(){
        greet();
      })
})
*/
    
Promise.all( [p1, p2, p3] ).then( results => {
    console.log(results); // This is an array

    greet();
}).catch( ()=> console.log("App failed!!") )

