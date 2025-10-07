// Create a new Map with month-sales pairs
const monthlySales = new Map([
  ["January", 1200],
  ["February", 1350],
  ["March", 1600],
  ["April", 900],
  ["May", 2000],
  ["June", 1850],
]);

console.log("Initial Monthly Sales Map:");
console.log(monthlySales);

// ------------------------
// ADDING NEW ENTRIES
// ------------------------
// monthlySales.set("July", 2100);
// monthlySales.set("August", 1900);

// console.log("\nAfter adding July and August:");
// console.log(monthlySales);

// // ------------------------
// // GETTING VALUES
// // ------------------------
// console.log("\nGet March sales:");
// console.log(monthlySales.get("March")); // 1600

// console.log("Get December sales (not in map):");
// console.log(monthlySales.get("December")); // undefined

// // ------------------------
// // CHECKING IF A KEY EXISTS
// // ------------------------
// console.log("\nDoes the map have 'May'?");
// console.log(monthlySales.has("May")); // true

// console.log("Does the map have 'November'?");
// console.log(monthlySales.has("November")); // false

// // ------------------------
// // DELETING A KEY
// // ------------------------
// monthlySales.delete("April");
// console.log("\nAfter deleting April:");
// console.log(monthlySales);

// // ------------------------
// // MAP SIZE
// // ------------------------
// console.log("\nTotal months recorded in the map:");
// console.log(monthlySales.size);

// // ------------------------
// // LOOPING THROUGH A MAP
// // ------------------------
// console.log("\nIterating through the map (using for...of):");
// for (const [month, sales] of monthlySales) {
//   console.log(`${month}: $${sales}`);
// }

// // ------------------------
// // CONVERT MAP TO ARRAY
// // ------------------------
// const salesArray = Array.from(monthlySales);
// console.log("\nConverted Map to Array:");
// console.log(salesArray);

// // ------------------------
// // CLEARING THE MAP
// // ------------------------
// monthlySales.clear();
// console.log("\nAfter clearing all entries:");
// console.log(monthlySales);
