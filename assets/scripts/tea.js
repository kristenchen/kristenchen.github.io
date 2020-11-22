let teaBag = document.getElementById("tea-img");
let bean = document.getElementById("bean-img");
let recipeBean = document.getElementById("recipe-bean");
let recipeTea = document.getElementById("recipe-tea");

function teaBagClick() {
    document.getElementById("coffee-recipe").classList.add("hidden");
    document.getElementById("tea-recipe").classList.remove("hidden");

    document.getElementById("flip-card").style.transform = "rotateY(180deg)";
}

teaBag.onclick = teaBagClick;


function beanClick() {
    document.getElementById("coffee-recipe").classList.remove("hidden");
    document.getElementById("tea-recipe").classList.add("hidden");

    document.getElementById("flip-card").style.transform = "rotateY(-180deg)";
}

bean.onclick = beanClick;

function recipeClick() {
    document.getElementById("flip-card").style.transform = "rotateY(0deg)";
}

recipeBean.onclick = recipeClick;
recipeTea.onclick = recipeClick;
