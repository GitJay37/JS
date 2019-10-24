class Test{
    constructor(title, duration, format, func){
        this.title = title
        this.duration = duration
        this.format = format
        this.func = func
    }
}

let variTitle = new Test("JS")
let variDuration = new Test(5)
let variFormat = new Test("Videocilp JS")
let variFunc = new Test(function(){return("Hola ")})
console.log(variTitle.title)
console.log(variDuration.duration)
console.log(variFormat.format)
console.log(variFunc.func)