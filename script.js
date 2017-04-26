
document.addEventListener('DOMContentLoaded',function(event){

var move = document.querySelectorAll('.move');
  // var moveRight = document.querySelector('.moveRight');
  // var moveLeft = document.querySelector('.moveLeft');
  var slide = document.querySelector('.slide');
    var slideAmount = 4;

  function changeImage(img) {
        slide.src=img;
    }
    for (var i=0; i <= move.length; 1++){
      for(var j = 1; j <= slideAmount; j++){
        move.addEventListener('click',function(e){
          if(this.classList('moveRight')== true){
            changeImage(`galaxy${[j+1]}.jpg`);
          }
          else{
            changeImage(`galaxy${[j-1]}.jpg`);
          }
        });
      }
    }


    // moveRight.addEventListener('click',function(e){
    //       changeImage(`galaxy${[i+1]}.jpg`);
    //       i++;
    //       console.log(i);
    //       if(i ==slideAmount){
    //         i=-1;
    //           i++
    //       }
    // });
    // moveLeft.addEventListener('click',function(){
    //   changeImage(`galaxy${[i-1]}.jpg`);
    //   i--;
    //   if(i ==0){
    //     i==5;
    //       i--;
    //   }
    //   console.log(i);
    // });

});
