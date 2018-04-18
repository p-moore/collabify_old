
//Factory Methods 
function HighPrioTaskMachine(){
	$( ".HighPrioityTask #dragH0" ).clone().attr("id", "drag68").appendTo( "#clonehere");
}

function MediumPrioTaskMachine(){
	$( ".MediumPrioityTask #dragM0" ).clone().attr("id", "drag68").appendTo( "#clonehere");
}

function LowPrioTaskMachine(){
	$( "#dragL0" ).clone().attr("id", "drag68").appendTo( "#clonehere");
}
