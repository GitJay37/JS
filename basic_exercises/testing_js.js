const something = (name) => { 
    /*
        if( name == "Jay"){
            console.log("`Hey ${name} you name is so cool!!`");
        }else{
            console.log("What are you typing?");
        }
    */

   console.log( name == "Jay" ? `Hey ${name} your name is so cool!!` : "What are you typing?");
}

something("Jay")