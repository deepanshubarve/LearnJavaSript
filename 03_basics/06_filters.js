//For each loop can not return the value

const coding = ["js","c++","c","python","c"];
const value = coding.forEach((vale) => {
    console.log(vale);
    })

console.log(value);


//to use the return funtionality we use filter
                                        //here we havve to  put condition
const languge = coding.filter((lang) => lang === "java")
console.log(languge);

//but if we want to use for each loop then 
const myNums = [1,2,3,4,5,6,7,8,9];
myNums.forEach((num) => {
    if(num > 4){
        console.log(num);
    }
} )