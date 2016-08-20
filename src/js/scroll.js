window.onscroll = function (e) {
  var scrollPos = document.body.scrollTop;
  var nav = document.querySelector('#main-nav');
  var threshold = 150;
  if (scrollPos > threshold) {
    nav.classList.add("scroll-view");
  } else {
    nav.classList.remove("scroll-view");
  }
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 40
        }, 500);
        return false;
      }
    }
  });
});
