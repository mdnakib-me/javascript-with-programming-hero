const weight = Number(process.argv[2]);
const height = Number(process.argv[3]);
function calBMI(weight, height){
    const bmi = weight / (height*height);
    return bmi;
}
const bmi = calBMI(weight, height);
console.log("------------------------------------");
console.log("This is your Weight:-",weight, "KG");
console.log("This is your Height:-", height, "M");
console.log("this is your BMI Result:-", bmi);
console.log("------------------------------------")
if(bmi < 18.5){
    console.log("Your BMI category is Underweight! \nSo,This message for you: \n Your health matters. A lower BMI can affect your energy and immunity. Focus on nutrient-rich meals and consult a doctor to build a safe, strength-focused wellness plan. You've got this!")
}else if(bmi < 24.9){
    console.log("Your BMI category is Healthy Weight! \nSo, This message for you: \nGreat job! Your BMI is in the healthy range. Keep up the fantastic work with balanced eating and regular movement to maintain your vibrant energy and long-term wellness.  ")
}else if(bmi < 29.9){
    console.log("Your BMI categroy is Overweight! \nSo, This message for you:\nSmall steps lead to big changes. Being in this range slightly increases health risks, but adding simple daily walks and whole foods can make a massive difference. Focus on progress, not perfection!")
}else if (bmi < 34.9){
    console.log("Your BMi categroy is class 1 Ovesity! \n So, This message for you: /Prioritizing your health is a brave and rewarding journey. Managing weight helps protect your heart and joints. Celebrate small wins and consider partnering with a doctor or dietitian for support. ")
}else if(bmi < 39.9){
    console.log("Your BMI categroy is Class 2 Obesity!! \nSo, This message for you: \nYou deserve to feel your best. This category can impact your everyday comfort and long-term health. Reaching out to medical professionals can provide you with safe, highly effective tools for your journey.")
}else{
    console.log("YOur BMI categroy is Class 3 Obesity or over!!! \nSo, This message for you: \nYou deserve to feel your best. This category can impact your everyday comfort and long-term health. Reaching out to medical professionals can provide you with safe, highly effective tools for your journey.")
}