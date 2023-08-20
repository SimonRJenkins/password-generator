const characters = [];

for (let i = 33; i <= 126; i++) {
  characters.push(String.fromCharCode(i));
}

let box1 = document.getElementById("pw-box1-text");
let box2 = document.getElementById("pw-box2-text");

function generatePasswords() {
  let firstPassword = "";
  let secondPassword = "";

  for (let i = 0; i < 15; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)];
    secondPassword += characters[Math.floor(Math.random() * characters.length)];
  }

  box1.textContent = firstPassword;
  box2.textContent = secondPassword;
}
