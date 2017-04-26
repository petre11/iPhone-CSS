
document.addEventListener('DOMContentLoaded',function(event){

  var move = document.querySelectorAll('.move');
  var slide = document.querySelectorAll('slide');
  console.log(slide.attributevalue());
  function changeImage(img) {
        slide.src=img;
    }

  for( var i = 0; i < move.length; i++){
    move[i].addEventListener('click',function(){
      if(this.classList.contains('moveLeft') == true){
        changeImage("galaxy2.jpg");
        console.log(slide);
      }
      else{
        console.log('galaxy');
      }
    // nextElementSibling

    });
  }

});
