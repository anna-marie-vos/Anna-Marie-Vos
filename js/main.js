$(window).on("scroll", function() {
  if ($(this).scrollTop() > 100) {
    $(".header p").remove();
    $(".header").prepend(`<p>Anna-Marie Vos</p>`);
  } else {
    $(".header p").remove();
    $(".header").prepend(`<p>Digital</p>`);
  }
});
