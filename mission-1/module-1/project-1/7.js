let x = 20;

x += 10;
console.log(x);//30

x -= 5;
console.log(x);//15//30-5=25

x *= 2;
console.log(x);//40//25*2=50

x /= 5;
console.log(x);//4//50/5=10
// 1=true 2=false 3=true 4=true 5=false 6=true 7=true 8=true 9=false 10=false 11=true 12=false 13=true 

// let age = 20;
let examPassed =true;
console.log(`Eligible: ${age>=18 &&examPassed===true}`);
console.log(15 < 10 || 5 > 20);
console.log(15 > 10 || 5 > 20);
console.log(10 === "10" || 20 > 15);
console.log(10 === 10 && 20 !== "20");
let age = 17;
let hasTicket = true;

console.log(`Can enter: ${age >= 18 && hasTicket === true}`);