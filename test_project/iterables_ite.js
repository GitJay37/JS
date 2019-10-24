/*
let range = {
    min: null,
    max: null,
    currentValue: null,
    [Symbol.iterator](){
        return this;
    },
    
    next(){
        if(this.currentValue == null) this.currentValue = this.min;
        let result = {};
        if(this.currentValue >= this.min && this.currentValue <= this.max){
            result = { value: this.currentValue, done: false};
            this.currentValue += 1;
        }else{
            result = {done: true};
        }
        return result;
    }   
}

range.min = 5;
range.max =  10;

for(number of range){ console.log(number)}
*/

let range1 = {
    min: null,
    max: null,
    [Symbol.iterator](){
        return this.generator();
    },
    generator: function*(){
        for (var i = this.min; i <= this.max; i++ ){
            yield i;
        }
    }
}

range1.min = 0;
range1.max = 100;

for (numerito of range1){ console.log(numerito)};