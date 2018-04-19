
//Factory Methods 
function HighPrioTaskMachine(id){
	$( "#dragH0" ).clone().attr("id", id).appendTo( "#clonehere");
}

function MediumPrioTaskMachine(id){
	$( "#dragM0" ).clone().attr("id", id).appendTo( "#clonehere");
}

function LowPrioTaskMachine(id){
	$( "#dragL0" ).clone().attr("id", id).appendTo( "#clonehere");
}
