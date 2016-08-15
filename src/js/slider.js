var currentSliderIndex = 1;

function slideImage(direction) {
  var images = document.querySelectorAll('.slider-img');
  var travel = 0;
  var baseTravel = images[0].width;

  if (direction == 'next') {
    var mbTravel = baseTravel * -1 * (currentSliderIndex % images.length);
    travel = mbTravel;
    currentSliderIndex++;
  } else if (direction == 'previous') {
    var mbTravel = baseTravel * -1 * ((currentSliderIndex + 1) % images.length);
    travel = mbTravel;
    currentSliderIndex--;
  }

  if (currentSliderIndex > images.length) {
    currentSliderIndex = 1;
  } else if(currentSliderIndex <= 0) {
    currentSliderIndex = 3;
  }

  var transform = "translate3d(" + travel + "px, 0px, 0)";
  for (var i = 0; i < images.length; i++) {
    var el = images[i];
    el.style.transform = transform;
  }
}
