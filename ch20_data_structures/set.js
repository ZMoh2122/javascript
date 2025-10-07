// Create a new Set with duplicate names
const names = new Set(["Zakariya", "Zakariya", "Shakir", "Fatima"]);

console.log("Initial Set:");
console.log(names); // Duplicate "Zakariya" will be automatically removed


// // ------------------------
// // ADDING ELEMENTS
// // ------------------------
names.add("Amina");
// names.add("Zakariya"); // This won't be added again because Sets don't allow duplicates

// console.log("\nAfter adding Amina and Zakariya again:");
// console.log(names);

// // ------------------------
// // CHECKING ELEMENTS
// // ------------------------
console.log("\nDoes the set have 'Shakir'?");
console.log(names.has("Shakir")); // true

// console.log("Does the set have 'Ali'?");
// console.log(names.has("Ali")); // false

// // ------------------------
// // DELETING ELEMENTS
// // ------------------------
names.delete("Fatima");
// console.log("\nAfter deleting Fatima:");
// console.log(names);

// // ------------------------
// // SIZE OF THE SET
// // ------------------------
// console.log("\nTotal unique names in the set:");
// console.log(names.size);

// // ------------------------
// // ITERATING THROUGH A SET
// // ------------------------
// console.log("\nIterating through the set (using for...of):");
// for (const name of names) {
//   console.log(name);
// }

// // ------------------------
// // CONVERT SET TO ARRAY
// // ------------------------
// const nameArray = Array.from(names);
// console.log("\nConverted Set to Array:");
// console.log(nameArray);

// // ------------------------
// // CLEARING THE SET
// // ------------------------
// names.clear();
// console.log("\nAfter clearing all elements:");
// console.log(names);

console.log(names);