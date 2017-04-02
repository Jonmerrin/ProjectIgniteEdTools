var backgroundColor = "#E6E5EA"
var mainColor = "#33C2A6"
var textColor = "#1E1E17"
var complementColor = "#FF4466"


var info = parseInfo();
var subject = info.subject;
var qtext   = info.text;
var answer  = info.answer;


createImgButton(0, 0, length=(HEIGHT*3/32)+"px", width=(HEIGHT*3/32)+"px", undefined, undefined, "homebutton.png", 1);

createHeader(700, (HEIGHT/32), "Arial", (HEIGHT/24), subject);

createText(500, (HEIGHT/5), "Arial", 40, "Your Answer is Incorrect.", false, 5, textColor)

createText(500, (HEIGHT/3), "Arial", 40, "The Correct Answer is "+answer, false, 5, textColor)

createTextButton(0, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Give Up", textColor);

createTextButton(467, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Timer", textColor);

createTextButton(934, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Score", textColor);

createTextButton(1400, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Skip", textColor);