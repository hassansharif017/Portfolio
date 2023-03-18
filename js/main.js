$(function () {
  menu = $("nav ul");

  $("#openup").on("click", function (e) {
    // e.preventdefault();
    menu.slideToggle();
  });

  $(window).resize(function () {
    let w = $(this).width();
    if (w > 580 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });
  $("nav li").on("click", function (e) {
    let w = $(window).width();
    if (w < 580) {
      menu.slideToggle();
    }
  });
  $("open-menu").height($(window).height());
});



$("a").on("click", function () {
  if (this.hash !== "") {
    // event.preventdefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
