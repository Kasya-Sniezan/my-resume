//@prepros-append add-active-class.js
//@prepros-append add-spoiler.js
//@prepros-append def-system.js
//@prepros-append go-to-block.js
//@prepros-append slick.min.js

$(document).ready(function () {
  $(".slick-slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    adaptiveHeight: true,
  });
});
