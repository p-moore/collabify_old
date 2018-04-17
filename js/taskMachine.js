//Concrete Products
const HighPrioTask = {
	displayTask(){

	}
};

const GeneralTask = {
	displayTask(){

	}
};

const AssignedTask = {
	displayTask(){

	}
};

//Factory Methods 
function HighPrioTaskMachine(){
	return Object.create(HighPrioTask);
}

function GeneralTaskMachine(){
	return Object.create(GeneralTask);
}

function AssignedTaskMachine(){
	return Object.create(AssignedTask);
}
