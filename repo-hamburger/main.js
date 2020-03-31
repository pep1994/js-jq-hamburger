/*
Creare un hamburger menu
 senza toccare l’HTML faccio funzionare l’hamburger menù;
primo click, appare il menù;
se cliccko che è già visibile, invece scompare.
*/

// creo una variabile che cambierà il valore a seconda se il menu sarà aperto o chiuso
var menuVisible = "hidden";


// seleziono l'hamburger menu attraverso jquery e gli dico di eseguire una funzione
$('.fas.fa-bars').click(hamburgerMenuShow);

// seleziono la "x" di chiusura menu e gli dico di eseguire una funzione
$('.close').click(hamburgerMenuHide);


// creo una funzione per la visibilità dell'hamburger-menu al click
function hamburgerMenuShow () {
  if (menuVisible === "hidden") {
    $(".hamburger-menu").show(1000);
    menuVisible = "visible";
  }
}


// creo una funzione in modo che quando si clikka sulla "x" dell'hamburger-menu, quest'ultimo scompaia
function hamburgerMenuHide () {
  if (menuVisible !== "hidden") {
    $(".hamburger-menu").hide("fast");
    menuVisible = "hidden";
  }
}
