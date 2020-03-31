/*
Creare un hamburger menu
 senza toccare l’HTML faccio funzionare l’hamburger menù;
primo click, appare il menù;
se cliccko che è già visibile, invece scompare.
*/

// creo una variabile che cambierà il valore a seconda se il menu sarà aperto o chiuso
var menuVisible = "hidden";


// seleziono l'hamburger menu attraverso jquery e gli dico di mostrare il menu quando viene clikkato
$('.fas.fa-bars').click(
  function () {
    if (menuVisible === "hidden") {
      $('.hamburger-menu').show(1000);
      menuVisible = "visible"
    }
  }
);

// seleziono la "x" di chiusura menu e gli dico di chiudere il menu quando viene clikkata
$('.close').click(
  function() {
    if (menuVisible === "visible") {
      $('.hamburger-menu').hide("fast");
      menuVisible = "hidden";
    }
  }
);
