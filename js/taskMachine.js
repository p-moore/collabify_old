//Concrete Products
const HighPrioTask = {
	displayTask(){

	}
};

const LowPrioTask = {
	displayTask(){

	}
};

const MediumPrioTask = {
	displayTask(){

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
