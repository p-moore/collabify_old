var myLowTasks = new Array();
var myMediumTasks = new Array();
var myHighTasks = new Array();

var task ={
  name: "taskName",
  percentage: 0,
  priority: 0,
  assigned: "worker",
  id: 0,
  date: 000000,
  catagory: null
} ;

function Task(name, percent, prio, assigned){
  this.name = name;
  this.percentage = percent;
  this.priority = prio;
  this.assigned = assigned;
  this.date = Date.now();

  this.catagory = null;
  this.id = 1;
  
  if(prio == 0){
    myLowTasks.push(this);
  } else if (prio == 1) {
    myMediumTasks.push(this);
  } else {
    myHighTasks.push(this);
  }
}


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



