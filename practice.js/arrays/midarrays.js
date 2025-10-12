let fruits = ["apple", "banana", "cherry", "orange"]
fruits.splice(1, 2) 
console.log(fruits); 


let numbers = [10, 20, 30, 40, 50]; 
let middle = numbers.slice(1, 4) 
console.log(middle); 


let colors = ["red", "blue", "green", "yellow"]; 
let index = colors.indexOf("green") 
console.log(index);


let animals = ["dog", "cat", "rabbit"]; 
if (animals.includes("cat")) {
    console.log("YES");
} else {
    console.log("NO");
} 


let nums = [1, 2, 3, 4, 5]; 
for (let i = 0; i < nums.length; i++) {
    console.log(nums [i] * 2);
} 


let number = [5, 10, 15, 20]; 
let sum = 0 
for (let i = 0; i < number.length; i++) {
    sum += number[i]
} 
console.log(sum); 


let num = [5, 10, 15, 20]; 
let even = num.filter(num => num % 2 === 0) 
console.log(even);