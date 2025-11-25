//SingleTon  -> Object.create()

// Object litrals 
const obj = {
    name : "Deepanshu",
    age : 12,
    [mySym] : "key",
    location : "Bhopal",
    email : "xyz123@gmail.com",
    isLogging : true,
    lastLoggingDay : ["Monday","Saturday"]
}


//Object calling
console.log(obj.age);
console.log(obj["age"]);

//symbol
const mySym = new Symbol("key1");
console.log(obj);

obj.email = "123deep@gmail.com";
Object.freeze();

obj.greeting = function(){
    console.log("heelo");
}

console.log(obj.greeting());
