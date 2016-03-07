
var Score = 0;
var QuestionNumber = 0;
var allQuestions = [{
        question: "Who is Gordon ?",
        choices: ["Tony Blair", "Gordon Brown", "Winston Churchill", "David Cameron"],
        correctAnswer: "David Cameron"
    },
    {
        question: "Are Diamonds Rare?",
        choices: ["Yes", "No"],
        correctAnswer: "No"
    }
    
];
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var mainContent = document.getElementById("mainContent");
var questionDiv = document.getElementById("questionDiv");

mainContent.style.backgroundColor = getRandomColor();
function question(i) {
    $('#questionDiv').fadeOut("slow");
    mainContent.innerHTML ='<div id="questionDiv">' +
        '<h1>Question ' + (i + 1) + '<h1>' +
        '<h2>' + allQuestions[i].question + '</h2>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[0] + '">' + '</input>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[1] + '">' + '</input>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[2] + '">' + '</input>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[3] + '">' + '</input>' +
        '</div>'
        $('#questionDiv').fadeIn("slow"); 
        var value = $("[name='questionChoices']");
            value.on('click', function() {
                if($('input:radio[name=questionChoices]:checked').val() === allQuestions[i].correctAnswer && i < 4) {
                    correctGuess();
            
        } else {
            mainContent.style.backgroundColor = getRandomColor();
        }
    });
};
question(QuestionNumber);