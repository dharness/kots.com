function toggleNav() {
  var list = $('.nav-wrapper');
  list.toggleClass('closed');
  $('body').toggleClass('no-scroll');
  $('html').toggleClass('no-scroll');
}
