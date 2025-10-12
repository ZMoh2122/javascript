function changeText() {
  document.getElementById("message").textContent = "You clicked the button!";
}


function changeColor() {
    let text = document.getElementById("colorText");
    text.style.color = "red";
    text.style.fontWeight = "bold";
} 


function hideSecret() {
  document.getElementById("secret").style.display = "none";
}

function showSecret() {
  document.getElementById("secret").style.display = "block";
}


function addItem() {
  let newItem = document.createElement("p");
  newItem.textContent = "New item added!";
  document.getElementById("list").appendChild(newItem);
}


function changeImage() {
  document.getElementById("myImage").src = "https://via.placeholder.com/150";
}
