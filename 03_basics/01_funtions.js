function addNumber (num1,num2){
    num3 = num1+num2;
    return num3;
}

function login(userName = "Sam"){
    if(!userName){
        console.log(`Please enter the username mc`);
    }
    console.log(`${userName} just logged in`);
    
}

//Rest operatior -> uses for multiple arments without knowing the number of arguments
function addToCart(...num1){
    return num1;
}
console.log(addToCart(100,200,300,400));

const details = {
    userName : "deep",
    rollNo : 123
}

function giveDetail(anyObj){
    console.log(`${anyObj.userName} is very good, and has roll no = ${anyObj.rollNo}`);
    
}
console.log(giveDetail(details));

