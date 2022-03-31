// Variables
// Header
var viewHighScoreEl = document.querySelector("#view-high-score");
var timeEl = document.querySelector("#timer");
var timerValue = 75;
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
// ############################################################
// ############################################################

// Creation Functions



// Trigger Functions
// Timer Functions -------------------------------------------
var timerSet = function () {
    console.log("Set timer to: " + timerValue);
    timeEl.innerHTML = "Timer: " + timerValue;
}
var timerStart = function () {
    console.log("Starting Timer");
    // if (timerValue <=)
    timerValue--;
    timerSet();
}

var displayHighScoreDisplay = function () {
    console.log("Displaying High Score");
}

var startQuiz = function () {
    console.log("Starting Quiz");
    setInterval(timerStart, 1000);
    console.log("Starting Timer");
    // Removes Intro
    contentIntroEl.remove();
}

var gameOver = function () {
    clearInterval(timerStart);
    var highScore = timerValue;
    console.log("Your high score is: " + highScore);    
}
// ############################################################
// ############################################################
// "Click" Event Listeners
buttonStartQuiz.addEventListener("click", startQuiz);
viewHighScoreEl.addEventListener("click", displayHighScoreDisplay)

timerSet();

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