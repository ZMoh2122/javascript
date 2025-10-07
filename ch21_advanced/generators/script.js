// function listNames() {
//     console.log("Zakariya"); 
//     console.log("Jibril"); 
//     console.log("Mubarak"); 
//     console.log("Siham"); 
//     console.log("Fartun"); 
//     console.log("Nur");

// }
// listNames()



// function* listNames() {
//     yield "Zakariya"; 
//     yield "Jibril"; 
//     yield "Mubarak"; 
//     yield "Siham"; 
//     yield "Fartun"; 
//     yield "Nur";
// }

// // create generator object
// const names = listNames();

// // call next() for each name
// console.log(names.next().value); // Zakariya
// console.log(names.next().value); // Jibril
// console.log(names.next().value); // Mubarak
// console.log(names.next().value); // Siham
// console.log(names.next().value); // Fartun
// console.log(names.next().value); // Nur



function* listNames() {
  yield "Zakariya";
  yield "Jibril";
  yield "Mubarak";
  yield "Siham";
  yield "Fartun";
  yield "Nur";
}
// create a helper sleep function (waits given ms)
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showNamesWithDelay() {
  const names = listNames();

  console.log(names.next().value); // Zakariya
  await sleep(3000); // wait 3 seconds

  console.log(names.next().value); // Jibril
  await sleep(3000);

  console.log(names.next().value); // Mubarak
  await sleep(3000);

  console.log(names.next().value); // Siham
  await sleep(3000);

  console.log(names.next().value); // Fartun
  await sleep(3000);

  console.log(names.next().value); // Nur
}

showNamesWithDelay();

