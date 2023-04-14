const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let box1 = document.getElementById("pw-box1-text")
let box2 = document.getElementById("pw-box2-text")

function test() {
    console.log("test")
    box1.textContent = "box1"
    box2.textContent = "box2"
}

function generatePasswords() {
    let firstPassword = "";

    for (let i = 0; i < 15; i++) {
        firstPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    box1.textContent = firstPassword;

    let secondPassword = "";
    for (let i = 0; i < 15; i++) {
        secondPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    box2.textContent = secondPassword;
}

