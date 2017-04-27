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
    changeImage(`slide_${[i+1]}.jpg`);
  });
  moveLeft.addEventListener('click', function() {
    var i = slide.src
    var sliceStart = i.search('slide') + 6;
    var sliceEnd =  i.search('.jpg');
    i = i.slice(sliceStart,sliceEnd);

    if (i == 1) {
      i = 5
      changeImage(`slide_${[i-1]}.jpg`);
    }
    else{
          changeImage(`slide_${[i-1]}.jpg`);
    }
  });

});
