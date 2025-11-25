let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


let myCreateDate = new Date(2023,0,12);
console.log(myCreateDate);

let timeStemp = Date.now();
console.log(timeStemp);
console.log(myCreateDate.getTime());

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long",
    timeZone : "long"
});



