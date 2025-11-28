const arr = [1,2,3,4,5]
for (const key of arr) {
    // console.log(key);
}

const greet = "Hello world"
for (const element of greet) {
    //console.log(element);
}

//Map
const map = new Map();
map.set("Ind" , "India")
map.set("Pak" , "pak")
map.set("usa" , "usa")
map.set("can" , "canada")
map.set("max" , "maxico")
map.set("aus" , "auzy")
console.log(map);

for (const [key,value] of map) {
    //console.log(key);   
}

//Itration in object by for in loop

const user = {
    game1 : "NFS",
    game2 : "GTA",
    game3: "F1"
}

for (const key in user) {
    console.log(`The game squence are ${key} and the ${user[key]}`);
}


//We can not itrate by forin in map bcoz map is not itrabale
const map1 = new Map();
map.set("Ind" , "India")
map.set("Pak" , "pak")
map.set("usa" , "usa")
map.set("can" , "canada")
map.set("max" , "maxico")
map.set("aus" , "auzy")

for (const key in map1) {
    console.log(key);
}


