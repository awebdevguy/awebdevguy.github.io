/*
* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
*/
var m = document.getElementById("menu");
var h = document.getElementById("header");
var bw = document.documentElement.clientWidth;

/** 
 * Changes color theme and saves it to local storage
 */
// let theme = localStorage.getItem('theme');

// if(theme == null) {
//      changeTheme(document.getElementById('light-mode'));
// } else {
//      changeTheme(document.getElementById(theme));
// }



// hide the menu list on load
m.style.display = "none";

function toggleMenu(e) {  
    
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

function hideMenu() {
    if(bw < 800) {
        displayNone();
    } else {
        displayFlex();
    }
}

function displayBlock() {
    h.style.display = "block";
    h.style.justifyContent = "initial";
    m.style.display = "block";
    m.style.position = "initial";
    m.style.top = "auto";
    m.style.justifyContent = "initial";
    m.style.right = "auto";
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

// function changeTheme(theme) {
//     var cssFile;
//     switch(theme.id) {
//         case "light-mode":
//             cssFile = "default.css";
//             break;
//         case "blue-mode":
//             cssFile = "blue.css";
//             break;
//         case "green-mode":
//             cssFile = "green.css";
//             break;
//         case "purple-mode":
//             cssFile = "purple.css";
//     }
//     document.getElementById("theme-style").href = cssFile;
//     localStorage.setItem('theme', theme.id);
// }

function toggleFlat(element) {

    var button = document.getElementById(element.id);

    if(document.body.classList.contains("flat-square-mode")) {
        document.body.classList.remove("flat-square-mode");
        button.innerHTML = "Flat Look";
        localStorage.setItem('flat', 'false');
    } else {
        document.body.classList.add("flat-square-mode");
        button.innerHTML = "3D Look";
        localStorage.setItem('flat', 'true');
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
    
        // The data sent is what the user provided in the form
        XHR.send( FD );
    }
  
    // Access the form element...
    const form = document.getElementById( "contact-form" );
  
    // ...and take over its submit event.
    form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
      sendData();
    } );
  } );

  function resetContactForm() {
    document.getElementById("contact-form").reset();
  }

function setDisplay(e) {
    if(e.target.innerWidth < 800) {
        displayBlock();
    } else {
        displayFlex();
    }
    m.style.display = "none";
}

window.addEventListener('resize', (e) => {
    setDisplay(e);
})