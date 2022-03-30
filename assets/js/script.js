var buttonE1 = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#task-to-do");
var formEl = document.querySelector("#task-form");
var pageContentEl = document.querySelector("#page-content");
var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl = document.querySelector("#tasks-completed");
var taskIdCounter = 0;

var task = [];

var taskNameInput = document.querySelector("input[name='task-name']").value;
var taskTypeInput = document.querySelector("select[name='task-type']").value;

document.querySelector("input[name='task-name']").value = "";
document.querySelector("select[name='task-type']").selectedIndex = 0;

// Tools:
tasksCompletedEl.append(listItemEl);
taskSelected.remove();
updatedTaskArr.push();
var taskId = event.target.getAttribute("data-task-id");
tasksToDoEl.appendChild(taskSelected);
listItemEl.setAttribute("data-task-id", taskIdCounter)
var taskInfoEl = document.createElement("div");
localStorage.setItem("tasks", JSON.stringify(tasks));
var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
document.querySelector("input[name='task-name']").value = "";
document.querySelector("select[name='task-type']").selectedIndex = 0;
var taskInfoEl = document.createElement("div");
.addEventListener("submit",);
.addEventListener("click",);


Timers: 
#these use ms so 1000 = 1 sec
setInterval() ;
clearInterval() ;
setTimeout() ;

misc:
string.split
element.reset()

event.preventDefault();

data-* = creates custom data attributes

element.matches

js's dataset = html's data- 

.matches()

DOM element methods:
setAttribute()
getAttribute()
removeAttribute()
remove()
matches()