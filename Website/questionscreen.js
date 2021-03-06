var backgroundColor = "#E6E5EA"
var mainColor = "#33C2A6"
var textColor = "#1E1E17"
var complementColor = "#FF4466"

createImgButton(0, 0, (HEIGHT*3/32)+"px", (HEIGHT*3/32)+"px", undefined, createLink("index.html"), "homebutton.png", 1);


var info = parseInfo();
var catPath = info.categoryList;



var question = loadRandomQuestion(catPath);
var answers = question.answers;
var correctAnswer = question.correctAnswer;
var questionText = question.text;
var subject = catPath[catPath.length - 1];


var subjectHeader = createHeader(600, (HEIGHT/32), "Arial", (HEIGHT/24), subject);

var questionTextHeader = createHeader(600, (HEIGHT/8), "Arial", (HEIGHT/20), questionText, textColor);


answers = shuffle(answers);


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
        var buttonFn = createLinkWithData("afterquestion.html", ["subject="+subject]);
    }
    else{
        var buttonFn = createLinkWithData("afterquestionincorrect.html", ["subject="+subject, "answer=" + correctAnswer]);
    }

    createTextButton(x, y, (HEIGHT/6)+"px", ((WIDTH/2)-30)+"px", undefined, buttonFn, answers[i], textColor);
}



createTextButton(20, HEIGHT-HEIGHT/6-20, (HEIGHT/6)+"px", (WIDTH/8)+"px", undefined, createLinkWithData("afterquestionincorrect.html", ["subject="+subject, "answer=" + correctAnswer]), "Give Up", textColor);


createTextButton(WIDTH*(7/8)-20, HEIGHT-HEIGHT/6-20, (HEIGHT/6)+"px", (WIDTH/8)+"px", undefined, function(){document.location.reload();}, "Skip", textColor);




















