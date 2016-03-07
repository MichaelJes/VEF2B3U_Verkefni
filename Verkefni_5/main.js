
var Score = 0;
var questionNumber = 0;
var allQuestions = [
    {
        question: "Who is Gordon ?",
        choices: ["Tony Blair", "Gordon Brown", "Winston Churchill", "David Cameron"],
        correctAnswer: "David Cameron"
    },
    {
        question: "Are Diamonds Rare?",
        choices: ["Yes", "No"],
        correctAnswer: "No"
    },
    {
        question: "Who is Gordon ?",
        choices: ["Tony Blair", "Gordon Brown", "Winston Churchill", "David Cameron"],
        correctAnswer: "David Cameron"
    }
    
    
];
function correctGuess (i) { //Name your functions the easy way.
    Score ++; //+=1 is the same thing as ++
    questionNumber ++;

    var updatePage = ['<div id="answerDiv">' +
        '<h1>Correct!<h1>' +
        '<h2>Score: ' + Score + '</h2></div>'
    ], // This is how you concatenate. We join all the items we want to put in first, then call a single append.
    whereToPut = updatePage[0].length -6; //We want to put it at the end of the text, but before the </div>

    if(questionNumber < allQuestions.length){
        var whatToPut = '<button id="nextButton">Next Question</button>';


        //Here we place the nextQuestion variable intro the updatePage variable at the end just before the closing div
        updatePage = [updatePage.slice(0, whereToPut), whatToPut, updatePage.slice(whereToPut)].join('');

        $('#mainContent').html(updatePage); //You don't need to empty out the div every time, just replace what is there using .html().
        //Notice how we use it only once.

        $('#nextButton').on('click', function() { //Using this .on() method, you save a function call because .click() calls the .on(), so you might as well jump straight there.
                question(questionNumber); //Don't do one liner functions
        });
    } else {
        //Same thing as before
        endofgame(updatePage,whereToPut);
    }

    $('#answerDiv').fadeIn("slow");
};

function incorrectGuess(i) {
    //Same as before, concatenate and append a single time.
    if (Score == 0) {
        Score = 0;
    }
    else
    {
      Score --; //+=1 is the same thing as ++  
    }
    questionNumber ++;

    var updatePage = ['<div id="answerDiv">' +
        '<h1>Incorret!<h1>' +
        '<h2>Score: ' + Score + '</h2></div>'
    ], // This is how you concatenate. We join all the items we want to put in first, then call a single append.
    whereToPut = updatePage[0].length -6; //We want to put it at the end of the text, but before the </div>

    if(questionNumber < allQuestions.length){
        var whatToPut = '<button id="nextButton">Next Question</button>';


        //Here we place the nextQuestion variable intro the updatePage variable at the end just before the closing div
        updatePage = [updatePage.slice(0, whereToPut), whatToPut, updatePage.slice(whereToPut)].join('');

        $('#mainContent').html(updatePage); //You don't need to empty out the div every time, just replace what is there using .html().
        //Notice how we use it only once.

        $('#nextButton').on('click', function() { //Using this .on() method, you save a function call because .click() calls the .on(), so you might as well jump straight there.
                question(questionNumber); //Don't do one liner functions
        });
    } else {
        //Same thing as before
        endofgame(updatePage,whereToPut);
    }

    $('#answerDiv').fadeIn("slow");
};

function endofgame(updatePage,whereToPut) {
    if (Score == questionNumber) {
        var whatToPut = '<h1>Congratulations, you answered all the questions correctly !</h1><button id="restartButton">Play Again</button>';
    }
    else
    {
        var whatToPut = '<h1>You can do better then that!</h1><button id="restartButton">Play Again</button>';
    }

    

        updatePage = [updatePage.slice(0, whereToPut), whatToPut, updatePage.slice(whereToPut)].join('');

        $('#mainContent').html(updatePage);

        $('#restartButton').on('click', function() {
            questionNumber = 0;
            Score = 0;
            question(questionNumber);
        });
}
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
    function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
        }
   
    }
    shuffle(allQuestions);

    $('#questionDiv').fadeOut("slow");
    mainContent.innerHTML ='<div id="questionDiv">' +
        '<h1>Question ' + (i + 1) + '<h1>' +
        '<h2>' + allQuestions[i].question + '</h2>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[0] + '">'  + allQuestions[i].choices[0] +  '</input>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[1] + '">'  + allQuestions[i].choices[1] +  '</input>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[2] + '">'  + allQuestions[i].choices[2] +  '</input>' +
        '<input type="radio" name="questionChoices" value="' + allQuestions[i].choices[3] + '">'  + allQuestions[i].choices[3] +  '</input>' +
        '<button id="restartButton">Restart</button>'+
        '</div>'
        $('#questionDiv').fadeIn("slow"); 
        $('#restartButton').on('click', function() {
            questionNumber = 0;
            Score = 0;
            question(questionNumber);
        });
        var value = $("[name='questionChoices']");
            value.on('click', function() {
                if($('input:radio[name=questionChoices]:checked').val() === allQuestions[i].correctAnswer && i < 4) {
                    correctGuess();
        } else {
            incorrectGuess();
        }

    });
};
question(questionNumber);