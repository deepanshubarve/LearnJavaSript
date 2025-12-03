
class user{
    constructor(userName){
        this.userName = userName;
    }
     logMe(){
            console.log(`Thsi will log the result ${this.userName}`);
        }

    static creatId(){  // static keyword restrict the acess 
        console.log(`The id is 123`);
        
    }
}

const  hitesh = new user("hites")
//console.log(hitesh.creatId());

class teacher extends user{
    constructor(userName,subject){
    super(userName)
    this.subject = subject;
    }

    logMe(){
        console.log(`The user is very porew`); 
    }

}

const teach = new teacher("Dep","hindi")
console.log(teach.creatId()); // static keyword restrict the acess even with the child function
        

