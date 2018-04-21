var myLowTasks = new Array();
var myMediumTasks = new Array();
var myHighTasks = new Array();

var totalLowTasksMade = 1;
var totalMedTasksMade = 1;
var totalHighTasksMade = 1;

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
  
  if(prio == 0){
    myLowTasks.push(this);
    this.id = "dragL" + totalLowTasksMade;
	totalLowTasksMade++;
  } else if (prio == 1) {
    myMediumTasks.push(this);
    this.id = "dragM" + totalMedTasksMade;
	totalMedTasksMade++;
  } else {
    myHighTasks.push(this);
    this.id = "dragH" + totalHighTasksMade;
	totalHighTasksMade++;
  }
}

function displayLowTask(task){

  var d = new Date(task.date);

  $( "#" + task.id + " #lowHeader button" ).attr("id", "delete-"+task.id);
  $( "#" + task.id + " #lowHeader a" ).attr("id", "show-"+task.id);
  $( "#" + task.id + " #collapseLow0 div button" ).attr("id", "complete-"+task.id);
  $( "#" + task.id + " #collapseLow0 #Bar" ).attr("id", "Bar"+task.id);
  $( "#" + task.id + " #collapseLow0").attr("id", "collapse"+task.id);

  $( "#" + task.id + " #lowHeader h1" )
    .html("<strong>" + task.name + "</strong>");
  $( "#" + task.id + " #Bar"+task.id ).css({"width": parseInt(task.percentage) + "%"});
  $( "#" + task.id + " #Bar"+task.id )
    .html(task.percentage + "%");
  $( "#" + task.id + " #lowFooter h5" )
    .html("<strong>" + task.assigned + "</strong>  " + d.toDateString() );
 }

function displayMediumTask(task){

  var d = new Date(task.date);

  $( "#" + task.id + " #medHeader button" ).attr("id", "delete-"+task.id);
  $( "#" + task.id + " #medHeader a" ).attr("id", "show-"+task.id);
  $( "#" + task.id + " #collapseMed0 div button" ).attr("id", "complete-"+task.id);
  $( "#" + task.id + " #collapseMed0 #Bar" ).attr("id", "Bar"+task.id);
  $( "#" + task.id + " #collapseMed0").attr("id", "collapse"+task.id);

  $( "#" + task.id + " #medHeader h1" )
    .html("<strong>" + task.name + "</strong>");
  $( "#" + task.id + " #Bar"+task.id ).css({"width": parseInt(task.percentage) + "%"});
  $( "#" + task.id + " #Bar"+task.id )
    .html(task.percentage + "%");
  $( "#" + task.id + " #medFooter h5" )
    .html("<strong>" + task.assigned + "</strong>  " + d.toDateString() );
 }

 function displayHighTask(task){

  var d = new Date(task.date);

  $( "#" + task.id + " #highHeader button" ).attr("id", "delete-"+task.id);
  $( "#" + task.id + " #highHeader a" ).attr("id", "show-"+task.id);
  $( "#" + task.id + " #collapseHigh0 div button" ).attr("id", "complete-"+task.id);
  $( "#" + task.id + " #collapseHigh0 #Bar" ).attr("id", "Bar"+task.id);
  $( "#" + task.id + " #collapseHigh0").attr("id", "collapse"+task.id);


  $( "#" + task.id + " #highHeader h1" )
    .html("<strong>" + task.name + "</strong>");
  $( "#" + task.id + " #Bar"+task.id ).css({"width": parseInt(task.percentage) + "%"});
  $( "#" + task.id + " #Bar"+task.id )
    .html(task.percentage + "%");
  $( "#" + task.id + " #highFooter h5" )
    .html("<strong>" + task.assigned + "</strong>  " + d.toDateString() );
 }

function move(id) {
  var parsedID = id.slice(13);
  var parsedPrio = parsedID.slice(0,1);
  var parsedIDNum = parsedID.slice(1);

  var elem = document.getElementById("Bardrag"+parsedID);
  if(elem.textContent != "100%" && elem.textContent != "0%"){
    var width = elem.textContent.slice(0,2); //starting width

    var ids = setInterval(frame, 10);
    function frame() {
      if (width >= 100) { //ending width
        clearInterval(ids);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  } else if (elem.textContent == "0%"){
    var width = elem.textContent.slice(0,1); //starting width

    var ids = setInterval(frame, 10);
    function frame() {
      if (width >= 100) { //ending width
        clearInterval(ids);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }
}



