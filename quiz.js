$(document).ready(function(){

    var canswer = 5
    var lanswer = -10
var questions = [
    {
        question: "How do you change the background color in css?",
        answers: ["color-background","background-color","color"],
        correctanswer: "background-color"
    },
    {
        question: "what goes at the top of the HTML file?",
        answers: ["!DOCTYPE","html","html!","none of the above"],
        correctanswer: "!DOCTYPE"
    },
    {
        question: "what html tag is used to add a link to an html page?",
        answers: ["a","link","h2","none of the above"],
        correctanswer: "link"
    },
    {
        question: "where do link the javascript file?",
        answers: ["the head","the body","after the body","none of the above"],
        correctanswer: "after the body"
    },
    {
        question: "what tag is used to style an id in css",
        answers: ["pound sign","html","period","none of the above"],
        correctanswer: "pound sign"
    }
]
var qarea = $('#quizarea');
var currentQuestion = 0;

function clickAnswer(){
    alert ("correct",$(this).attr("data-name"))
    var selected = $(this).attr("data-name")

    if (selected === questions[currentQuestion].correctanswer ) {
        correctAnswer()
    
    } else {
        wrongAnswer()
        alert ("incorrect")
    }
} 



function correctAnswer(){
 canswer ++
 currentQuestion ++
 render()
}

function wrongAnswer(){
canswer --
currentQuestion --
}


function render() {
    if (currentQuestion === questions.length) {
       // create function that will clear the screen and display the results .clear or . empty 
    } else {

    
    qarea.html("<h2>" + questions[currentQuestion].question + "</h2>")
    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
   qarea.append("<button class='answer-button' id='button' data-name='" + questions[currentQuestion].answers[i]
   + "'>" + questions[currentQuestion].answers[i] + "</button>") 
        
    }
}
}


$('#start').on('click', function() {
    alert("Instructions, answer as many questions correctly as you can in 60 seconds!")

    var timeleft = 60;

    var downloadTimer = setInterval(function function1(){
        document.getElementById("countdown").innerHTML = timeleft + "&nbsp"+"seconds remaining";

        timeleft -= 1;
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML ="TIMES UP!!"
        }
    }, 1000);

render()   
//     qarea.html("<h2>" + questions[currentQuestion].question + "</h2>")
//     for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
//    qarea.append("<button class='answer-button' id='button' data-name='" + questions[currentQuestion].answers[i]
//    + "'>" + questions[currentQuestion].answers[i] + "</button>") 
        
//     }
});

$(document).on('click', ".answer-button", clickAnswer)

})