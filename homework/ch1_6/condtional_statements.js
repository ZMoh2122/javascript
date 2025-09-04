let age = 60;

if (age < 12) {
  console.log("you are a child");
} else if (age >= 12 && age < 18) {
  console.log("you are a teenager");
} else if (age >= 18 && age < 60) {
  console.log("your are a adult");
} else if (age >= 60) {
  console.log("you are a senior");
}

let number = 0;
if (number > 0) {
  console.log("this number is a positive");
} else if (number < 0) {
  console.log("this number is a negative");
} else {
  console.log("this number is 0");
}

// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("invalid day number");
// }

let day = 3;

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

if (day >= 1 && day <= 7) {
  console.log(days[day - 1]);
} else {
  console.log("invalid day number");
}

let x = 9;
if (x % 2 === 0) {
  console.log(x + " is even");
} else {
  console.log(x + " is odd");
}
