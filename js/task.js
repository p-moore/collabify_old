function move() {
  var elem = document.getElementById("myBar");   
  var width = 20; //starting width
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) { //ending width
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}