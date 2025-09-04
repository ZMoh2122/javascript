// Example with const
const firstName = "Zakariya";
console.log("First Name (const): " + firstName);

// ❌ You cannot update const
// firstName = "Mohamed";
// 👉 TypeError: Assignment to constant variable.

// ❌ You cannot re-declare const
// const firstName = "Zakariya Mohamed";
// 👉 SyntaxError: Identifier 'firstName' has already been declared

// const also respects block scope
{
  const firstName = "Inside Block with const";
  console.log("Block-scoped const: " + firstName);
}
console.log("Const outside block: " + firstName);

// ✅ BUT: if const holds an object/array, contents can change
const person = { name: "Zakariya" };
person.name = "Mohamed"; // allowed
console.log("Const object updated: " + person.name);
