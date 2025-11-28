const numbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = numbers.map((num) => (num+10))
console.log(newNums);

//if we want to do chaining then we can use with map and filter, after each chaining we will get t
//the filtered data

const fd = numbers.map((num) => num*10).map((num) => (num-1)).filter((num) => num >40);
console.log(fd);

