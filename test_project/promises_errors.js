(async function(){ 

    try {
        let promise = await Promise.reject("Error");
        let promise1 = await Promise.reject("Error one");
    }catch(error){
        console.log(error);
    }

})();

//fetch("https://api.github.com/users/GitJay37/repos");

