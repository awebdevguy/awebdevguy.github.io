/*
* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
*/
var m = document.getElementById("menu");
var h = document.getElementById("header");
var sw = screen.width;

function toggleMenu() {    
    if (m.style.display === "block" || m.style.display === "flex") {
        displayNone();
    } else {
        if(sw < 800) {
            displayBlock();
        } else {
            displayFlex();
        }
    }
}

function hideMenu() {
    if(sw < 800) {
        displayNone();
    } else {
        displayFlex();
    }
}

function displayBlock() {
    m.style.display = "block";
}

function displayFlex() {
    h.style.display = "flex";
    h.style.justifyContent = "space-between";
    m.style.display = "flex";
    m.style.position = "relative";
    m.style.top = "0";
    m.style.justifyContent = "flex-end";
    m.style.right = "75px";
}

function displayNone() {
    m.style.display = "none";
}

/** 
 * Changes color theme and saves it to local storage
 */
let theme = localStorage.getItem('theme');

if(theme == null){
    changeTheme(document.getElementById('light-mode'));
} else {
    changeTheme(document.getElementById(theme));
}

function changeTheme(theme) {
    var cssFile;
    switch(theme.id) {
        case "light-mode":
            cssFile = "default.css";
            break;
        case "blue-mode":
            cssFile = "blue.css";
            break;
        case "green-mode":
            cssFile = "green.css";
            break;
        case "purple-mode":
            cssFile = "purple.css";
    }
    document.getElementById("theme-style").href = cssFile;
    localStorage.setItem('theme', theme.id);
}

function readMore(index) {
    var dots = document.getElementById("dots" + index);
    var moreText = document.getElementById("more" + index);
    var link = document.getElementById("btn" + index);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      link.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      link.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }