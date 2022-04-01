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
        question: "test question 1",
        answers: ["test1", "test2", "test3", "test4"],
        correctAnswer: "test1",
    },
    {
        question: "test question 2",
        answers: ["test1", "test2", "test3", "test4"],
        correctAnswer: "test4",
    }
];
var questionIndex = 0;
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
    // Create article
    var articleHighDisplayEl = createArticle("art-general", "high-score-display");
    // All the tags inside with content
    articleHighDisplayEl.innerHTML = '<h1>High scores</h1><div class="high-score-entry"><ol><li>AB - 22</li><li>AB - 22</li></ol></div><div><button type="button" id="go-back">Go back</button><button type="button" id="clear-high-scores">Clear high scores</button></div>';
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

// Misc Functions -------------------------------------------
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



var saveHighScore = function () {
    // localStorage.setItem("highScores", JSON.stringify(highScores));
}

var createHighScoreEntry = function (inputInitials) {
    var highScoreEntry = {
        initials: inputInitials,
        score: timerValue,
    };
    highScores.push(highScoreEntry);
    console.log(highScores);
}



var loadHighScore = function () {
    // var savedHighScores = localStorage.getItem("highScores");
    // savedHighScores = JSON.parse(savedHighScores);
    // "<li>" + highScoresEntry[i].initials + "-" + highScoresEntry[i].initials + "</li>";
    // loop through savedHighScores array
    // for (var i = 0; i < savedTasks.length; i++) {
    //     createHighScoreEntry(savedHighScores[i]);
    // }
}

// Create a clear high score function
var clearHighScore = function () {
    console.log("Clearing High Scores");
    highScores = [];
    console.log(highScores);
    saveHighScore();
}

// Handlers all button clicks
var submitHandler = function () {
    var inputInitials = document.querySelector("input[name='initials']").value;
    if (!inputInitials) {
        alert("You need to enter your initials!");
        return false;
    }
    createHighScoreEntry(inputInitials);
    createHighScoreDisplay();
}


var buttonHandler = function (event) {
    var targetEl = event.target.getAttribute("id");
    console.log(targetEl);
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
// .addEventListener("submit",);

createIntro();
console.log(highScores);