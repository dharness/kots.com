(function() {

  var currentSliderIndex = 1;
  var container = document.querySelector('.images');
  var hammertime = new Hammer(container, {});
  // hammertime.on('swipeleft', function(ev) {
  //   goRight();
  // });
  // hammertime.on('swiperight', function(ev) {
  //   goLeft();
  // });
  var images = document.querySelectorAll('.slider-img');
  var travel = 0;
  var baseTravel = images[0].width;

  function slideImage(direction) {
    if (direction == 'next') {
      goRight();
    } else if (direction == 'previous') {
      goLeft();
    }
  }

  function goLeft() {
    var mbTravel = baseTravel * -1 * ((currentSliderIndex + 1) % images.length);
    currentSliderIndex--;

    if (currentSliderIndex > images.length) {
      currentSliderIndex = 1;
    } else if(currentSliderIndex <= 0) {
      currentSliderIndex = 3;
    }

    var transform = "translate3d(" + mbTravel + "px, 0px, 0)";
    for (var i = 0; i < images.length; i++) {
      var el = images[i];
      el.style.transform = transform;
    }
  }

  function goRight() {
    var mbTravel = baseTravel * -1 * (currentSliderIndex % images.length);
    currentSliderIndex++;

    if (currentSliderIndex > images.length) {
      currentSliderIndex = 1;
    } else if(currentSliderIndex <= 0) {
      currentSliderIndex = 3;
    }

    var transform = "translate3d(" + mbTravel + "px, 0px, 0)";
    for (var i = 0; i < images.length; i++) {
      var el = images[i];
      el.style.transform = transform;
    }
  }

  window.goRight = goRight;
  window.goLeft = goLeft;

})

$('.images').slick({
  prevArrow: '#slider-left',
  nextArrow: '#slider-right',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
