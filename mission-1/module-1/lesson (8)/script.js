const total= (price, qun = 12) => {
    const grandTotal = price * qun ;
    return grandTotal;
};
const spend = total(11);
console.log(spend);


const add = (a, b) => a + b;
const sum = add (5, 10);
console.log(sum)