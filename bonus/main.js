
var visible = "hidden";


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

menu(".first-book", ".book.first", 1000, "white");
menu(".second-book", ".book.second", 1000, "yellow");
menu(".third-book", ".book.third", 1000, "green");
menu(".fourth-book", ".book.fourth", 1000, "orange");
menu(".fifth-book", ".book.fifth", 1000, "blue");

clickFade("#hamburger", visible, "hidden", ".hamburger-menu", "visible", ".hamburger-menu");
clickFade("#first-book", visible, "hidden", "#first-img", "visible", "#first-img");
clickFade("#second-book", visible, "hidden", "#second-img", "visible", "#second-img");
clickFade("#third-book", visible, "hidden", "#third-img", "visible", "#third-img");
clickFade("#fourth-book", visible, "hidden", "#fourth-img", "visible", "#fourth-img");
clickFade("#fifth-book", visible, "hidden", "#fifth-img", "visible", "#fifth-img");


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

$("#home").click(
  function () {
    $("img").hide();
  }
);
