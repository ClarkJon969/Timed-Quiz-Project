//on click remove intro container page and display the quiz container and start the timer
//render first question 
//create function to check for correct/false responses
var quizContainer = document.querySelector("#quizcontainer");
var introContainer = document.querySelector("#intro");
var startButton = document.querySelector("#start-button");
var currentQuestionIndex = //maybe try questions.length or something similar?
var scoreContainer = document.querySelector("#scorecontainer");
var scoreCard = document.querySelector("#scorecard");

startButton.addEventListener("click", function () {
    introContainer.style.display = "none";
    quizContainer.style.display = "flex";
    startTime();
    renderQuestion();
}
)
function renderQuestion() {
    var questionHeading = document.querySelector("#question");
    var choiceA = document.querySelector("#choiceA");
    var choiceB = document.querySelector("#choiceB");
    var choiceC = document.querySelector("#choiceC");
    var choiceD = document.querySelector("#choiceD");

    var questionString = quizQuestions[currentQuestionIndex].question;
    var answerA = quizQuestions[currentQuestionIndex].answers.a;
    var answerB = quizQuestions[currentQuestionIndex].answers.b;
    var answerC = quizQuestions[currentQuestionIndex].answers.c;
    var answerD = quizQuestions[currentQuestionIndex].answers.d;

    questionHeading.textContent = questionString;
    choiceA.textContent = answerA;
    choiceB.textContent = answerB;
    choiceC.textContent = answerC;
    choiceD.textContent = answerD;

    choiceA.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        checkAnswer(event)
    })
    choiceB.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        checkAnswer(event);
    })
    choiceC.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        checkAnswer(event);
    })
    choiceD.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        checkAnswer(event);
    })

    //console.log(quizQuestions[0].answers.a)

}
function checkAnswer(element) {
    var choice = element.target.textContent;
    var correctAns = quizQuestions[currentQuestionIndex].correctAnswer;
    var correctAnswerValue = quizQuestions[currentQuestionIndex].answers[correctAns];
    if (correctAnswerValue == choice) {
        alert("Correct Answer!");
        console.log("correct");
        //add 10 points for each correct answer
        stopTime();
        
    } else {
        seconds+=10;
        alert("Incorrect Answer!")
        console.log("incorrect");
    }
    

}

// for(var i = 0; i < quizQuestions.length; i++){
//     console.log(quizQuestions[i]);
//    }
   

// set timer
 var seconds = 300;

var timer = document.querySelector("#timercontainer");
 
var timerInterval = 0;
function displayTimer(){
var sec = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
var min = Math.floor(seconds / 60);
timer.textContent = "Timer: " + `${min}:${sec}`;
};
// function addToTime(){
//     seconds += 60;
//    };
function startTime(){
clearInterval(timerInterval);
timerInterval = setInterval(function(){
seconds--;
    
displayTimer();
    
 if(seconds <= 0){
 clearInterval(timerInterval);
}
    }, 1000);
        }

function stopTime(){
     displayTimer();
     // stop time
   clearInterval(timerInterval);
  };
    

    
         

var quizQuestions = [
    {
        question: "1. What case type does JavaScript use?",
        answers: {
            a: "lower case",
            b: "upper camel case",
            c: "lower camel case",
            d: "upper case",
        },
        correctAnswer: "c"
    },
    {
        question: "2. All of the following are ways to set a variable in JavaScript except...",
        answers: {
            a: "let",
            b: "use",
            c: "const",
            d: "var",
        },
        correctAnswer: "b"
    },
    {
        question: "3. Whenever you see some sort of list in JavaScript you should look for which of the following?",
        answers: {
            a: "conditionals",
            b: "functions",
            c: "switch statements",
            d: "forloops"
        },
        correctAnswer: "d"
    },
    {
        question: "4. What HTML tag is used to embed your JavaScript?",
        answers: {
            a: "<script>",
            b: "<Java>",
            c: "<JavaScript>",
            d: "<JS>"
        },
        correctAnswer: "a"
    },
    {
        question: "5. Which symbol means strict equality?",
        answers: {
            a: "==",
            b: "&&",
            c: "!=",
            d: "==="
        },
        correctAnswer: "d"
    }
];

displayTimer();

// Use this code to save high score and render high score at the end
// function saveLastGrade() {
//     // Save related form data as an object
//     var studentGrade = {
//       student: student.value,
//       grade: grade.value,
//       comment: comment.value.trim()
//     };
//     // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//     localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//   }
  
//   function renderLastGrade() {
//     // Use JSON.parse() to convert text to JavaScript object
//     var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//     // Check if data is returned, if not exit out of the function
//     if (lastGrade !== null) {
//     document.getElementById("saved-name").innerHTML = lastGrade.student;
//     document.getElementById("saved-grade").innerHTML = lastGrade.grade;
//     document.getElementById("saved-comment").innerHTML = lastGrade.comment;
//     } else {
//       return;
//     }
//   }