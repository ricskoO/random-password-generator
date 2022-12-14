const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];



let passOutput1El = document.getElementById("pass1-output-el")
let passOutput2El = document.getElementById("pass2-output-el")
let passwordLength = 15


function randomChar() {

    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePass() {

    passOutput1El.textContent = "          "
    passOutput2El.textContent = "          "

    for (let i = 0; i < passwordLength; i++) {
        passOutput1El.textContent += randomChar()
        passOutput2El.textContent += randomChar()
    }


}