function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Zakariya");
greet("Ali");


function add(x, y) {
  return x + y;
}
console.log("Sum:", add(5, 7));
console.log("Sum:", add(10, 20)); 

function grade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
} {
console.log("Score 95:", grade(95));  
console.log("Score 82:", grade(82));  
console.log("Score 73:", grade(73));  
console.log("Score 65:", grade(65));  
console.log("Score 40:", grade(40));  
} 

function checkAge(age) {
    if (age < 18) {
        console.log("Too young");
    } else {
        console.log("Welcome!");
    }
}

let age1 = 15;
let age2 = 20;
let age3 = 18;

checkAge(age1);
checkAge(age2); 
checkAge(age3);  
