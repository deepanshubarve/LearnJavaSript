class user {
    
    constructor(userName, email, password){
         this.userName = userName;
         this.email = email;
         this.password = password;
    }
    encryptPassWord(){
         return `the password is ${this.password}`
    }

    changeUserName(){
        return `${this.userName}`.toUpperCase();
    }
}

const chai = new user("chia","chai@123",212);
 console.log(chai.encryptPassWord());
 console.log(chai.changeUserName());
 
 //behind the scene in class

 function user2 (userName,email,password){
    this.userName = userName;
    this.email = email;
    this.password = password;
 }

  user2.prototype.encryptPassWord2  = function(){
    return `${this.password}abc`;
 }
 
 user2.prototype.changeUserName2 = function(){
   return `hey this username is now ${this.userName}`
 }

 const tea = new user2("gimmi","Bhalu","123");
 console.log(tea.changeUserName2());
 console.log(tea.encryptPassWord2());
 
 




