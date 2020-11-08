//teys
//2d214f911be71226f334579f733d600e
//0a279e7c10a31beeaba845725dfba0cf
//7dc8a9427e4a27d0adaa5367f4898f97
//56f57a3cbd3df327bafe32ed4e0e86a2
//ac5a345747d4a2ca57c695ca683d2494
const mykey = "0a279e7c10a31beeaba845725dfba0cf";
const inputSeatch = document.querySelector(".searchTerm");
const leftPage = document.querySelector(".left");
const middlePage = document.querySelector(".middle");
const rightPage = document.querySelector(".right");
const hideFavorites = document.querySelector(".hide-favorites");
const divPopular = document.querySelector(".div-popular");

document.querySelector(".myPege").addEventListener("click", function (event) {
    if (event.target.classList.contains('delete-from-favorites') || event.target.classList.contains('delete-from-shopping')) {
        event.target.parentElement.remove();
        return;
    }
    if (event.target.classList.contains('fa-search') || event.target.classList.contains('searchButton')) {
        if (inputSeatch.value) {
            requestMeanuHTTP(inputSeatch.value);
        } else {
            alert("No search value entered !!!");
        }
    }
    if (event.target.parentElement.classList.contains('recipe-view') || event.target.classList.contains('recipe-view') || event.target.parentElement.classList.contains('recipe-view-favorites') || event.target.classList.contains('recipe-view-favorites')) {//recipe-view-favorites
        let recipeid = "";
        if (event.target.classList.contains('recipe-view')) {
            recipeid = event.target.getAttribute("data-recipeid")
        } else {
            recipeid = event.target.parentElement.getAttribute("data-recipeid");
        }
        viewRecipe(recipeid);
    }
    if (event.target.classList.contains('heart-recipeSpecification')) {
        addRecipeToFavorites(event.target.getAttribute("data-id"), event.target.getAttribute("data-img"), event.target.getAttribute("data-titel"));
    }
    if (event.target.classList.contains("circle-design")) {
        preparationByNumberOfPeople(event.target.textContent, event.target)
    }
    if (event.target.classList.contains("button-to-buy")) {
        addShoppingList(recipeid = event.target.getAttribute("data-id"));
    }
}, false);



function requestMeanuHTTP(food) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://food2fork.com/api/search?';
    fetch(`${proxy}${url}key=${mykey}&q=${food}`) 
        .then(data => data.json())
        .then(data => {
            searchRecipes(data);
            inputSeatch.value = "";
        })
        .catch(e => console.log(e));
}

function searchRecipes(arr) {
    console.log(arr);

    for (let i = 0; i < arr.count; i++) {
        const recipeView = document.createElement("div");
        recipeView.className = "recipe-view";
        recipeView.setAttribute("data-recipeId", arr.recipes[i].recipe_id);
        const img = document.createElement("img");
        const recipeTitle = document.createElement("div");
        recipeTitle.className = "recipe-title";
        img.src = arr.recipes[i].image_url;
        recipeView.appendChild(img);
        recipeTitle.textContent = arr.recipes[i].title;
        recipeView.appendChild(recipeTitle);
        leftPage.appendChild(recipeView);
        
    }


}

