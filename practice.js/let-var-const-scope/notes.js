// ======================================================
// 🧭 JavaScript Notes: let, var, const, and Scope
// ======================================================

// ------------------------------------------------------
// 1️⃣ Basic Differences
// ------------------------------------------------------
/*
| Keyword | Can Reassign? | Can Redeclare? | Scope Type | Hoisted?         |
|----------|----------------|----------------|--------------|------------------|
| var      | ✅ Yes          | ✅ Yes          | Function     | ✅ Yes (undefined) |
| let      | ✅ Yes          | ❌ No           | Block        | ⚠️ TDZ applies     |
| const    | ❌ No           | ❌ No           | Block        | ⚠️ TDZ applies     |
*/

// TDZ = Temporal Dead Zone (variable exists but not usable yet)

// ------------------------------------------------------
// 2️⃣ Function & Block Scope Example
// ------------------------------------------------------

function testScope() {
  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 10; // same a (function-scoped)
    let b = 20; // new variable inside block
    const c = 30; // new variable inside block
    console.log("Inside if block:", a, b, c);
  }

  console.log("Outside if block:", a, b, c);
}
testScope();

// Expected Output:
// Inside if block: 10 20 30
// Outside if block: 10 2 3

// ------------------------------------------------------
// 3️⃣ Hoisting Visualization
// ------------------------------------------------------

// var → hoisted + initialized as undefined
console.log(x); // undefined
var x = 5;

// let → hoisted but not initialized (TDZ)
try {
  console.log(y); // ReferenceError
  let y = 10;
} catch (error) {
  console.log("Error with let:", error.message);
}

// ------------------------------------------------------
// 4️⃣ Loop Scope
// ------------------------------------------------------

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 1000);
}
// Output after 1 second: var i: 3 (three times)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 1000);
}
// Output after 1 second: let j: 0, 1, 2

// ------------------------------------------------------
// 5️⃣ Const Objects
// ------------------------------------------------------

const person = { name: "Zakariya", age: 16 };
person.age = 17; // ✅ allowed
person.city = "MPLS"; // ✅ allowed

console.log(person);

// person = {}; // ❌ Error: Assignment to constant variable.

// ------------------------------------------------------
// 6️⃣ Function vs Global Scope
// ------------------------------------------------------

let globalVar = "I’m global";

function checkScope() {
  let localVar = "I’m local";
  console.log(globalVar); // ✅ visible
  console.log(localVar); // ✅ visible
}
checkScope();

try {
  console.log(localVar); // ❌ Error
} catch (error) {
  console.log("Error:", error.message);
}

// ------------------------------------------------------
// 7️⃣ Shadowing Example
// ------------------------------------------------------

let color = "blue";
function paint() {
  let color = "red"; // shadows outer variable
  console.log("Inside:", color);
}
paint();
console.log("Outside:", color);

// Output:
// Inside: red
// Outside: blue

// ------------------------------------------------------
// 8️⃣ Summary (memorize this 🔥)
// ------------------------------------------------------
/*
🧠 var   → function-scoped, old, can be redeclared, hoisted as undefined
⚡ let   → block-scoped, can reassign, no redeclaration, safer for loops
🔒 const → block-scoped, cannot reassign, best for constants/objects

🌐 Scope:
- Global scope: declared outside functions
- Function scope: visible inside the function
- Block scope: visible inside { } only

Hoisting:
- var: declared at top, initialized as undefined
- let/const: hoisted but in Temporal Dead Zone until declared
*/
