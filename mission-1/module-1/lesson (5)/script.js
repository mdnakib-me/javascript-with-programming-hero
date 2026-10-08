let age = 2;
if (age > 18) {
    console.log("Voter")
} else {
    console.log("Not a Voter")
}


//  ///
//  let marks = 25;
//  if (marks >= 80) {
//      console.log("A+");
//  } else if (marks >= 70) {
//      console.log("A");
//  } else if (marks >= 60) {
//      console.log("A-");
//  } else if (marks >= 50) {
//      console.log("B");
//  } else if (marks >= 40) {
//      console.log("C");
//  } else if (marks >= 33) {
//      console.log("D");
//  } else {
//      console.log("F")
//  }

// //
let marks = 32;
switch (true) {
    case marks >= 80:
        console.log("A+");
        break;
    case marks >= 70:
        console.log("A-");
        break;
    case marks >= 60:
        console.log("A");
        break;
    case marks >= 50:
        console.log("B");
        break;
    case marks >= 40:
        console.log("C");
        break;
    case marks >= 33:
        console.log("D");
        break;
    default:
        console.log("Saleee tui fail korchis")
        break;
}
 

age!=18 ? console.log("Voter") : console.log("Not Voter");