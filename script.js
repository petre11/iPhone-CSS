$(document).ready(function(){
  var powerButton = $('.button_power');
  var mainButton = $('.button_main');
  var logo = $('.logo');
  var screen = $('.screen');

    powerButton.click(function(){
        mainButton.toggleClass('button_mainOff button_mainOn');
        logo.toggleClass('logoOn');
        screen.toggleClass('screenOn');
    });

});


