// Example with var
var firstName = "Zakariya";
console.log("First Name (var): " + firstName);

// You can update var
firstName = "Mohamed";
console.log("Updated First Name (var): " + firstName);

// You can also re-declare var (no error)
var firstName = "Zakariya Mohamed";
console.log("Re-declared First Name (var): " + firstName);

// var ignores block scope (⚠️ can be dangerous)
{
  var firstName = "Inside Block with var";
}
console.log("Var after block: " + firstName);
// 👉 It changes the outside variable too