function viewRecipe(recipeid) {
    let obj = {};
    const proxyB = 'https://cors-anywhere.herokuapp.com/';
    const urlB = "https://www.food2fork.com/api/get?";
    fetch(`${proxyB}${urlB}key=${mykey}&rId=${recipeid}`) //pizza
        .then(data => data.json())
        .then(data => {
            obj = data;
            createHTMLDiv();
        })
        .catch(e => console.log(e));
    function createHTMLDiv() {
        console.log(obj);
        
        const componentArr = parseIngredients(obj.recipe.ingredients);
        let component = ``
        for (let i = 0; i < componentArr.length; i++) {
            component += ` <div class="component">⊛ <div class="input-quantity-teaspoons">${componentArr[i].count}</div> ${componentArr[i].unit} ${componentArr[i].ingredient}</div>`
        }
        let divViweRecipe = `
        <div class="recipeSpecification">
                        <img src="${obj.recipe.image_url}">
                        <div class="titel-recipeSpecification">${obj.recipe.title}</div>
                        <div class="flex-recipeSpecification">
                            <div class="cooking-time">⏱ ${CalculatesTime(obj.recipe.ingredients.length)} MINUTES</div>
                            <div class="amount-peole">🕴 4 SERVINGS</div>
                            <div class="circle-design">-</div>
                            <div class="circle-design">+</div>
                            <div class="heart-recipeSpecification" data-id="${recipeid}" data-img="${obj.recipe.image_url}" data-titel="${obj.recipe.title}" >♡</div>
                        </div>
                        <div class="recipe-components">
                            ${component}
                        </div>
                        <div class="flex-to-cnter">
                            <div class="button-to-buy" data-id="${recipeid}">🛒 ADD TO SHOPPING LIST</div>
                        </div>
                        <div class="directions-cook-div">
                        <div class="how-cook">HOW TO COOK IT</div>
                        <div class="flex-to-cnter">
                            <div class="cooking-explanation">
                                This recipe was carefully designed and tested by Two Peas and
                                Their Pod. Please check out directions at their website.
                            </div>
                        </div>
                        <div class="flex-to-cnter">
                        <a href="${obj.recipe.source_url}" target="_blank" style="text-decoration:none"><div class="directions-button">DIRECTIONS ▶</div></a> 
                        </div>
                    </div>  
                      
        `;
        middlePage.innerHTML = divViweRecipe;
    }
}

function parseIngredients(ingredients) {
    const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound', 'kg', 'g'];

    const newIngredients = ingredients.map(el => {
        let ingredient = el.toLowerCase();
        unitsLong.forEach((unit, i) => {
            ingredient = ingredient.replace(unit, unitsShort[i]);
        });

        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

        const arrIng = ingredient.split(' ');
        const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

        let objIng;
        if (unitIndex > -1) {

            const arrCount = arrIng.slice(0, unitIndex);

            let count;
            if (arrCount.length === 1) {
                count = eval(arrIng[0].replace('-', '+'));
            } else {
                count = eval(arrIng.slice(0, unitIndex).join('+'));
            }

            objIng = {
                count,
                unit: arrIng[unitIndex],
                ingredient: arrIng.slice(unitIndex + 1).join(' ')
            };

        } else if (parseInt(arrIng[0], 10)) {
            objIng = {
                count: parseInt(arrIng[0], 10),
                unit: '',
                ingredient: arrIng.slice(1).join(' ')
            }
        } else if (unitIndex === -1) {
            objIng = {
                count: 1,
                unit: '',
                ingredient
            }
        }

        return objIng;
    });
    return newIngredients;
};

function addRecipeToFavorites(dataId, imgId, titelId) {
    const recipeView = document.createElement("div");
    recipeView.className = "recipe-view-favorites";
    recipeView.setAttribute("data-recipeId", dataId);
    const img = document.createElement("img");
    const recipeTitle = document.createElement("div");
    const deleteDiv = document.createElement("div");
    deleteDiv.className = "delete-from-favorites";
    deleteDiv.textContent = "🗑";
    recipeTitle.className = "recipe-title-favorites";
    img.src = imgId;
    recipeView.appendChild(img);
    recipeTitle.textContent = titelId;
    recipeView.appendChild(recipeTitle);
    recipeView.appendChild(deleteDiv);
    divPopular.appendChild(recipeView);
}
function CalculatesTime(nember) {
    let hours = 0;
    let minutes = 0;
    for (let i = 0; i < nember; i++) {
        if (minutes == 60) {
            hours = hours + 1;
            minutes = 0;
        }
        minutes = minutes + 15;
    }
    return "0" + hours + ":" + minutes;
};

