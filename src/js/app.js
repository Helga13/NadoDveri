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
  
  // inputmask
  $('#call_phone').mask('(99) 999-99-99');
  
  // select
  
  $('.js-select').select2({
    minimumResultsForSearch: Infinity 
  });
  
  // input price
   
  $('.price').on('focusin', function(){
    $(this).addClass('is-active');
  });
  
  $('.price_input').bind('change keyup input click paste', function() {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });
  
  // portfolio galereya
  
//  $('.gallery').galereya();
  
  $('.gallery').masonry({
    itemSelector: '.grid-item'
  });
  
  var lightbox = $('.gallery a').simpleLightbox({
    showCounter: false
  });
  
});

// resize input price

var input = document.querySelectorAll('.price_input'),
  buffer = [];
for (var i = 0; input.length > i; i++) {
  console.log(input[i].value);
  buffer[i] = document.createElement('div');
  buffer[i].className = "input_buffer";
  //вставляем скрытый div.buffer
  input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

  input[i].oninput = function() {
    this.nextElementSibling.innerHTML = this.value;
    this.style.width = this.nextElementSibling.clientWidth + 'px';
  };
  
}