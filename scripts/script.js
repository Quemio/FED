// // JavaScript Document
// // oefening van codepen voor header:

// // variabele wordt gekoppeld aan de desbetreffende button
// var deButton = document.querySelector("header nav button");

// // wanneer op de button geklikt wordt moet de funtie toggleMenu gestart worden.
// deButton.addEventListener("click", openMenu);

// // de functie die het menu moet gaan openen.
// function openMenu() {

//     let deButton = document.querySelector("body.pp header nav button");

//     deButton.classList.toggle("hamburgermenu")

// }


// // // variabele wordt gekoppeld aan de desbetreffende button
// var deButton = document.querySelector("nav button");

// // // wanneer op de button geklikt wordt moet de funtie toggleMenu gestart worden.
// deButton.addEventListener("click", toggleMenu);

// // // de functie die het menu moet gaan openen.
// function toggleMenu(event) {

//   deNav = event.target.parentNode;
// //   // // toonMenu is de class waarbij transform:translate() het menu tevoorschijn haalt.
//   deNav.classList.toggle("toonMenu");
// }

var deButton = document.querySelector("nav button");
var menu = document.querySelector("header div ul");

deButton.addEventListener("click", function() {
    
    menu.ClassList.toggle("toonMenu");

} )
