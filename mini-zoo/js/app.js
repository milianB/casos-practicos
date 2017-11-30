var image = document.getElementsByClassName('animal');//mandamos llamar todos los elementos que tengan la clase "animal"

var select = document.getElementById('select');
select.onchange = function(){
  if (select.value == "original") {
    for(var i = 0; i < image.length; i++) {
      image[1].classList.remove("white-black");
      image[1].classList.remove("negative-colors");
      image[1].classList.remove("sepia");
    }
  }
}
