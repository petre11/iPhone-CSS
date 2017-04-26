document.addEventListener('DOMContentLoaded', function(event) {

  var moveRight = document.querySelector('.moveRight');
  var moveLeft = document.querySelector('.moveLeft');
  var slide = document.querySelector('.slide');
  var slideAmount = 4;
  var i = 0;

  function changeImage(img) {
    slide.src = img;
  }
  moveRight.addEventListener('click', function(e) {
    i++;
    if (i == slideAmount) {
      i = 0;
    }
    changeImage(`${[i+1]}.jpg`);
  });
  moveLeft.addEventListener('click', function() {
    var i = slide.src.replace('file:///C:/Users/piotr/Desktop/iSlider/', '').replace('.jpg', '')
    if (i == 1) {
      i = 5
      changeImage(`${[i-1]}.jpg`);
    }
    changeImage(`${[i-1]}.jpg`);
  });

});
