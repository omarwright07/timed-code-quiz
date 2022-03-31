// Variables
// Header
var viewHighScoreEl = document.querySelector("#view-high-score");
var timeEl = document.querySelector("#timer");
var timerMax = 3;
var timerValue = 0;
var myTimer = 0;
// Content
var pageContentEl = document.querySelector("#content");
// Object that holds array of every question property
var questions = [
    {
        question: "test",
        answers: ["test1", "test2", "test3", "test4"],
        correctAnswer: 0,
    }
];
// Array holds all the high scores to be stored and displayed
var highScores = [];

// ############################################################
// ############################################################
var clearContent = function () {
    var contentIntroEl = document.querySelector("#intro");
    var contentQuestionEl = document.querySelector("#question");
    var contentHighScoreSubmitEl = document.querySelector("#high-score-submit");
    var contentHighScoreDisplayEl = document.querySelector("#high-score-display");
    if (contentIntroEl != null) {
        contentIntroEl.remove();
    }
    if (contentQuestionEl != null) {
        contentQuestionEl.remove();
    }
    if (contentHighScoreSubmitEl != null) {
        contentHighScoreSubmitEl.remove();
    }
    if (contentHighScoreDisplayEl != null) {
        contentHighScoreDisplayEl.remove();
    }
}

var clearFooter = function () {
    var contentResponseEl = document.querySelector("#response");
    if (contentResponseEl != null) {
        contentResponseEl.remove();
    }
}

// Element Creation Functions -------------------------------------------
var createArticle = function (className, idName) {
    var article = document.createElement("article");
    article.className = className;
    article.id = idName;
    // Appends to section for content
    pageContentEl.appendChild(article);
    return article;
}

var createIntro = function () {
    // Create article
    var articleIntroEl = createArticle("art-general center", "intro");
    // All the tags inside with content
    articleIntroEl.innerHTML = '<h1>Coding Quiz Challenge</h1><p>Try to answer the following code-related questions within the time limit. Keep in mind that ansers will penalize your score/time by ten seconds!</p><button type="button" id="btn-start-quiz">Start Quiz</button>';
}

var createQuestion = function () {
    // Create article
    var articleQuestionEl = createArticle("art-question", "question");
    // All the tags inside with content
    articleQuestionEl.innerHTML = '<h1>' + questions[0].question + '</h1><ol><button type="button" id="answer"><li id="answer">' + questions[0].answers[0] + '</li></button><button type="button" id="answer"><li id="answer">' + questions[0].answers[1] + '</li></button><button type="button" id="answer"><li id="answer">' + questions[0].answers[2] + '</li></button><button type="button" id="answer"><li id="answer">' + questions[0].answers[3] + '</li></button></ol>';
}

var createHighScoreSubmit = function () {
    // Create article
    var articleHighSubmitEl = createArticle("art-question", "high-score-submit");
    // All the tags inside with content
    articleHighSubmitEl.innerHTML = '<h1>All done!</h1><h2>Your final score is ' + timerValue + '.</h2><div class="initials-entry"><label for="initials">Enter initials:</label><input type="text" name="initials"><br><br><span><button type="button"  id="submit">Submit</button></span></div>';
}

var createHighScoreDisplay = function () {
    clearContent();
    clearFooter();
    // Create article
    var articleHighDisplayEl = createArticle("art-general", "high-score-display");
    // All the tags inside with content
    articleHighDisplayEl.innerHTML = '<h1>High scores</h1><div class="high-score-entry"><ol><li>AB - 22</li><li>AB - 22</li></ol></div><div><button type="button" id="go-back">Go back</button><button type="button" id="clear-high-scores">Clear high scores</button></div>';
}

var createQuestionResponse = function () {
    var footerResponseEl = document.querySelector("#response");
    if (footerResponseEl == null) {
        footerResponseEl = document.createElement("footer");
        footerResponseEl.className = "art-question"
        footerResponseEl.id = "response";
        document.querySelector("body").appendChild(footerResponseEl);
    }
    footerResponseEl.innerHTML = "<h1>Wrong!</h1>";
}

// Trigger Functions
// Timer Functions -------------------------------------------
var timerSet = function () {
    timeEl.innerHTML = "Timer: " + timerMax;
    timerValue = timerMax;
}

var timerUpdate = function () {
    timeEl.innerHTML = "Timer: " + timerValue;
}

var timerStart = function () {
    if (timerValue <= 1) {
        timerValue--;
        timerUpdate();
        gameOver();
    } else {
        timerValue--;
        timerUpdate();
    }
}

// Start/End/Save Functions -------------------------------------------
var startQuiz = function () {
    timerSet();
    myTimer = setInterval(timerStart, 1000);
    clearContent();
    createQuestion();
}

var gameOver = function () {
    clearInterval(myTimer);
    clearContent();
    createHighScoreSubmit();
}

var saveHighScore = function () {
    // localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Handlers all button clicks
var buttonHandler = function (event) {
    var targetEl = event.target.getAttribute("id");
    console.log(targetEl);
    switch (targetEl) {
        case "btn-start-quiz":
            startQuiz();
            break;
        case "answer":
            createQuestionResponse();
            break;
        case "submit":
            createHighScoreDisplay();
            break;
        case "go-back":
            clearContent();
            createIntro();
            break;
        case "clear-high-scores":
            console.log("Clearing High Scores");
            break;
        default:
    }
}

// ############################################################
// ############################################################

// "Click" Event Listeners
pageContentEl.addEventListener("click", buttonHandler);
viewHighScoreEl.addEventListener("click", createHighScoreDisplay);
// .addEventListener("submit",);

createIntro();