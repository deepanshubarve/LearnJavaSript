function setuserName (userName){
     this.userName = userName;
     console.log("called");
     
}

function createUser(userName,email,pass){
    setuserName.call(this, userName) // call method is used to hold the refence of the object
    this.email = email;
    this.pass = pass;
}

const chai = new createUser("hites","hitu123@gmail.com.","12345678");
console.log(chai);

