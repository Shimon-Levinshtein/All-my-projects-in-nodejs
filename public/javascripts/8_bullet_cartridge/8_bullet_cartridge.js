const myInput = document.querySelector(".myInput");
const stackBullets = document.querySelector(".stack-bullets");
let counterStack = 0;
let clearText = false;

document.querySelector(".pattern").addEventListener("click", function (event) {
    if(clearText){
        myInput.value = "";
         clearText = false;
    }
    if (event.target.classList.contains("pop")) {
        TakeOutBullet();
        clearText = true;
    }
    if (event.target.classList.contains("peek")) {
        if (counterStack > 0) {
            myInput.value = stackBullets.firstChild.textContent;
        } else {
            myInput.value = "The stack is empty!!!"
        }
        clearText = true;
    }
    if (event.target.classList.contains("count")) {
        if (counterStack > 0) {
            myInput.value = `in stack ${counterStack} bollet.`;
        } else {
            myInput.value = "The stack is empty!!!";
        }
        clearText = true;
    }
    if (event.target.classList.contains("push")) {
        createBollet();
    }
    
}, false);

function createBollet() {
    if (counterStack < 4) {
        if(myInput.value){
            const bollet = document.createElement("div");
            bollet.className = "bollet";
            bollet.textContent = myInput.value;
            stackBullets.prepend(bollet);
            myInput.value = "";
            counterStack++;
        }else{
            alert("Please enter a name for bollet!!!")
        }
    } else {
        alert("The stack is already full!!!");
    }
}
function TakeOutBullet() {
    if (counterStack > 0 && counterStack < 5) {
        myInput.value = stackBullets.firstChild.textContent;
        stackBullets.firstChild.remove();
        counterStack--;
    }
}

