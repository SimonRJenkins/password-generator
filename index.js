const box1 = document.getElementById("pw-box1-text");
const box2 = document.getElementById("pw-box2-text");

const copyBox1 = document.getElementById("copy1")
const copyBox2 = document.getElementById("copy2")

let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let passwordLength = document.getElementById("length")

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
}

function generatePasswords() {

  let characters = [];

  for (let i = 65; i <= 90; i++) {
    characters.push(String.fromCharCode(i), String.fromCharCode(i).toLowerCase())
  }

  if (numbers.checked) {
    for (let i = 48; i <= 57; i++) {
      characters.push(String.fromCharCode(i))
    }
  }

  if (symbols.checked) {
    characters = [...characters, ...'!#$%&()*+,-./:;<=>?@[\\\'\\"]^_`']
  }

  let firstPassword = "";
  let secondPassword = "";

  for (let i = 0; i < passwordLength.value; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)];
    secondPassword += characters[Math.floor(Math.random() * characters.length)];
  }

  box1.textContent = firstPassword;
  box2.textContent = secondPassword;

  copyBox1.style.display = "flex"
  copyBox2.style.display = "flex"

  copyBox1.addEventListener('click', function () {
    copyToClipboard(box1.textContent)
  })

  copyBox2.addEventListener('click', function () {
    copyToClipboard(box2.textContent)
  })
}