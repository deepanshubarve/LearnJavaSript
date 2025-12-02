const user = {
    username : " heitesj",
    loginCount : 8,
    sinIn  : true,

    getUserDetails : function(){
         `The ${this.username} is loged in`
    }
}
console.log(user.getUserDetails());

function User(username, logicCount, isLoggedIn){
    this.username = username;
    this.logicCount = logicCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = User("hites",23,true);
const userTwo = User("Thagesh",33,false);
console.log(userTwo.constructor); //constructor property is reference of kudh hi ke bare me mtlb User ke bare me 


//console.log(userOne);

