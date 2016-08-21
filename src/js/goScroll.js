function goScroll(scrollToSelector) {
  debugger;
  $('html, body').animate({
    scrollTop: $(scrollToSelector).offset().top - 40
  }, 500);
}
