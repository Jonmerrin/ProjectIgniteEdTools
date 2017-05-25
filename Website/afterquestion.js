var backgroundColor = "#E6E5EA"
var mainColor = "#33C2A6"
var textColor = "#1E1E17"
var complementColor = "#FF4466"


<<<<<<< HEAD
createHeader(700, (HEIGHT/16), "Arial", (HEIGHT/24), "Subject");
=======
var info    = parseInfo();
var subject = info.subject;
var qtext   = info.text;
var answer  = info.answer;
>>>>>>> origin/master

createImgButton(0, 0, length=(HEIGHT*3/32)+"px", width=(HEIGHT*3/32)+"px", undefined, createLink("index.html"), "homebutton.png", 1);

createHeader(700, (HEIGHT/32), "Arial", (HEIGHT/24), subject);

createText(500, (HEIGHT/5), "Arial", 40, "Your Answer is Correct!", false, 5, textColor)

createTextButton(WIDTH - WIDTH, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, createLink("index.html"), "Give Up", textColor);

createTextButton(WIDTH - WIDTH/8, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, createLinkWithData("questionscreen.html",["category="+subject]), "Next", textColor);