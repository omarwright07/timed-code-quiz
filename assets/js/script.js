// Variables
// Header
var viewHighScoreEl = document.querySelector("#view-high-score");
var timeEl = document.querySelector("#timer");
var timerStartValue = 75;
// Content
var pageContentEl = document.querySelector("#content");
var contentIntroEl = document.querySelector("#intro");
var contentQuestionEl = document.querySelector("#question");
var contentHighScoreSubmitEl = document.querySelector("#high-score-submit");
var contentHighScoreDisplayEl = document.querySelector("#high-score-display");
var buttonStartQuiz = document.querySelector("#btn-start-quiz");
// Footer
var responseEl = document.querySelector("#response");
// Object that holds array of every question property
var questions = [
    {
        question: 0,
        answer1: 0,
        answer2: 0,
        answer3: 0,
        answer4: 0,
        correctAnswer: 0,
    }
];
// Array holds all the high scores to be stored and displayed
var highScores = [];

var displayHighScoreDisplay = function () {
    console.log("Displaying High Score");
}

var startQuiz = function () {
    console.log("Starting Quiz");
}

buttonStartQuiz.addEventListener("click", startQuiz);
viewHighScoreEl.addEventListener("click", displayHighScoreDisplay)
// Tools:
// tasksCompletedEl.append(listItemEl);
// taskSelected.remove();
// updatedTaskArr.push();
// var taskId = event.target.getAttribute("data-task-id");
// tasksToDoEl.appendChild(taskSelected);
// listItemEl.setAttribute("data-task-id", taskIdCounter)
// var taskInfoEl = document.createElement("div");
// localStorage.setItem("tasks", JSON.stringify(tasks));
// var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
// document.querySelector("input[name='task-name']").value = "";
// document.querySelector("select[name='task-type']").selectedIndex = 0;
// var taskInfoEl = document.createElement("div");
// .addEventListener("submit",);
// .addEventListener("click",);


// Timers: 
// #these use ms so 1000 = 1 sec
// setInterval() ;
// clearInterval() ;
// setTimeout() ;

// misc:
// string.split
// element.reset()
// event.preventDefault();
// data-* = creates custom data attributes
// element.matches
// js's dataset = html's data- 
// .matches()
// DOM element methods:
// setAttribute()
// getAttribute()
// removeAttribute()
// remove()
// matches()