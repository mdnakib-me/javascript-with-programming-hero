function total (price, qun=12){
    const grandTotal = price * qun;
    return grandTotal;
}
const spend = total(10);
const save = 200-spend; 
console.log(spend, save);

function sayHello(name) {
    console.log(`Hello ${name}`);
    
}
sayHello('nakib')