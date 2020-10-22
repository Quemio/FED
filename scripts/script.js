// // JavaScript Document


// // oefening van codepen voor hamburgermenu --> header: POGING 1

// // variabele wordt gekoppeld aan de desbetreffende button
// var deButton = document.querySelector("header nav button");

// // wanneer op de button geklikt wordt moet de funtie toggleMenu gestart worden.
// deButton.addEventListener("click", openMenu);

// // de functie die het menu moet gaan openen.
// function openMenu() {

//     let deButton = document.querySelector("body.pp header nav button");

//     deButton.classList.toggle("hamburgermenu")

// }

// // oefening van codepen voor hamburgermenu --> header: POGING 2

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

// Tutorial van DLO: poging 1


// button in de nav die het menu moet gaan openen en sluiten
var deButton = document.querySelector("nav button");

// het hamburgermenu
var menu = document.querySelector("header div ul");

deButton.addEventListener("click", function() {
    
    //via deze functie moet de class "toonMenu" het menu tevoorschijn halen.
    menu.classList.toggle("toonMenu");

} )

// console geeft aan: "Uncaught TypeError: menu.ClassList is undefined"