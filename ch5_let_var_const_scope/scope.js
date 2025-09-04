// ===== Global Scope =====
var globalVar = "I am var (global)";
let globalLet = "I am let (global)";
const globalConst = "I am const (global)";

console.log(globalVar); // ✅ works anywhere
console.log(globalLet); // ✅ works anywhere
console.log(globalConst); // ✅ works anywhere

// ===== Function Scope =====
function testFunctionScope() {
  var funcVar = "I am var (function scope)";
  let funcLet = "I am let (function scope)";
  const funcConst = "I am const (function scope)";

  console.log(funcVar); // ✅ works inside
  console.log(funcLet); // ✅ works inside
  console.log(funcConst); // ✅ works inside
}
testFunctionScope();

// ❌ Error: funcVar, funcLet, funcConst are not defined outside function
// console.log(funcVar);
// console.log(funcLet);
// console.log(funcConst);

// ===== Block Scope =====
{
  var blockVar = "I am var (block)";
  let blockLet = "I am let (block)";
  const blockConst = "I am const (block)";

  console.log(blockVar); // ✅ works inside
  console.log(blockLet); // ✅ works inside
  console.log(blockConst); // ✅ works inside
}

console.log(blockVar); // ⚠️ var leaks out of block
// console.log(blockLet); // ❌ ReferenceError: blockLet is not defined
// console.log(blockConst); // ❌ ReferenceError: blockConst is not defined
