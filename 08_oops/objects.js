function multiPlay(num){
    return num*5;
}

multiPlay.power = 2;
console.log(multiPlay(5));
console.log(multiPlay.power); //function in js is also type of object
console.log(multiPlay.prototype);

function createUser(userName,score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function (){
   console.log(this.score++);
}

createUser.prototype.printMe = function(){
    console.log(`The price of ${this.userName} is ${this.score}`);
    
}

// const chai = createUser("chai",25); -> this will give error becoz new keyword not used
// const tea = createUser("tea",20);
// chai.increment(); 
// tea.printMe();

const chai = new createUser("chai",25); 
const tea = new createUser("tea",20);

chai.increment(); 
tea.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

