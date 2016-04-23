'use strict';

$('.water-add').on('click', function() {
  $('.donation-water').replaceWith(function(){
    return '$' + $('.water-amount').val();
  });
});

$('.food-add').on('click', function() {
  $('.donation-food').replaceWith(function(){
    return '$' + $('.food-amount').val();
  });
});

$('.medical-add').on('click', function() {
  $('.donation-medical').replaceWith(function(){
    return '$' + $('.medical-amount').val();
  });
});

$('.money-add').on('click', function() {
  $('.donation-money').replaceWith(function(){
    return '$' + $('.money-amount').val();
  });
});

$('.donation-total').replaceWith(function() {
  return $('.water-amount').val() + $('.food-amount').val() + $('.medical-amount').val() + $('.money-amount').val();
});

$(document).ready(() => {

});
