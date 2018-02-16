$('.js-hide-trigger').click(function (e) {
  e.preventDefault();
  $(this).parent('.js-hide').find('.js-hide-element').slideToggle();
  $(this).toggleClass('_hide');
});