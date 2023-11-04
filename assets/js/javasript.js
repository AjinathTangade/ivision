$(".logos-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $("accordion").addClass("fixed-header");
    $("accordion card").addClass("visible-title");
  } else {
    $("nav").removeClass("fixed-header");
    $("accordion card").removeClass("visible-title");
  }
});
