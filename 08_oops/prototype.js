let heros = ["Supermen","Batmen"];

let heropower = {
    flying : "supermen",
    power : 300,
    swiming : true
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all subject`);
}
heros.hitesh();
heropower.hitesh();

//inheritance

const teacher = {
    makevide : "teaching"
}

const teachingSupport = {
    isAvailable : true
}

const TAsupport = {
    makeAssign  : "js assignment",
    fullTime : true,
    __proto__ : teachingSupport 
}
//                                   
//there are two type of inheritance
//1)__proto__ : teachingSupport 
//2) modern way
// Object.setPrototypeOf(teacher,teachingSupport);


Object.setPrototypeOf(teacher,TAsupport);

let anotherUser = "ChaiAurCode   "
let hitesh = "hitesh      ";

String.prototype.trueLength = function(){
    console.log(this);
    console.log(this.trim().length);
}

anotherUser.trueLength();
hitesh.trueLength();