$(".subcatalog-list-slider").slick({
  infinite: true,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  prevArrow: '<div class="subcatalog-list-slider-controls__item _prev">Назад</div>',
  nextArrow: '<div class="subcatalog-list-slider-controls__item _next">Далее</div>',
  appendArrows: $('.subcatalog-list-slider-controls')
});