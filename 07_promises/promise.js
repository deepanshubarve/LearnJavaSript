/**************************Promise 1************************* */

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
         console.log("Print in done");
         resolve();  
    },1000)
    
});

promiseOne.then(function(){
    console.log("Promise is consume");
    
})

//here is another way of write this promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task2");
        resolve();
        
    },2000)
}).then(function(){
    console.log("The promise is consumed");
    
})

/*****************************Promise 2*****************************/

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("AscnyTask");
        resolve({userName : "hitesh",email :"zyz@gmail.com"})
    },1000);
})
promiseTwo.then(function(user){
     console.log(user);
     
})

/*****************************Promise 3*****************************/

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false;
       if(!error){
        resolve({userTime : "123",dob : "12/2/22"})
       }else{
        reject('ERROR : This error is thown')
       }
    },1000)
})

promiseThree.then(function(user){
       return user.userTime;
}).then(function(){
    console.log(user.userTime); 
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("This will be executed");
    
})

/********************************Promise 4*************************/
//handle or consume promise by async await


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = true;
       if(!error){
        resolve({userTime : "Javascript",dob : "12/2/22"})
       }else{
        reject('ERROR : JS error is thown')
       }
    },1000)
})

async function consumeFourPrmise() {
    try {
        const respose = await promiseFour
        console.log(respose);
    } catch (error) {
        console.log(error);
        
    } 
}

consumeFourPrmise();

/***********************************Promise 5********************************/

async function getAllUser(){
    try {
        const response = await fetch('https://api.github.com/users/deepanshubarve')
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log("E",error);
        
    }
    
}
//getAllUser();

//handle by thenable chaining

fetch('https://api.github.com/users/deepanshubarve')
.then((response) =>{
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
    
})



