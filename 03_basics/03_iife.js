//Iife (immediatly invoked function expression)
// its works on two paranthesis ()() -> first one for declaration and second one for excecution

//named iife
(function chai(){
    console.log(`DB connected`);
    
})();

//unameded iife with arrownfuntion
( (username) => {
    console.log(username);
    
})("Hitesh")
( (username) => {
    console.log(username);
    
})("Hitesh")
( (username) => {
    console.log(username);
    
})("Hitesh")
