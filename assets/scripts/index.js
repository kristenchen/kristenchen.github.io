let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

function darkMode() {
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");

    document.getElementById("tea-dark").classList.toggle("hidden");
    document.getElementById("tea-light").classList.toggle("hidden");

    document.querySelector("body").style.backgroundColor = "#748CA5";

    document.querySelector("header").style.color = "#FFFFFF";

    let txt = document.getElementsByClassName("bottom-text");
    for (let item of txt) {
        item.style.color = "#FFFFFF";
    }

    var glass = document.getElementsByClassName("glass");
    for (let item of glass) {
        item.style.backgroundColor = "#60717F";
    }
}

function lightMode() {
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");

    document.getElementById("tea-dark").classList.toggle("hidden");
    document.getElementById("tea-light").classList.toggle("hidden");

    document.querySelector("body").style.backgroundColor = "#BDD2E4";

    document.querySelector("header").style.color = "#676B70";

    let txt = document.getElementsByClassName("bottom-text");
    for (let item of txt) {
        item.style.color = "#676B70";
    }

    var glass = document.getElementsByClassName("glass");
    for (let item of glass) {
        item.style.backgroundColor = "#E5EFF7";
    }

}

sun.onclick = darkMode;
moon.onclick = lightMode;

let med = document.getElementById("meditation");
let cup = document.getElementById("cup");
let journal = document.getElementById("journal");

function showText(text) {
    document.getElementById(text).style.display = "block";
}

function hideText(text) {
    document.getElementById(text).style.display = "none";
}

med.onmouseover = function() {
    showText("meditate-text");
}
med.onmouseout = function() {
    hideText("meditate-text");
}

cup.onmouseover = function() {
    showText("drink-text");
}
cup.onmouseout = function() {
    hideText("drink-text");
}

journal.onmouseover = function() {
    showText("credits-text");
}
journal.onmouseout = function() {
    hideText("credits-text");
}

moon.onmouseover = function() {
    showText("moon-text");
}
moon.onmouseout = function() {
    hideText("moon-text");
}

sun.onmouseover = function() {
    showText("sun-text");
}
sun.onmouseout = function() {
    hideText("sun-text");
}

