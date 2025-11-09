//primitive datatype
/* String, Number, boolean, bigInt, symbol, null, undefined*/

//Non primitive 
/* Arrays, Object, function */

let name = "for"
let number = 10
let isNumber = true;
let binNum = 123n;

let score = Symbol(12);
let scoer2 = Symbol(12);
console.log(score == scoer2);

//Non primitive(Reference type)

const heros = [ "Noga","Dpga","sdjod"];
const obj = {
    name : "hites",
    id : 23,
    age: 44
}

const myFun  = function() {
    console.log("Hey Handsome");
    
}
   
//All non primitive has object reture type, funtion has funtion object return type