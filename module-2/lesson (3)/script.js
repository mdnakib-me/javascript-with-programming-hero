// //object
// let user = {
//     name: "Nakib",
//     age: "23",
//     address: "kishoreganj",
// };
// // console.log(user); that is called dot notation
// // console.log(user['name']);// that called bracket notation
// // delete user.age;
// user.age = {
//     ch : "nb",
//     bi : "df",
// };
// console.log(user);
// console.log(Object.entries(user))
// // name: "value";
// console.log(user.age.bi)

//
let user = {
    name: "nakib",
    age: "23",
    address: "kishoreganj"
};
// user is a property
// name, age, address is a key
// nakib, 23, kishoreganj is a value for key

// object and key value change prosses
user.age = 24;

// add new property and value
user.phone = "019**********";

// delete user or property
delete user.age;
// basic way for property, value(dot,bracket notation) called
console.log(user);
console.log(user.name);
console.log(user["age"]);

// object. entriies
console.log(Object.entries(user));
