//M-1 of declare
const myArr =  [0,1,2,3,4,5,6];

//M-2 of declare
const myArr1 = new Array(1,2,3,4,5,6);

//Array Method

/*console.log(myArr);
myArr.push(8);
myArr.push(9);
console.log(myArr);
myArr.pop();
myArr.pop();
console.log(myArr);*/

myArr.unshift(9); //put element on front end of array
myArr.shift(); // remove from front of array

myArr.includes(5);
myArr.includes(10);
myArr.indexOf(3); 

// const newArrr = myArr.join(); //Bind elements and convert to String form
// console.log(newArrr);
// console.log(myArr);

//slice && splice

//slice
console.log(myArr);
const a1 = myArr.slice(1,3);
console.log(a1);
console.log(myArr);


//splice  /* -> Modifiy the original array */
console.log(myArr);
const a2 = myArr.splice(1,3);
console.log(a2);
console.log(myArr);





