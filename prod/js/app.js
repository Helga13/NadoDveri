$(document).ready(function () {
  
  'use strict'
  
  // menu catalog
  $('.js-toggle_menu + span').on('click', function(){
    $(this).prev().addClass('is-open').next().next().slideDown(300).parent('li').siblings().find('.is-open').removeClass('is-open').next().next().slideUp(300);
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
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }
  ]
  });
  
  $('.product_slider').slick({
    arrows: true    
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
  $('#call_phone, #popup_phone').mask('(99) 999-99-99');
  
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
  
  $('.gallery').masonry({
    itemSelector: '.grid-item'
  });
  
  var lightbox = $('.gallery a').simpleLightbox({
    showCounter: false
  });
  
  // scrollbar
  $('.js-scroll').niceScroll({
    cursorcolor: '#dddddd'
    , cursoropacitymin: '1'
    , cursorborderradius: '10px'
    , cursorwidth: '6px'
  });
  
  // popup
  
  $('.js-popup').click(function (e) {
    e.preventDefault();
    $('#popup_form').fadeIn(300);
    $('body').css('overflow', 'hidden');
    if($(this).hasClass('call_request')){
      $('.popup_overlay .h2').text('Заказать звонок');
      $('.popup_overlay .btn').text('Заказать звонок');
    }
  });
  $('.popup_overlay').click(function (e) {
    $(this).fadeOut(100);
    $('body').css('overflow', 'auto');
  });
  $('.popup_close').click(function (e) {
    e.preventDefault();
    $(this).parents('.popup_overlay').fadeOut(100);
    $('body').css('overflow', 'auto');
  });
  $('.popup_content').click(function (e) {
    e.stopPropagation();
  });
  
  // burger
  
  $('#hamburger').on('click', function(){
    $(this).toggleClass('is-open').next().slideToggle(300);
    $('body').toggleClass('hidden');
  });
  
  // aside toggle
  
  $('.catalog_toggle').on('click', function(){
    $(this).toggleClass('is-open').next().slideToggle(300);
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