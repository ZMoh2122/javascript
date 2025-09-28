// Warehouse worker promise
const warehousePromise = new Promise(function (resolve, reject) {
  document.getElementById("status").textContent =
    "Promise is pending... Warehouse worker is searching.";

  // Simulate time it takes to check the warehouse (3 seconds)
  setTimeout(function () {
    // Randomly decide if the worker finds the item or not
    let found = Math.random() > 0.5;

    if (found) {
      resolve("Worker found the item! Promise fulfilled.");
    } else {
      reject("Worker did not find the item. Promise rejected.");
    }
  }, 3000);
});

// Handle the promise outcome
warehousePromise
  .then(function (successMessage) {
    document.getElementById("status").textContent = successMessage;
  })
  .catch(function (errorMessage) {
    document.getElementById("status").textContent = errorMessage;
  });
