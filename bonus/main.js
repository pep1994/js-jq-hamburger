
var visible = "hidden";
var logo, imgRandom;
var img = ["img1", "img2", "img3", "img4", "img5"];

// funzione per hover elementi del menu di navigazione
function menu (selectorPrincipal, selector, timing, color) {
  $(selectorPrincipal).on({
    mouseenter: function () {
      $(selector).fadeIn(timing);
    },
    mouseleave: function () {
      $(selector).fadeOut(timing);
    },
    click: function () {
      $(selectorPrincipal).addClass(color);
    }
  });
}


// richiamo funzione per ogni elemento del menu di navigazione
menu(".first-book", ".book.first", 1000, "white");
menu(".second-book", ".book.second", 1000, "yellow");
menu(".third-book", ".book.third", 1000, "green");
menu(".fourth-book", ".book.fourth", 1000, "orange");
menu(".fifth-book", ".book.fifth", 1000, "blue");


// richiamo funzione clickFade per ogni elemento che voglio che appaia o scompaia
clickFade("#hamburger", visible, "hidden", ".hamburger-menu", "visible", ".hamburger-menu");
clickFade("#first-book", visible, "hidden", "#first-img", "visible", "#first-img");
clickFade("#second-book", visible, "hidden", "#second-img", "visible", "#second-img");
clickFade("#third-book", visible, "hidden", "#third-img", "visible", "#third-img");
clickFade("#fourth-book", visible, "hidden", "#fourth-img", "visible", "#fourth-img");
clickFade("#fifth-book", visible, "hidden", "#fifth-img", "visible", "#fifth-img");


// funzione che fa apparire e scomparire al clik su un determinato elemento
function clickFade (selectClick, variableArg, variableArgValue, selectShow, variableArgValueChange, selectHide) {

  $(selectClick).click(
    function () {
      if (variableArg === variableArgValue) {
        $(selectShow).show();
        variableArg = variableArgValueChange;
      } else {
          $(selectHide).hide();
          variableArg = variableArgValue;
        }
    }
  );
}


// al click su home le eventuali immagine aperte nel menu-hamburger scompariranno
$("#home").click(
  function () {
    $(".hamburger-menu img").hide();
  }
);

// al click sul logo compare un'immagine random stile game of thrones
logo = $('#logo');
logo.click(
  function () {
    imgRandom = img[Math.floor(Math.random() * img.length)];
    console.log(imgRandom);
    if (imgRandom === "img1") {
      $(".img-container-1").fadeIn(1000);
      $(".img-container-2").fadeOut();
      $(".img-container-3").fadeOut();
      $(".img-container-4").fadeOut();
      $(".img-container-5").fadeOut();
    } else if (imgRandom === "img2") {
        $(".img-container-2").fadeIn(1000);
        $(".img-container-1").fadeOut();
        $(".img-container-3").fadeOut();
        $(".img-container-4").fadeOut();
        $(".img-container-5").fadeOut();
    } else if (imgRandom === "img3") {
        $(".img-container-3").fadeIn(1000);
        $(".img-container-2").fadeOut();
        $(".img-container-1").fadeOut();
        $(".img-container-4").fadeOut();
        $(".img-container-5").fadeOut();
    } else if (imgRandom === "img4") {
        $(".img-container-4").fadeIn(1000);
        $(".img-container-2").fadeOut();
        $(".img-container-1").fadeOut();
        $(".img-container-3").fadeOut();
        $(".img-container-5").fadeOut();
    } else if (imgRandom === "img5") {
        $(".img-container-5").fadeIn(1000);
        $(".img-container-2").fadeOut();
        $(".img-container-1").fadeOut();
        $(".img-container-3").fadeOut();
        $(".img-container-4").fadeOut();
    }
  }
);
