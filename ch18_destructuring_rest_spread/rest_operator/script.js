// function sum (...numbers) {
//   return numbers.reduce((total, n) => total + n, 0);
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(5, 10, 15, 20)); // 50


function printNames(name1, name2, ...rest) {
  console.log(name1);
  console.log(name2);
  console.log(rest);
}
printNames("Zakariya", "Mohamed", "Jibril", "Nur", "Kayla")