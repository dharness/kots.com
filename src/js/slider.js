function initSlick() {
  var $slider = $('.images')
  .on('init', function(slick) {})
  .slick({
    prevArrow: '#slider-left',
    nextArrow: '#slider-right',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.images').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if (currentSlide != nextSlide) {
      var blurb = $('#blurb-' + currentSlide);
      var blurb2 = $('#blurb-' + nextSlide);
      blurb.removeClass('show');
      blurb2.addClass('show');
    }
  });
}

