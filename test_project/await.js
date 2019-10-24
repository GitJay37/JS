/*
( async function(){

    let promise1 = await new Promise( (resolve, reject) => {
        setTimeout(resolve, 500, 3)
    });

    let promise2 = await new Promise( (resolve, reject) => {
        setTimeout(resolve, 500, 7)
    });

    console.log(promise1 + promise2)
})();
*/

async function showGitHubInfo(){
    let response = await fetch('https://api.github.com/users/GitJay37/repos');
    let repos = await response.json();
    console.log(repos);
}

showGitHubInfo();