function preparationByNumberOfPeople(parameter, eventT) {
    let arrComponent = eventT.parentElement.nextElementSibling.children;
    if (parameter == "+") {
        if (!eventT.previousElementSibling.previousElementSibling.getAttribute("data-amountPeoople")) {
            eventT.previousElementSibling.previousElementSibling.setAttribute("data-amountPeoople", 4);
        }
        let a = eventT.previousElementSibling.previousElementSibling.getAttribute("data-amountPeoople");
        eventT.previousElementSibling.previousElementSibling.setAttribute("data-amountPeoople", (a * 1) + 1);
        a = eventT.previousElementSibling.previousElementSibling.getAttribute("data-amountPeoople")
        eventT.previousElementSibling.previousElementSibling.textContent = `🕴 ${a} SERVINGS`;
        eventT.previousElementSibling.previousElementSibling.setAttribute("data-rtueFalse", "1");
    } else {
        if (!eventT.previousElementSibling.getAttribute("data-amountPeoople")) {
            eventT.previousElementSibling.setAttribute("data-amountPeoople", 4);
        }
        if (eventT.previousElementSibling.getAttribute("data-amountPeoople") > 0) {
            let a = eventT.previousElementSibling.getAttribute("data-amountPeoople");
            eventT.previousElementSibling.setAttribute("data-amountPeoople", (a * 1) - 1);
            a = eventT.previousElementSibling.getAttribute("data-amountPeoople");
            eventT.previousElementSibling.textContent = `🕴 ${a} SERVINGS`;
            eventT.previousElementSibling.setAttribute("data-rtueFalse", "1");

        }
    }
    for (let i = 0; i < arrComponent.length; i++) {
        if (!arrComponent[i].childNodes[1].getAttribute("data-num")) {
            arrComponent[i].childNodes[1].setAttribute("data-num", arrComponent[i].childNodes[1].textContent / 4);
        }
        if (parameter == "+") {
            let a = arrComponent[i].childNodes[1].getAttribute("data-num");
            let b = arrComponent[i].childNodes[1].textContent;
            a = (a * 1).toFixed(2) * 1;
            b = (b * 1).toFixed(2) * 1;
            let c = (a + b).toFixed(2) * 1;
            arrComponent[i].childNodes[1].textContent = c;
        } else {
            let a = eventT.previousElementSibling.getAttribute("data-rtueFalse");
            if (a == 1) {
                let a = arrComponent[i].childNodes[1].getAttribute("data-num");
                let b = arrComponent[i].childNodes[1].textContent;
                a = (a * 1).toFixed(2) * 1;
                b = (b * 1).toFixed(2) * 1;
                let c = (b - a).toFixed(2) * 1;
                arrComponent[i].childNodes[1].textContent = c;
            }
        }
    }
    if (eventT.previousElementSibling.getAttribute("data-amountPeoople") == 0) {
        eventT.previousElementSibling.setAttribute("data-rtueFalse", "0");
    }
}
function addShoppingList(recipeid) {
    let obj = {};
    const proxyB = 'https://cors-anywhere.herokuapp.com/';
    const urlB = "https://www.food2fork.com/api/get?";
    fetch(`${proxyB}${urlB}key=ac5a345747d4a2ca57c695ca683d2494&rId=${recipeid}`) //pizza
        .then(data => data.json())
        .then(data => {
            obj = data;
            createHTMLDiv();
        })
        .catch(e => console.log(e));


    function createHTMLDiv() {
        const componentArr = parseIngredients(obj.recipe.ingredients);
        let component = ``
        for (let i = 0; i < componentArr.length; i++) {
            component += ` <div class="component-shopping"> <input class="input-shopping-list" step="0.25" type="number" value="${componentArr[i].count}"><div class="middle-text-sgopping"> ${componentArr[i].unit} ${componentArr[i].ingredient}</div><div class="delete-from-shopping">x</div></div>`
        }
        let divViweRecipe = `
        <div class="my-shop-list">MY SHOPPING LIST 🛒</div>
        <div class="shopping-list">
            <div class="recipe-view">
              <img src="${obj.recipe.image_url}">
              <div class="recipe-title">${obj.recipe.title}</div>
            </div>
            <div class="recipe-shopping">
               ${component}
            </div>
         </div>    
        `;

        rightPage.innerHTML = divViweRecipe;

    
}}
const searchKey = document.querySelector('.searchTerm');

searchKey.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (inputSeatch.value) {
            requestMeanuHTTP(inputSeatch.value);
        } else {
            alert("No search value entered !!!");
        }
    }
});
