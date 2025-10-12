// let num = -8 
// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// } 



// let number = 6 
// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// } 



// let a = 11 
// let b = 13 
// if (a > b) {
//     console.log(a + " is larger");
// } else if (b > a) {
//     console.log(b + " is larger");
// } else {
//     console.log("both are equal");
// } 



// let score = 85 
// if (score >= 90) {
//     console.log("A");
// } else if (score >= 80) {
//     console.log("B");
// } else if (score >= 70) {
//     console.log("C");
// } else if (score >= 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }  



// let vote = 15
// if (vote >= 18) {
//     console.log("you are eligible to vote");
// } 
// else {
//     console.log("you are too young to vote");
// } 



// let num = 10;
// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (num % 3 === 0) {
//   console.log("Fizz");
// } else if (num % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log(num);
// } 



// let username = "Zak" 
// let password = 123 
// if (username === "Zak" && password === 123) {
//     console.log("login is successful");
// } else {
//     console.log("Invalid username or password");
// } 



let year = 2024; // You can change this to test other years

// Step 1: If the year is divisible by 400, it's always a leap year
if (year % 400 === 0) {
  console.log("Leap year");

  // Step 2: If the year is divisible by 100 (but not 400), it's NOT a leap year
} else if (year % 100 === 0) {
  console.log("Not a leap year");

  // Step 3: If the year is divisible by 4 (but not 100), it's a leap year
} else if (year % 4 === 0) {
  console.log("Leap year");

  // Step 4: If none of the above, it's NOT a leap year
} else {
  console.log("Not a leap year");
}




