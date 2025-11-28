//In the shoppin cart we can use the reduce keyword to accumalate and calculate the data on
//the basis of intial value and current value;

const myNum = [1,2,3]
const myTotal = myNum.reduce((acc,curr) => acc+curr,0);
console.log(myTotal);


const shop_cart = [
    {
        product_name : "clothes",
        price : 33
    },
    {
        product_name : "underware",
        price : 30
    },
    {
        product_name : "gycroll",
        price : 34
    },
    {
        product_name : "laptop",
        price : 50
    },
    {
        product_name : "mobile",
        price : 90
    },
    {
        product_name : "mouse",
        price : 49
    },
    {
        product_name : "pen",
        price : 10
    }
]

const total = shop_cart.reduce((acc,item) => (item.price+acc),0);
console.log(total);
