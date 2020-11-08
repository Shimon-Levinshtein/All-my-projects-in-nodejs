const inputText = document.querySelector("#input_text");
const ulTestk = document.querySelector("#ulTeskList");

document.querySelector(".formTesk").addEventListener("click", function (event) {
    if (event.target.classList.contains('button_enter_task')) {
        event.preventDefault();
        if (inputText.value) {
            let newLi = document.createElement("li");
            let mewP = document.createElement("p");
            mewP.textContent = inputText.value;
            mewP.classList = "textP";
            newLi.classList = "liTesk";
            let newImgEdit = document.createElement("img");
            newImgEdit.src = "images/4_tasks/Edit.png";
            newImgEdit.classList = "editButtn";
            let newImgDelete = document.createElement("img");
            newImgDelete.src = "images/4_tasks/delete.png";
            newImgDelete.classList = "deleteButtn";
            let newInput = document.createElement("input");
            newInput.type = "checkbox";
            newInput.classList = "chekBoxBoutton";
            newLi.appendChild(mewP);
            newLi.appendChild(newInput);
            newLi.appendChild(newImgDelete);
            newLi.appendChild(newImgEdit);
            ulTestk.appendChild(newLi);
            inputText.value = "";
        } else {
            alert("לא הוכנס כל תוכן!!!");
        }
    }
    if (event.target.classList.contains("deleteButtn")) {
        event.target.parentNode.remove();
        console.log("222")
    } else if (event.target.classList.contains("editButtn")) {
        let editText = prompt("הכנס את תוכן לעריכת משימה.");
        let liToEdit = event.target.parentNode.childNodes[0];
        liToEdit.textContent = editText;
    } else if (event.target.classList.contains("chekBoxBoutton")) {
        let liTextToMark = event.target.parentNode.childNodes[0];
        liTextToMark.classList.toggle("mark_list");
    }

}, false);

document.querySelector("#input_text").addEventListener("keyup", function () {
    console.log(document.querySelector(".checkBoxKlict").checked == false);

    if (document.querySelector(".checkBoxKlict").checked) {
        let len = ulTestk.childNodes.length;
        for (let i = 3; i < len; i++) {
            if (ulTestk.childNodes[i].textContent.indexOf(inputText.value) > -1) {
                ulTestk.childNodes[i].style.display = "block";
            } else {
                ulTestk.childNodes[i].style.display = "none";
            }
        }
    }
    if (document.querySelector(".checkBoxKlict").checked == false) {
        let len = ulTestk.childNodes.length;
        for (let i = 3; i < len; i++) {
            ulTestk.childNodes[i].style.display = "block";
        }
    }
}, false);
