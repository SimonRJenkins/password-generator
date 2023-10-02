let box1 = document.getElementById("pw-box1-text");
let box2 = document.getElementById("pw-box2-text");

let copyBox1 = document.getElementById("copy1")
let copyBox2 = document.getElementById("copy2")

const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")

function generatePasswords() {

  const characters = [];

  for (let i = 65; i <= 90; i++) {
    characters.push(String.fromCharCode(i))
  }

  for (let i = 97; i <= 122; i++) {
    characters.push(String.fromCharCode(i))
  }

  if (numbers.checked) {
    for (let i = 48; i <= 57; i++) {
      characters.push(String.fromCharCode(i))
    }
  }

  if (symbols.checked) {
    for (let i = 33; i <= 47; i++) {
      characters.push(String.fromCharCode(i))
    }
    for (let i = 58; i <= 64; i++) {
      characters.push(String.fromCharCode(i))
    }
    for (let i = 91; i <= 96; i++) {
      characters.push(String.fromCharCode(i))
    }
    for (let i = 123; i <= 126; i++) {
      characters.push(String.fromCharCode(i))
    }
  }

  let firstPassword = "";
  let secondPassword = "";

  for (let i = 0; i < 15; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)];
    secondPassword += characters[Math.floor(Math.random() * characters.length)];
  }

  //set 8-15 length

  box1.textContent = firstPassword;
  box2.textContent = secondPassword;

  copyBox1.style.display = "flex"
  copyBox2.style.display = "flex"



  copyBox1.addEventListener('click', function () {
    navigator.clipboard.writeText(box1.textContent)
  })

  copyBox2.addEventListener('click', function () {
    navigator.clipboard.writeText(box2.textContent)
  })
}