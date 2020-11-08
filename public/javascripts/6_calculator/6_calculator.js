const myInput = document.getElementById("input_numbers");
let firstNum, myOperator;
let toClear = false;

document.querySelector(".myCulculatorBorder").addEventListener("click", menugerBottune, false);

function menugerBottune(event) {
    let howClickd = event.target;
    if (howClickd.firstChild.data > 0 && howClickd.firstChild.data < 10) {
        if (toClear) {
            myInput.value = "";
            myOperator = "";
            firstNum = myInput.value;
            toClear = false;
        }
        myInput.value += howClickd.firstChild.data;
    } else if ((howClickd.firstChild.data == "0" || howClickd.firstChild.data == "." ) && myInput.value.length > 0) {
        myInput.value += howClickd.firstChild.data;
    } else if (howClickd.firstChild.data == "C") {
        myInput.value = "";
        myOperator = "";
        firstNum = "";
    } else if (howClickd.firstChild.data == "/" || howClickd.firstChild.data == "*" || howClickd.firstChild.data == "+" || howClickd.firstChild.data == "-") {
        myOperator = howClickd.firstChild.data;
        toClear = false;
        firstNum = myInput.value;
        myInput.value = "";
    } else if (howClickd.firstChild.data == "=" && firstNum > 0 && myInput.value > 0) {
        myInput.value = colcoltorSwitch(firstNum, myInput.value, myOperator);
        toClear = true;
    }
}

function colcoltorSwitch(a, b, operator) {
    a = a * 1;
    b = b * 1;
    let resolt;
    switch (operator) {
        case "/":
            resolt = a / b;
            break;
        case "*":
            resolt = a * b;
            break;
        case "-":
            resolt = a - b;
            break;
        case "+":
            resolt = a + b;
            break;
    }
    return resolt;
}