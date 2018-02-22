$(document).ready(function () {
  
  'use strict'
  
  // menu catalog
  $('.js-toggle_menu').on('click', function(e){
    e.preventDefault();
    $(this).addClass('is-open').next().slideDown(300).parent('li').siblings().find('.is-open').removeClass('is-open').next().slideUp(300);
  });
  
  // sliders
  $('.main_slider').slick({
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000    
  });
  
  $('.doors_slider').slick({
    arrows: true,
    infinite: false,
//    autoplay: true,
//    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  
  // tabs
  $('.tabs_block').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active');
      });
    });
  });
  
  // tooltip
  if($('.js-tooltip').hasClass('is-active')){
    $('.js-tooltip').mousemove(function (e) {
      var tooltip = $(this).next('.tooltip');
      $(tooltip).css({
        "top": e.pageY + 15
        , "left": e.pageX - 35
      }).show(300);
    }).mouseout(function (e) {
      var tooltip = $(this).next('.tooltip');
      $(tooltip).hide(300).css({
        "top": e.pageY + 15
        , "left": e.pageX - 35
      });
    });
  }
  
  
  
})