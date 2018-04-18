//Concrete Products
const HighPrioTask = {
	displayTask(){
		console.log("HELLO");
	}
};

const LowPrioTask = {
	displayTask(){
		console.log("DAMN");
	}
};

const MediumPrioTask = {
	displayTask(){
		console.log("SON");
	}
};

//Factory Methods 
function HighPrioTaskMachine(){
	return Object.create(HighPrioTask);
}

function MediumPrioTaskMachine(){
	return Object.create(MediumPrioTask);
}

function LowPrioTaskMachine(){
	return Object.create(LowPrioTask);
}
