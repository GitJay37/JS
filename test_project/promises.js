const request = require('request');

function read(url){
  return new Promise(function(resolve, reject){
    //resolve("Everything is OK!!")
    //reject(new Error("No se puede completar"))
    // Function asincrona
    request(url, function(error, response){
        if(error){
            reject(error);
        }else{
            resolve(response);
        }
    });
  });  
}

read('http://codigofacilito.com/')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error)
    });


