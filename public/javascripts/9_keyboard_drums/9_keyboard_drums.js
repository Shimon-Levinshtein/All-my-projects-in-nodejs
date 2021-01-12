document.getElementById("div-of-buttons-9-keyboard-drums").addEventListener("click", drumPlayerClick);

function drumPlayerClick(event) {
    let buttenClikd = event.target.textContent;
    buttenClikd = buttenClikd.toLowerCase();
    document.getElementById(buttenClikd).play();
    const classColor = event.target;
    classColor.classList.add("red-9-keyboard-drums");
    setTimeout(function () {
        classColor.classList.remove("red-9-keyboard-drums");
    }, 1000)
};

window.addEventListener("keyup", drumPlayer);

function drumPlayer(event) {
    let keyup = event.key;
    keyup = keyup.toLowerCase();
    document.getElementById(keyup).play();
    let Keykeyboard = event.key;
    Keykeyboard = Keykeyboard.toUpperCase();;
    const classColor = document.getElementById(Keykeyboard);
    classColor.classList.add("red-9-keyboard-drums");
    setTimeout(function () {
        classColor.classList.remove("red-9-keyboard-drums");
    }, 1000)
};
