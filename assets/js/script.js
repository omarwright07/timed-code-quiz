// Variables
// Header
var viewHighScoreEl = document.querySelector("#view-high-score");
var timeEl = document.querySelector("#timer");
var timerValue = 3;
var myTimer = 0;
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
var createQuestion = function () {
    // Create article
    var articleQuestionEl = document.createElement("article");
    articleQuestionEl.className = "art-question";
    articleQuestionEl.id = "question";
    // All the tags inside with content
    articleQuestionEl.innerHTML = '<h1>Commonly used data types DO NOT Include?</h1><ol><button type="button"><li>"Start Quiz"</li></button><button type="button"><li>Start Quiz</li></button><button type="button"><li>Start Quiz</li></button><button type="button"><li>Start Quiz</li></button></ol>';
    // Appends to section for content
    pageContentEl.appendChild(articleQuestionEl);
}

// var createArticle = function (className,idName) {
//     var articleQuestionEl = document.createElement("article");
//     articleQuestionEl.className = className;
//     articleQuestionEl.id = idName;
// }

var createHighScoreSubmit = function () {
    // Create article
    var articleHighSubmitEl = document.createElement("article");
    articleHighSubmitEl.className = "art-question";
    articleHighSubmitEl.id = "high-score-submit";
    // All the tags inside with content
    articleHighSubmitEl.innerHTML = '<h1>All done!</h1><h2>Your final score is 22.</h2><div class="initials-entry"><label for="initials">Enter initials:</label><input type="text" name="initials"><br><br><span><button type="button">Submit</button></span></div>';
    // Appends to section for content
    pageContentEl.appendChild(articleHighSubmitEl);
    // .addEventListener("submit",);
}

var createHighScoreDisplay = function () {
    contentIntroEl.remove();
    // Create article
    var articleHighDisplayEl = document.createElement("article");
    articleHighDisplayEl.className = "art-general";
    articleHighDisplayEl.id = "high-score-display";
// All the tags inside with content
    articleHighDisplayEl.innerHTML = '<h1>High scores</h1><div class="high-score-entry"><ol><li>AB - 22</li><li>AB - 22</li></ol></div><div><button type="button">Go back</button><button type="button">Clear high scores</button></div>';
    // Appends to section for content
    pageContentEl.appendChild(articleHighDisplayEl);
}

var createQuestionResponse = function () {
    var footerResponseEl = document.createElement("footer");
    footerResponseEl.className = "art-question"
    footerResponseEl.id = "response";
    // change wrong to a variable and seperate into another function to called
    footerResponseEl.innerHTML = "<h1>Wrong!</h1>";
    document.querySelector("body").appendChild(footerResponseEl);
}

// Trigger Functions
// Timer Functions -------------------------------------------
var timerSet = function () {
    console.log("Set timer to: " + timerValue);
    timeEl.innerHTML = "Timer: " + timerValue;
}
var timerStart = function () {
    if (timerValue <= 0) {
        gameOver();
    } else {
        timerValue--;
        timerSet();
    }
}

var saveHighScore = function () {
    // localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Start/End Functions -------------------------------------------
var startQuiz = function () {
    console.log("Starting Quiz");
    console.log("Starting Timer");
    myTimer = setInterval(timerStart, 1000);
    // Removes Intro
    contentIntroEl.remove();
    createQuestion();
    createQuestionResponse();
}

var gameOver = function () {
    console.log("Game Over!!");
    clearInterval(myTimer);
    console.log("Timer Stopped");
    var highScore = timerValue;
    console.log("Your high score is: " + highScore);
}
// ############################################################
// ############################################################

// "Click" Event Listeners
buttonStartQuiz.addEventListener("click", startQuiz);
viewHighScoreEl.addEventListener("click", createHighScoreDisplay);

timerSet();