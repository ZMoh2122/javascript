// ======================================================
// 🌍 JavaScript Scope Visuals
// ======================================================
//
// Types of scope:
// 1️⃣ Global Scope
// 2️⃣ Function Scope
// 3️⃣ Block Scope
//
// Variables live inside different “boxes” of memory.
// Let’s see what that means visually 👇
// ======================================================

// ------------------------------------------------------
// 1️⃣ GLOBAL SCOPE
// ------------------------------------------------------

var globalVar = "I’m global (var)";
let globalLet = "I’m global (let)";
const globalConst = "I’m global (const)";

console.log("🌍 Global Scope:", globalVar, globalLet, globalConst);

// Everything declared here is visible anywhere in this file
function showGlobals() {
  console.log("Inside function:", globalVar, globalLet, globalConst);
}
showGlobals();

// ------------------------------------------------------
// 2️⃣ FUNCTION SCOPE
// ------------------------------------------------------

function functionScopeExample() {
  var car = "Toyota";
  let bike = "Yamaha";
  const bus = "Mercedes";

  console.log("Inside function:", car, bike, bus);
}
functionScopeExample();

// Variables defined inside a function cannot be accessed outside
try {
  console.log(car); // ❌ Error
} catch (err) {
  console.log("Outside function error:", err.message);
}

// ------------------------------------------------------
// 3️⃣ BLOCK SCOPE
// ------------------------------------------------------

if (true) {
  var food = "Pizza";
  let drink = "Juice";
  const dessert = "Cake";
  console.log("Inside block:", food, drink, dessert);
}

console.log("Outside block (var):", food); // ✅ visible
try {
  console.log(drink); // ❌ Error
} catch (err) {
  console.log("Outside block (let):", err.message);
}
try {
  console.log(dessert); // ❌ Error
} catch (err) {
  console.log("Outside block (const):", err.message);
}

// ------------------------------------------------------
// 4️⃣ NESTED SCOPES
// ------------------------------------------------------

let city = "Minneapolis";

function outer() {
  let street = "Broadway";

  function inner() {
    let house = "102";
    console.log("🏠 Access from inner:", city, street, house);
  }

  inner();

  // house is not accessible here
  try {
    console.log(house); // ❌ Error
  } catch (err) {
    console.log("Error inside outer:", err.message);
  }
}

outer();

// ------------------------------------------------------
// 5️⃣ LEXICAL SCOPE (inner can see outer)
// ------------------------------------------------------

function outerLexical() {
  let language = "JavaScript";

  function innerLexical() {
    console.log("Inner sees:", language); // ✅
  }

  innerLexical();
}

outerLexical();

// ------------------------------------------------------
// 6️⃣ VARIABLE SHADOWING
// ------------------------------------------------------

let fruit = "Apple";
function eat() {
  let fruit = "Banana";
  console.log("Inside function:", fruit); // Banana
}
eat();
console.log("Outside function:", fruit); // Apple

// ------------------------------------------------------
// 7️⃣ GLOBAL POLLUTION with var
// ------------------------------------------------------
// ⚠️ Using var in the global scope adds the variable to window/globalThis object

var badVar = "This leaks into window";
console.log("Check globalThis.badVar:", globalThis.badVar); // ✅ exists

let safeLet = "This does not leak";
console.log("Check globalThis.safeLet:", globalThis.safeLet); // ❌ undefined

// ------------------------------------------------------
// 8️⃣ ONE-LINE SUMMARY
// ------------------------------------------------------
/*
🧭 Global Scope
   → Variables available everywhere.

🔹 Function Scope (created with var or inside functions)
   → Variables only visible inside the function.

🧱 Block Scope (created with let or const)
   → Variables visible only within { } blocks.

🧠 Lexical Scope
   → Inner functions can access outer variables.

⚠️ var leaks
   → let/const are safer and respect boundaries.
*/
