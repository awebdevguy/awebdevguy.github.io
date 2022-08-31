/*
* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
*/
var m = document.getElementById("menu");
var h = document.getElementById("header");
var bw = document.documentElement.clientWidth;
var hamburger = document.getElementById("hamburger");
const home = document.getElementById('home-link');
const greetingElement = document.getElementById('greeting2');
const greeting = 'a web developer...';
let index = 0;

// Display of menu on load depends on current screen size.
hideMenu();
scrollGreeting();  // Scrolls out the greeting one letter at a time.
 
function toggleMenu() {  
    
    bw = document.documentElement.clientWidth;
    
    if (m.style.display === "block" || m.style.display === "flex") {
        displayNone();
    } else {
        if(bw < 800) {
            displayBlock();
        } else {
            displayFlex();
        }
    }
}

// Menu displays inline if large screen otherwise is hidden.
function hideMenu() {

    bw = document.documentElement.clientWidth;

    if(bw < 800) {
        displayNone();
    } else {
        displayFlex();
    }
}

// Mobile displays menu in block.
function displayBlock() {
    h.style.display = "block";
    h.style.justifyContent = "initial";
    m.style.display = "block";
    m.style.position = "initial";
    m.style.top = "auto";
    m.style.justifyContent = "initial";
    m.style.right = "auto";
    hamburger.style.display = "initial";
}

// Large screens displays menu inline.
function displayFlex() {
    h.style.display = "flex";
    h.style.justifyContent = "space-between";
    m.style.display = "flex";
    m.style.position = "relative";
    m.style.top = "0";
    m.style.justifyContent = "flex-end";
    hamburger.style.display = "none";
}

// Hides menu list and displays hamburger icon.
function displayNone() {
    m.style.display = "none";
    hamburger.style.display = "initial";
}

// Switch light and dark themes
function toggleMode() {

  if(document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      document.getElementById('mode').innerText = 'Dark';
      document.getElementById('home').setAttribute('style', "background: url('images/pexels-desk.jpg'); background-repeat: no-repeat; background-size: cover; height: 1000px;");
      localStorage.setItem('mode', 'light');
  } else {
      document.body.classList.add("dark-mode");
      document.getElementById('mode').innerText = 'Light';
      document.getElementById('home').setAttribute('style', "background: url('images/pexels-big-moon.jpg'); background-repeat: no-repeat; background-size: cover; height: 1000px;");
      localStorage.setItem('mode', 'dark');
  } 

  bw = document.documentElement.clientWidth;
  
  if(bw < 800) {
      hideMenu();
  }
}

// Toggle picture, not really intended, like an easter egg.
function changePic(element) {

    if(element.id == "profile-pic") {
        element.setAttribute('src', "images/profile_les_rose.jpg");
        document.getElementById('pic-text').textContent = "My beautiful wife, Rose.";
        element.setAttribute('id', "profile-pic2");
    } else if(element.id == "profile-pic2") {
        element.setAttribute('src', "images/profile_banff.jpg");
        document.getElementById('pic-text').textContent = "Banff";
        element.setAttribute('id', "profile-pic3");
    } else {
        element.setAttribute('src', "images/profile_banff_bw.jpg");
        document.getElementById('pic-text').textContent = "Banff";
        element.setAttribute('id', "profile-pic");
    }
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

//   Contact form send email
window.addEventListener( "load", function () {

    function sendData() {
        const XHR = new XMLHttpRequest();
  
        // Bind the FormData object and the form element
        const FD = new FormData( form );
    
        // Define what happens on successful data submission
        XHR.addEventListener( "load", function(event) {
            if(event.target.responseText) {
                alert( "Your email was sent successfully to Les, Thank you.");
            }
            resetContactForm();
        } );
    
        // Define what happens in case of error
        XHR.addEventListener( "error", function( event ) {
            alert( 'Oops! Something went wrong.' );
        } );
    
        // Set up our request
        XHR.open( "POST", "https://script.google.com/macros/s/AKfycbzTN3_iPrRxlNFQArGG0IBDx5pZQvg-gkDDos3vTzsV90PfJp9O--FimoO72RJA04eY/exec");

        // CORS Policy
        XHR.setRequestHeader('Access-Control-Allow-Origin', '*');
    
        // The data sent is what the user provided in the form
        XHR.send( FD );
    }
  
    // Access the form element...
    const form = document.getElementById( "contact-form" );
  
    // ...and take over its submit event.
    form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
      sendData();
    });
});

function resetContactForm() {

    document.getElementById("contact-form").reset();
}

function setDisplay(e) {

    if(e.target.innerWidth < 800) {
        displayBlock();
        m.style.display = "none";       
    } else {
        displayFlex();
    }
}

window.addEventListener('resize', (e) => {
    setDisplay(e);
});

// Scrolls out the greeting one letter at a time
function scrollGreeting() {

  greetingElement.innerText = greeting.slice(0, index);

  if(index < greeting.length) {
      setTimeout(scrollGreeting, 150);
      index++;
  } else {
    index = 1;
  }
}

home.addEventListener('click', () => scrollGreeting());
