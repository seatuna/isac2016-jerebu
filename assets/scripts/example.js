'use strict';

let total = function() {
  $('.donation-total').html(function() {
    let total = Number($('.water-amount').val()) + Number($('.food-amount').val()) + Number($('.medical-amount').val()) + Number($('.money-amount').val());
    return "$" + total;
  });
};

$('.water-add').on('click', function() {
  $('.donation-water').replaceWith(function(){
    total();
    return '$' + $('.water-amount').val();
  });
});

$('.food-add').on('click', function() {
  $('.donation-food').replaceWith(function(){
    total();
    return '$' + $('.food-amount').val();
  });
});

$('.medical-add').on('click', function() {
  $('.donation-medical').replaceWith(function(){
    total();
    return '$' + $('.medical-amount').val();
  });
});

$('.money-add').on('click', function() {
  $('.donation-money').replaceWith(function(){
    total();
    return '$' + $('.money-amount').val();
  });
});

$(document).ready(() => {

});
