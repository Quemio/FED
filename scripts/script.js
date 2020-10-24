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

// -----------------------------------------------------------------------------------

// Tutorial over uitvouwen van hamburgermenu van DLO

// button in de nav die het menu moet gaan openen en sluiten
var deButton = document.querySelector("nav button");

// het hamburgermenu
var menu = document.querySelector("header div ul");

deButton.addEventListener("click", function () {
  //via deze functie moet de class "toonMenu" het menu tevoorschijn halen.
  menu.classList.toggle("toonMenu");
});

// OPGELOST console geeft aan: "Uncaught TypeError: menu.ClassList is undefined"

// DROPDOWN MENU VOOR HET KIEZEN VAN DE MAAT
// button die default maat weergeeft
var dropdownButton = document.querySelector(
  "body.pp section:nth-of-type(2) button:first-of-type"
);

// de ul met daarin de beschikbare maten
var optiesMaten = document.querySelector(
  "body.pp section:nth-of-type(2) ul:last-of-type"
);

//functie met toggle die de ul weergeeft/verbergt.
dropdownButton.addEventListener("click", function () {
  // console.log("geklikt");

  optiesMaten.classList.toggle("toonOpties");
});

// DROPDOWN VOOR PRODUCTINFO
// ul die info over product weergeeft
var overDitProduct = document.querySelector(
  "body.pp section:nth-of-type(3) article button:first-of-type"
);

// de p met info over product
var dropdownInfo = document.querySelector(
  "body.pp main section:nth-of-type(3) article p"
);

//functie met toggle die de ul weergeeft/verbergt.
overDitProduct.addEventListener("click", function () {
  // console.log("geklikt");

  dropdownInfo.classList.toggle("toonOpties");
});

// DROPDOWN VOOR VERZENDINFO
// ul die info over verzending weergeeft
var verzendButton = document.querySelector(
  "body.pp section:nth-of-type(3) article button:nth-of-type(2)"
);

// de p met info over verzending
var verzendInfo = document.querySelector(
  "body.pp main section:nth-of-type(3) article p:nth-of-type(2)"
);

//functie met toggle die de ul weergeeft/verbergt.
verzendButton.addEventListener("click", function () {
  //console.log("geklikt");

  verzendInfo.classList.toggle("verzendOpties");
});
