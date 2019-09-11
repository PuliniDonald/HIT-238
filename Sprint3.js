 //Add a new task.
var taskInput=document.getElementById("new-task");  
//Add a new task, first button
var addButton=document.getElementsByTagName("button")[0];       
//ul of #incomplete-tasks
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
//completed-tasks
var completedTasksHolder=document.getElementById("completed-tasks");

//New task list item
var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");

	//input (checkbox)
	var checkBox=document.createElement("input");
  //label
	var label=document.createElement("label");    
	
  //input (text)
	var editInput=document.createElement("input");  
	
  //button.edit
	var editButton=document.createElement("button");  

	//button.delete
	var deleteButton=document.createElement("button"); 

	label.innerText=taskString;

	//Each elements (needs appendin)
	checkBox.type="checkbox";
	editInput.type="text";

//innerText encodes special characters
	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";
  
//clear task
var clearItems. ();


