import { dog } from "./dog.js";
import { horse } from "./horse.js";
import { cat } from "./cat.js";
import { dove } from "./dove.js";
import { republican } from "./republican.js";
import { hippo } from "./hippo.js";
import { dragon } from "./dragon.js";
import { frog } from "./frog.js";

const TableOfCards = document.querySelector(".wrapper");

let newArrOfAnimal = [dog.draw(), horse.draw(), cat.draw(), dove.draw(), republican.draw(), hippo.draw(), dragon.draw(), frog.draw(), dog.draw(), horse.draw(), cat.draw(), dove.draw(), republican.draw(), hippo.draw(), dragon.draw(), frog.draw()];
const len = newArrOfAnimal.length;

for (let i = 0; i < len; i++) {
    let indx = Math.floor(Math.random() * newArrOfAnimal.length);
    TableOfCards.appendChild(newArrOfAnimal[indx]);
    newArrOfAnimal.splice(indx, 1);
}



var permissionToReverse = 0;
let theFirstCard;

document.querySelector('.wrapper').addEventListener('click', function (e) {
    if (permissionToReverse < 2) {
        if (event.target.classList.contains('front')) {
            e.target.parentNode.classList.toggle('flip');
            permissionToReverse ++;
            if (permissionToReverse == 1) {
                theFirstCard = e.target;
                console.log(theFirstCard);
            }
            if(permissionToReverse == 2){
                if(theFirstCard.nextElementSibling.firstChild.className == e.target.nextElementSibling.firstChild.className){
                    permissionToReverse = 0;
                    
                }else{
                    setTimeout(() => {
                        theFirstCard.parentNode.classList.toggle('flip');
                        e.target.parentNode.classList.toggle('flip');
                    permissionToReverse = 0;
                    }, 3000);
                }
            }
        }
    }
}, false);
