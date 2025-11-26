const td = new Object();
console.log(td);

const obj2 = {}
// console.log(obj2);
obj2.id = 123;
obj2.userName = "Sammy"
obj2.isLoggedIn = true

console.log(obj2);

const regularUser = {
    email : "syss@gmail.com",
    userName : {
        firstName : {
            first : "Ramesh",
            middle : "kumar"
        },
        lastName : {
            surename : "rahul"
        }
    }
}

regularUser.userName?.firstName

console.log(regularUser.userName?.firstName);

const obj1 = {1 : "a", 2 : "b"}
const obj5 = { 3 : "a", 4 : "b"};

//const obj3 = {obj1,obj5}
const obj3 = Object.assign({},obj1,obj2); //first argument is destination and other arguments are source
console.log(obj3);


//By the spread operator
const merged = {...obj1,...obj2};

//Array of object

const arr = [ {
    name : "Hitesh",
    email : "xyz123@gmail.com",
    phoneNo : 234
},
 {name : "Hitesh",
    email : "xyz123@gmail.com",
    phoneNo : 234
},
 {name : "Hitesh",
    email : "xyz123@gmail.com",
    phoneNo : 234
},
 {name : "Hitesh",
    email : "xyz123@gmail.com",
    phoneNo : 234
},
 {name : "Hitesh",
    email : "xyz123@gmail.com",
    phoneNo : 234
},
 {name : "Hitesh",
    email : "xyz123@gmail.com",
    phoneNo : 234
},
 {name : "Hitesh",
    email : "xyz123@gmail.com",
    phoneNo : 234
},
 {name : "Hitesh",
    email : "xyz123@gmail.com",
    phoneNo : 234
},
 {name : "Hitesh",
    email : "xyz123@gmail.com",
    phoneNo : 234
}]

arr[1].email

//Keys and value
console.log(Object.keys(obj2));

//Present ornot
console.log(Object.hasOwn("Hitesh"));

//Object destructing 

const course = {
    courseName : "JavacSc",
    price : 223,
    courseInst : "hites"
}
const {price} = course
console.log(price);







