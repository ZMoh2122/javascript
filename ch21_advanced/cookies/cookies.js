// Function to set a cookie
function setCookie() {
  let username = document.getElementById("username").value;
  if (username === "") {
    alert("Please enter a name first!");
    return;
  }

  // Cookie expires in 7 days
  document.cookie =
    "username=" + username + "; path=/; max-age=" + 7 * 24 * 60 * 60;
  document.getElementById("result").innerText =
    "Cookie saved! Refresh or click 'Show Cookie'.";
}

// Function to get a specific cookie value
function getCookie(name) {
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}

// Function to show the cookie
function showCookie() {
  let user = getCookie("username");
  if (user) {
    document.getElementById("result").innerText = "Welcome back, " + user + "!";
  } else {
    document.getElementById("result").innerText = "No cookie found.";
  }
}

// Function to delete the cookie
function deleteCookie() {
  document.cookie = "username=; path=/; max-age=0";
  document.getElementById("result").innerText = "Cookie deleted!";
}
