const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];




let isActive = false
let passOutput1El = document.getElementById("pass1-output-el")
let passOutput2El = document.getElementById("pass2-output-el")




function generatePass() {

    isActive = true
    renderPassp1()
    renderPassp2()

}


function renderPassp1() {

    if (isActive = true) {
        for (let i = 0; i < characters.length; i++)

            randomChar1 = Math.floor(Math.random() * characters.length)
        randomChar2 = Math.floor(Math.random() * characters.length)
        randomChar3 = Math.floor(Math.random() * characters.length)
        randomChar4 = Math.floor(Math.random() * characters.length)
        randomChar5 = Math.floor(Math.random() * characters.length)
        randomChar6 = Math.floor(Math.random() * characters.length)
        randomChar7 = Math.floor(Math.random() * characters.length)
        randomChar8 = Math.floor(Math.random() * characters.length)
        randomChar9 = Math.floor(Math.random() * characters.length)
        randomChar10 = Math.floor(Math.random() * characters.length)
        randomChar11 = Math.floor(Math.random() * characters.length)
        randomChar12 = Math.floor(Math.random() * characters.length)
        randomChar13 = Math.floor(Math.random() * characters.length)
        randomChar14 = Math.floor(Math.random() * characters.length)
        randomChar15 = Math.floor(Math.random() * characters.length)

        passOutput1El.textContent = (characters[randomChar1] + characters[randomChar2] + characters[randomChar3] + characters[randomChar4] + characters[randomChar5] + characters[randomChar6] + characters[randomChar7] + characters[randomChar8] + characters[randomChar9] + characters[randomChar10] + characters[randomChar11] + characters[randomChar12] + characters[randomChar13] + characters[randomChar14] + characters[randomChar15])

    }


}

generatePass()

function renderPassp2() {

    if (isActive = true) {
        for (let i = 0; i < characters.length; i++)

            randomChar1a = Math.floor(Math.random() * characters.length)
        randomChar2a = Math.floor(Math.random() * characters.length)
        randomChar3a = Math.floor(Math.random() * characters.length)
        randomChar4a = Math.floor(Math.random() * characters.length)
        randomChar5a = Math.floor(Math.random() * characters.length)
        randomChar6a = Math.floor(Math.random() * characters.length)
        randomChar7a = Math.floor(Math.random() * characters.length)
        randomChar8a = Math.floor(Math.random() * characters.length)
        randomChar9a = Math.floor(Math.random() * characters.length)
        randomChar10a = Math.floor(Math.random() * characters.length)
        randomChar11a = Math.floor(Math.random() * characters.length)
        randomChar12a = Math.floor(Math.random() * characters.length)
        randomChar13a = Math.floor(Math.random() * characters.length)
        randomChar14a = Math.floor(Math.random() * characters.length)
        randomChar15a = Math.floor(Math.random() * characters.length)

        passOutput2El.textContent = (characters[randomChar1a] + characters[randomChar2a] + characters[randomChar3a] + characters[randomChar4a] + characters[randomChar5a] + characters[randomChar6a] + characters[randomChar7a] + characters[randomChar8a] + characters[randomChar9a] + characters[randomChar10a] + characters[randomChar11a] + characters[randomChar12a] + characters[randomChar13a] + characters[randomChar14a] + characters[randomChar15a])
    }
}
