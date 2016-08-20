function goScroll(scrollToSelector) {
  $('html, body').animate({
    scrollTop: $(scrollToSelector).offset().top - 40
  }, 500);
}
