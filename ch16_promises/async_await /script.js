// A function that returns a promise
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Data received!");
    }, 2000);
  });
}

// Using async/await
async function fetchData() {
  console.log("⏳ Waiting for data...");
  const result = await getData(); // waits until promise is resolved
  console.log(result);
}

fetchData();
