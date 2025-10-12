let numbers = [3, 7, 12, 5, 9, 20];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 8)
    console.log(numbers[i]);
} 


let words = ["apple", "banana", "grape"];

for (let i = 0; i < words.length; i++) {
    console.log(words[i].toUpperCase());
} 


let nums = [4, 11, 8, 9, 12, 7];
let count = 0;

for (let n of nums) {
    if (n % 2 === 0) {
        count++
    }
}  
console.log("Even Numbers:", count); 


let values = [10, 5, 3, 7];
let total = 0;

for (let i = 0; i < values.length; i++) {
    total += values[i]
}
console.log("Total:", total);


for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++)
    console.log(`${i} x ${j} = ${i * j}`);
} 



