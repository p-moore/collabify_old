var task ={
  name: taskName,
  percentage: 0,
  priority: 0,
  assigned: worker,
  id: 0,
  date: 000000,
  catagory: null;
} 

function createTask(name, percent, prio, assigned){
  new task;
  task.name = name;
  task.percentage = precent;
  task.priority = prio;
  task.assigned = assigned;
  date = Date.now();

  id = 1;
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



