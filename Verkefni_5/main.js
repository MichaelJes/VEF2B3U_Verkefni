
var Score = 0;//Hvað margar spurningar hefur notandin svarað rétt
var questionNumber = 0;//Hvaða Spurnig er notandan notaði
var allQuestions = [//spurningarnar
    {
        question: "What vitamins does Kale have in abundance",
        choices: ["C & A", "B", "C & D", "A & C"],
        correctAnswer: "A & C"
    },
    {
        question: "Who is the prime minister of Singapore?",
        choices: ["Xi Jinping", "Lee Hsien Loong", "Joko Widodo", "Abdul Razak Hussein"],
        correctAnswer: "Lee Hsien Loong"
    },
    {
        question: "Is the Yuan Renminbi the Chinses National Currency?",
        choices: ["Yes", "No"],
        correctAnswer: "Yes"
    },
];
function correctGuess (i) { //Þetta er functionið sem kallað er í þegar notandan hefur svarað rétt
    Score ++; //Score + 1
    questionNumber ++;//Hækkar um einn question number

    var updatePage = ['<div id="answerDiv">' +//Þetta er síðan sem þeir fá þegar þeir vinna
        '<h1>Congratulations!<h1>' +
        '<h2>Score: ' + Score +"/"+ questionNumber + '</h2></div>'
    ],  
    whereToPut = updatePage[0].length -6; // Þetta settur update page eftir divinu
    if(questionNumber < allQuestions.length){// ef notandin er ekki búinn með allar spurningarnar
                question(questionNumber);//Kallar í næstu spurningu
    } 
    else {    
        endofgame(updatePage,whereToPut);//ef hann er búinn
    }

    $('#answerDiv').fadeIn("slow");//Hverfur inn 
};
function incorrectGuess(i) {
    questionNumber ++;
    var updatePage = ['<div id="answerDiv">' +
        '<h1>Failure!<h1>' +
        '<h2>Score: ' + Score +"/"+ questionNumber + '</h2></div>'
    ], 
    whereToPut = updatePage[0].length -6;// sama og gerðist áður
    if(questionNumber < allQuestions.length){
        question(questionNumber);
    } else {
        endofgame(updatePage,whereToPut);
    }
    $('#answerDiv').fadeIn("slow");
};
function endofgame(updatePage,whereToPut) {
    if (Score == questionNumber) {// Ef hann náði öllu rétt
    
        var whatToPut = '<h1>Congratulations, you answered all the questions correctly !</h1><button id="restartButton">Play Again</button>';
        window.setInterval(function(){
                mainContent.style.backgroundColor = getRandomColor();
        }, 500);    
    }
    else
    {
        var whatToPut = '<h1>I expected better of you</h1><button id="restartButton">Play Again</button>';
    }
    updatePage = [updatePage.slice(0, whereToPut), whatToPut, updatePage.slice(whereToPut)].join('');

        $('#mainContent').html(updatePage);

        $('#restartButton').on('click', function() {
            Restart();
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
function Restart() {
    questionNumber = 0;
    Score = 0;
    shuffle(allQuestions);
    question(questionNumber);
    mainContent.style.backgroundColor = getRandomColor();
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
        }
                    }
var mainContent = document.getElementById("mainContent");
var questionDiv = document.getElementById("questionDiv");

mainContent.style.backgroundColor = getRandomColor();
   
function question(i) {
    

    $('#questionDiv').fadeOut("slow");
    if (typeof allQuestions[i].choices[3] == 'undefined') {// Þetta athugar hvort það er 2 eða 4 svara spurning
        mainContent.innerHTML ='<div id="questionDiv">' +//Ég nota innerHTML til að setta það á síðuna
        '<h1>Question ' + (i + 1) + '<h1>' +
        '<h2>' + allQuestions[i].question + '</h2>' +
        '<input type="button" name="questionChoices" value="' + allQuestions[i].choices[0] + '">' + "<label for=radio"+[i]+">"+'</input>' +
        '<input type="button" name="questionChoices" value="' + allQuestions[i].choices[1] + '">' + "<label for=radio"+[i]+">"+'</input>' +
        '<button id="restartButton">Restart</button>'+
        '</div>'
    }
    else
    {
        mainContent.innerHTML ='<div id="questionDiv">' +
        '<h1>Question ' + (i + 1) + '<h1>' +
        '<h2>' + allQuestions[i].question + '</h2>' +
        '<input type="button" name="questionChoices" value="' + allQuestions[i].choices[0] + '">'  + '</input>' +
        '<input type="button" name="questionChoices" value="' + allQuestions[i].choices[1] + '">'  + '</input>' +
        '<input type="button" name="questionChoices" value="' + allQuestions[i].choices[2] + '">'  + '</input>' +
        '<input type="button" name="questionChoices" value="' + allQuestions[i].choices[3] + '">'  +  '</input>' +
        '<button id="restartButton">Restart</button>'+
        '</div>' 
    }
    
        $('#questionDiv').fadeIn("slow"); 
        $('#restartButton').on('click', function() {//takkin neðst sem byrjar leikinn aftur
            Restart();
        });
        
        $("[name='questionChoices']").on('click', function() {// ef klikkað er á einhvern takka nema restart takkan
        if($('input:button[name=questionChoices]:focus').val() === allQuestions[i].correctAnswer && i < 4) {// Skoðar hvort rétt svar eða ekki
             $('input:button[name=questionChoices]:focus').css("background-color", "green");//settur grænt þegar hann hefur rétt fyrir sér
             $('input:button[name=questionChoices]:focus').css("color", "white");
              setTimeout(// bíður svo notandinn sjái litinn
              function() {
                correctGuess();
              }, 650);
             
        } else {
            $('input:button[name=questionChoices]:focus').css("color", "white");
            $('input:button[name=questionChoices]:focus').css("background-color", "red");
              setTimeout(
              function() {
             incorrectGuess();
             }, 650);
        }

    });
};
shuffle(allQuestions);
question(questionNumber);