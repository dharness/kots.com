
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
