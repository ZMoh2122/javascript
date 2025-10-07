// Convert object → JSON string (to send to server)
let user = { name: "Zakariya", age: 18, city: "Robbinsdale" };
let jsonString = JSON.stringify(user);
console.log(jsonString);
// Output: {"name":"Zakariya","age":18,"city":"Robbinsdale"}

// Convert JSON string → object (when received from server)
let parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // Zakariya
