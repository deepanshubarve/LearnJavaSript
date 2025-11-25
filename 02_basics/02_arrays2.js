const marvel = ["Spidy","Ironmen","Hulk"];
const dc = ["supermen","betmen","Aquamen"];

console.log(marvel.concat(dc));

//Merging using the speard operator

console.log(...dc,...marvel);

const anotherArr = [1,2,3,[2,3,4,5],3,[33,33,55,[56]]];
console.log(anotherArr);
console.log(anotherArr.flat(Infinity))

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "Hitesh"})); //Empty object (intresting)

let score1 = 100;
let scoer2 = 344;
let scoer3 = 344;
console.log(Array.of(score1,scoer2,scoer3));



