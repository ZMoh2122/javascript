const input = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");

// When the page loads, check if a name is already stored
window.addEventListener("load", () => {
  const savedName = sessionStorage.getItem("name");
  if (savedName != undefined) {
    message.textContent = `Welcome back, ${savedName}!`;
    input.value = savedName; // show it in the input
  }
});

// Save the name to sessionStorage
saveBtn.addEventListener("click", () => {
  const name = input.value.trim();
  if (name === "") {
    message.textContent = "Please enter a name.";
    return;
  }
  sessionStorage.setItem("name", name);
  message.textContent = `Saved: ${name}`;
});

// Clear the stored name
clearBtn.addEventListener("click", () => {
  sessionStorage.removeItem("name");
  message.textContent = "Name cleared from storage.";
  input.value = "";
});
