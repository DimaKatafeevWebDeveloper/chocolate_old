jQuery(document).ready(function ($) {

   $('.slider').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      dots: true,
      prevArrow: '<i class="fas fa-arrow-left prev"></i>',
      nextArrow: '<i class="fas fa-arrow-right next"></i>',
   });

   $('.show-hidden-block').click(function () {
      $('.why__hidden').toggle();
   })
});
