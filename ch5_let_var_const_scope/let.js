



// { 
//     let firstName = "Zakariya";
//     console.log(firstName);
// }    

// console.log(firstName);

// Example with let
let firstName = "Zakariya";
console.log("First Name (let): " + firstName);

// You can update let
firstName = "Mohamed";
console.log("Updated First Name (let): " + firstName);

// ❌ You cannot re-declare let in the same scope
// let firstName = "Zakariya Mohamed"; // ❌ SyntaxError: Identifier 'firstName' has already been declared

// let respects block scope
{
  let firstName = "Inside Block with let";
  console.log("Block-scoped let: " + firstName);
}
console.log("Let outside block: " + firstName);
// 👉 Stays as "Mohamed", unaffected by block
