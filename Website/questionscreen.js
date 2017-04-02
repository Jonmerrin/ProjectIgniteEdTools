var backgroundColor = "#E6E5EA"
var mainColor = "#33C2A6"
var textColor = "#1E1E17"
var complementColor = "#FF4466"

createImgButton(0, 0, (HEIGHT*3/32)+"px", (HEIGHT*3/32)+"px", undefined, undefined, "homebutton.png", 1);


var info = parseInfo();
var catPath = info.categoryList;



var question = loadRandomQuestion(catPath);
console.log(question);
var answers = question.answers;
console.log(answers);
var correctAnswer = question.correctAnswer;
var questionText = question.text;
var subject = catPath[catPath.length - 1];

// var questionText = "Which of these is the correct answer?";
// var correctAnswer = "This one!";
// var subject = "subjective";
// var answers = ["This one!", "Not this one", "Not this one either", "Nope!"];

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

createHeader(600, (HEIGHT/32), "Arial", (HEIGHT/24), subject);

createHeader(600, (HEIGHT/8), "Arial", (HEIGHT/20), questionText);


answers = shuffle(answers);

// createTextButton(20, HEIGHT/3, (HEIGHT/6)+"px", ((WIDTH/2)-30)+"px", undefined, undefined, answers[0], textColor);
// createTextButton(WIDTH/2+10, HEIGHT/3, (HEIGHT/6)+"px", ((WIDTH/2)-30)+"px", undefined, undefined, answers[1], textColor);
// createTextButton(20, HEIGHT/2 + 20, (HEIGHT/6)+"px", ((WIDTH/2)-30)+"px", undefined, undefined, answers[2], textColor);
// createTextButton(WIDTH/2+10, HEIGHT/2 + 20, (HEIGHT/6)+"px", ((WIDTH/2)-30)+"px", undefined, undefined, answers[3], textColor);

for(i=0;i<4;i++){
    // x = min x value of the button
    if(i%2 == 0){
        var x = 20
    }
    else{
        var x = WIDTH/2 + 10
    }
    // y = min y value of the button
    if(i<2){
        var y = HEIGHT/3;
    }
    else{
        var y = HEIGHT/2 + 20;
    }

    if(answers[i]==correctAnswer){
        var buttonFn = createLinkWithData("afterquestion.html", "subject="+subject);
    }
    else{
        var buttonFn = createLinkWithData("afterquestionincorrect.html?subject="+subject, "answer=" + correctAnswer);
    }

    createTextButton(x, y, (HEIGHT/6)+"px", ((WIDTH/2)-30)+"px", undefined, buttonFn, answers[i], textColor);
}



createTextButton(20, HEIGHT-HEIGHT/6-20, (HEIGHT/6)+"px", (WIDTH/8)+"px", undefined, undefined, "Give Up", textColor);

// createTextButton(467, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Timer", textColor);

// createTextButton(934, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Score", textColor);

createTextButton(WIDTH*(7/8)-20, HEIGHT-HEIGHT/6-20, (HEIGHT/6)+"px", (WIDTH/8)+"px", undefined, undefined, "Skip", textColor);