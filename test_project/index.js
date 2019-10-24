/*
const request = require('request');

request('http://www.google.com', function(){
    console.log("Petición de Google terminada!");
})

console.log("Message after Google request")
*/

const rp = require('request-promise');

rp('http://www.google.com');
    .then(function(html){
        console.log("Petición Google finished")
}).carch(function(err){
    console.log(err)
})

