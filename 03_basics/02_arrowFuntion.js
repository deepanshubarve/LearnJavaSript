// this tell about current context of code in scope

const user = {
    name : "hitesh",
    id : "123",
    age : 45,
    welcomeMessage : function(){
         console.log(`${this.name}, is logged in`);
         console.log(this); //its tell about the context of this object 
         
    }
} 


user.welcomeMessage();
user.name = "Sam"
user.welcomeMessage();


// if we use this in without scope its tell pointed the empty object
console.log(this);

//if this use in function its tell other properites
function chai(){
    console.log(this);   
}
chai()


/**************************************ARROW FUNCTION**********************************/

const addTwo = (num1,num2) => { // if we use curly braket we have to write return keyword
      return num1+num2;
}
 console.log(addTwo(2,3));

 // if we dont want to use return word
 const addThree = (num1,num2, num3) => (num1+num3+num2)
 console.log(addThree(2,34,55));
 

 //if we want to return object
 const rOjb = () => {(user.id)}
 console.log(rOjb);
 