function changeColor() {
    let word = "abcdef1234567890"
    let randstr = ""
    let randtxt = ""
    let txt = document.getElementById('hex_code');
    while (randstr.length <6) {
        randstr+=word[Math.floor(Math.random() * word.length)];
        randtxt+=word[Math.floor(Math.random() * word.length)];
    }
    document.getElementsByClassName('content')[0].style= `background-color: #${randstr};color: #${randtxt}`; 

    txt.innerText = randstr
}