// function sayHello(name) {
//     console.log(`Hello, ${name}!`);
// }
// sayHello("Zakariya")


// function addNumbers(a, b) {
//     return (a + b)
// }
// console.log(addNumbers(4, 8));


// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// console.log(checkEvenOdd(9));
// console.log(checkEvenOdd(2));


// function rectangleArea(length, width) {
//     return length * width
// }
// console.log(rectangleArea(6, 2));


// function toFahrenheit(celsius) {
//   // Step 1: multiply Celsius by 9
//   let step1 = celsius * 9;
//   console.log("After multiplying by 9:", step1);

//   // Step 2: divide that result by 5
//   let step2 = step1 / 5;
//   console.log("After dividing by 5:", step2);

//   // Step 3: add 32
//   let fahrenheit = step2 + 32;
//   console.log("After adding 32:", fahrenheit);

//   // Final result
//   return fahrenheit;
// }
// // Try it out
// console.log("Result:", toFahrenheit(25));


function findMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(findMax(4, 55));
console.log(findMax(5, 33));


function findMaxOfThree(a, b, c) {
  return Math.max(a, b, c);
}
console.log(findMaxOfThree(3, 6, 9));
console.log(findMaxOfThree(10, 5, 7));
console.log(findMaxOfThree(4, 12, 8));


function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("Hello"));
console.log(reverseStr("Zakariya")); 


function countChar(str) {
    return str.length
} 
console.log(countChar("javascript"));
console.log(countChar("Mohamed")); 



function multiplicationTable(num) {
  // We want to multiply 'num' by numbers 1 through 10
  // So we use a loop that starts at 1 and ends at 10
  for (let i = 1; i <= 10; i++) {
    // At each step of the loop:
    // - i will go 1, 2, 3 ... up to 10
    // - We multiply num * i
    // - Then we display the result using console.log
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// Example: if num = 5
// Loop will run: 5x1=5, 5x2=10, ... 5x10=50
multiplicationTable(5); 



function factorial(n) {
    // Factorial means multiplying all numbers from 1 up to n
    // Example: 5! = 1 * 2 * 3 * 4 * 5 = 120

    let result = 1; // Start at 1 because multiplying by 1 does not change anything

    // Use a loop to multiply numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        // Each time, we multiply the current result by i
        // First loop: result = 1 * 1 = 1
        // Second loop: result = 1 * 2 = 2
        // Third loop: result = 2 * 3 = 6
        // Fourth loop: result = 6 * 4 = 24
        // Fifth loop: result = 24 * 5 = 120
        result *= i; 
    }

    return result; // After loop ends, we return the final answer
}

// Example runs:
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040


