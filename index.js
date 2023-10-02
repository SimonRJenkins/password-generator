const characters = [];

//33-47 symbols
//48-57 numbers
//58-64 symbols
//65-90 letters
//91-96 symbols
//97-122 letters
//123-126 symbols

for (let i = 33; i <= 126; i++) {
  characters.push(String.fromCharCode(i));
}

let box1 = document.getElementById("pw-box1-text");
let box2 = document.getElementById("pw-box2-text");

let copyBox1 = document.getElementById("copy1")
let copyBox2 = document.getElementById("copy2")

function generatePasswords() {
  let firstPassword = "";
  let secondPassword = "";

  for (let i = 0; i < 15; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)];
    secondPassword += characters[Math.floor(Math.random() * characters.length)];
  }

  box1.textContent = firstPassword;
  box2.textContent = secondPassword;

  copyBox1.style.display = "flex"
  copyBox2.style.display = "flex"
}


copyBox1.addEventListener('click', function() {
  navigator.clipboard.writeText(box1.textContent)
})

copyBox2.addEventListener('click', function() {
  navigator.clipboard.writeText(box2.textContent)
})