$(document).ready(function(){
  var powerButton = $('.button_power');
  var mainButton = $('.button_main');
  var logo = $('.logo');
  var screen = $('.screen');
  var hamburger = $('.burgerMenu');
  var cross = $('.burgerCross');
  var menu =$('ul');
  var li =$('li');
  var slide = $('.slide');
  console.log('slide');

    powerButton.click(function(){
        mainButton.toggleClass('button_mainOff button_mainOn');
        logo.toggleClass('logoOn');
        screen.toggleClass('screenOn');
    });

});









//
//
// document.addEventListener('DOMContentLoaded', function(event) {
//
//   var moveRight = document.querySelector('.moveRight');
//   var moveLeft = document.querySelector('.moveLeft');
//   var slide = document.querySelector('.slide');
//   var slideAmount = 4;
//   var i = 0;
//
//   function changeImage(img) {
//     slide.src = img;
//   }
//   moveRight.addEventListener('click', function(e) {
//     i++;
//     if (i == slideAmount) {
//       i = 0;
//     }
//     changeImage(`${[i+1]}.jpg`);
//   });
//   moveLeft.addEventListener('click', function() {
//     var i = slide.src.replace('file:///C:/Users/piotr/Desktop/GitHub/iSlider/', '').replace('.jpg', '')
//     if (i == 1) {
//       i = 5
//       changeImage(`${[i-1]}.jpg`);
//     }
//     changeImage(`${[i-1]}.jpg`);
//   });
//
// });
