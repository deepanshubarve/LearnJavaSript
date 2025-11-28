//we can itreat direct by .foreach which propety provide by js

const coding = ["js","c++","java","ruby"]
coding.forEach(function (item){
    //console.log(item);
    
})

//with arrow function

coding.forEach((val) => {
    //console.log(val);
    
} )

function printme(val){
    console.log(val);
    
}

coding.forEach(printme);

//itration on object array

const  detail = [
    {
      name :  "deepanshu",
      id : "234xyz"
    },
    {
      name :  "deepanshu",
      id : "234xyz"
    },{
      name :  "deepanshu",
      id : "234xyz"
    },{
      name :  "deepanshu",
      id : "234xyz"
    },{
      name :  "deepanshu",
      id : "234xyz"
    },{
      name :  "deepanshu",
      id : "234xyz"
    },{
      name :  "deepanshu",
      id : "234xyz"
    }
]

console.log(detail[0].name);
