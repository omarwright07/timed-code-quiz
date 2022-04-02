// Variables
// Header
var viewHighScoreEl = document.querySelector("#view-high-score");
var timeEl = document.querySelector("#timer");
var timerMax = 75;
var timerValue = 0;
var myTimer = 0;
// Content
var pageContentEl = document.querySelector("#content");
// Object that holds array of every question property
var questions = [
    {
        question: "Commonly used data types DO NOT Include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "quotes",
    },
    {
        question: "A very useful tool used during used development and debugging for printing content to the debugger is?",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log",
    },
];
var questionIndex = 0;
// Array holds all the high scores to be stored and displayed
var highScores = [];
var htmlHighScore = '';

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
    toggleViewHighScore();
    // All the tags inside with content
    articleIntroEl.innerHTML = '<h1>Coding Quiz Challenge</h1><p>Try to answer the following code-related questions within the time limit. Keep in mind that answers will penalize your score/time by ten seconds!</p><button type="button" id="btn-start-quiz">Start Quiz</button>';
}

var createQuestion = function () {
    var articleQuestionEl = document.querySelector("#question");
    if (articleQuestionEl == null) {
        // Create article
        articleQuestionEl = createArticle("art-question", "question");
    }
    if (questionIndex >= questions.length) {
        questionIndex = 0;
        gameOver();
    } else {
        // All the tags inside with content
        articleQuestionEl.innerHTML = '<h1>' + questions[questionIndex].question + '</h1><ol><button type="button" id="answer"><li id="answer">' + questions[questionIndex].answers[0] + '</li></button><button type="button" id="answer"><li id="answer">' + questions[questionIndex].answers[1] + '</li></button><button type="button" id="answer"><li id="answer">' + questions[questionIndex].answers[2] + '</li></button><button type="button" id="answer"><li id="answer">' + questions[questionIndex].answers[3] + '</li></button></ol>';
    }
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
    toggleViewHighScore();
    // Create article
    var articleHighDisplayEl = createArticle("art-general", "high-score-display");
    // All the tags inside with content
    articleHighDisplayEl.innerHTML = '<h1>High scores</h1><div class="high-score-entry"><ol>' + htmlHighScore + '</ol></div><div><button type="button" id="go-back">Go back</button><button type="button" id="clear-high-scores">Clear high scores</button></div>';
}

var createQuestionResponse = function (stringResponse) {
    var footerResponseEl = document.querySelector("#response");
    if (footerResponseEl == null) {
        footerResponseEl = document.createElement("footer");
        footerResponseEl.className = "art-question"
        footerResponseEl.id = "response";
        document.querySelector("body").appendChild(footerResponseEl);
    }
    footerResponseEl.innerHTML = "<h1>" + stringResponse + "</h1>";
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

var timerSubtract = function () {
    timerValue = timerValue - 10;
    timerUpdate();
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


// All High Score Functions -------------------------------------------
var saveHighScore = function () {
    localStorage.setItem("highScores", JSON.stringify(highScores));
    buildHtmlHighScore();
}

var createHighScoreEntry = function (inputInitials) {
    var highScoreEntry = {
        initials: inputInitials,
        score: timerValue,
    };
    highScores.push(highScoreEntry);
    console.log(highScores);
}

var buildHtmlHighScore = function () {
    htmlHighScore = "";
    for (var i = 0; i < highScores.length; i++) {
        htmlHighScore = htmlHighScore + "<li>" + highScores[i].initials + " - " + highScores[i].score + "</li>";
    }
}

var loadHighScore = function () {
    var savedHighScores = localStorage.getItem("highScores");
    if (!savedHighScores) {
        console.log("Saved High Scores not found!")
        return false;
    } else {
        console.log("Saved High Scores found!")
        highScores = JSON.parse(savedHighScores);
        buildHtmlHighScore();
    }
}

// Misc Functions -------------------------------------------
var startQuiz = function () {
    timerSet();
    myTimer = setInterval(timerStart, 1000);
    clearContent();
    toggleViewHighScore();
    createQuestion();
}

var gameOver = function () {
    clearInterval(myTimer);
    clearContent();
    createHighScoreSubmit();
}

var checkAnswer = function (event) {
    if (event.innerHTML == questions[questionIndex].correctAnswer) {
        createQuestionResponse("Correct!");
    } else {
        createQuestionResponse("Wrong!");
        timerSubtract();
    }
    questionIndex++;
    createQuestion();
}

// Create a hide and show "view high score"
var toggleViewHighScore = function () {
    if (viewHighScoreEl.innerHTML == '' && document.querySelector("#intro") != null) {
        viewHighScoreEl.innerHTML = 'View high scores';
    } else {
        viewHighScoreEl.innerHTML = '';
    }
}

// Create a clear high score function
var clearHighScore = function () {
    highScores = [];
    htmlHighScore = '';
    saveHighScore();
    createHighScoreDisplay();
}

// Handles initials submissions
var submitHandler = function () {
    var inputInitials = document.querySelector("input[name='initials']").value;
    if (!inputInitials) {
        alert("You need to enter your initials!");
        return false;
    }
    createHighScoreEntry(inputInitials);
    saveHighScore();
    createHighScoreDisplay();
}

// Handles all button clicks
var buttonHandler = function (event) {
    var targetEl = event.target.getAttribute("id");
    switch (targetEl) {
        case "btn-start-quiz":
            startQuiz();
            break;
        case "answer":
            checkAnswer(event.target);
            break;
        case "submit":
            submitHandler();
            break;
        case "go-back":
            clearContent();
            createIntro();
            break;
        case "clear-high-scores":
            clearHighScore();
            break;
        default:
    }
}

// ############################################################
// ############################################################

// "Click" Event Listeners
pageContentEl.addEventListener("click", buttonHandler);
viewHighScoreEl.addEventListener("click", createHighScoreDisplay);

createIntro();
loadHighScore();
console.log(highScores);