// Greeting Button Alert
function showMessage() {
  alert("Awesome! Your GitHub Pages site is working successfully.");
}

// Counter Logic
let count = 0;

function increment() {
  count++;
  document.getElementById("counter").innerText = count;
}

function decrement() {
  count--;
  document.getElementById("counter").innerText = count;
}