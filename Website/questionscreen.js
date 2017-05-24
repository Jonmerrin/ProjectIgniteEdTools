var backgroundColor = "#E6E5EA"
var mainColor = "#33C2A6"
var textColor = "#1E1E17"
var complementColor = "#FF4466"

createImgButton(0, 0, (HEIGHT*3/32)+"px", (HEIGHT*3/32)+"px", undefined, undefined, "homebutton.png", 1);

createHeader(600, (HEIGHT/32), "Arial", (HEIGHT/24), "Subject");

createHeader(600, (HEIGHT/8), "Arial", (HEIGHT/20), "Question");




createText(0, 200, "Arial" , 40, "A", true, 20)

createText(0, 300, "Arial" , 40, "B", true, 20)

createText(0, 400, "Arial" , 40, "C", true, 20)

createText(0, 500, "Arial" , 40, "D", true, 20)

createHeader(90, 200, "Arial", 40, "Answer Choice A", true, 20)

createHeader(90, 300, "Arial", 40, "Answer Choice B", true, 20)

createHeader(90, 400, "Arial", 40, "Answer Choice C", true, 20)

createHeader(90, 500, "Arial", 40, "Answer Choice D", true, 20)





createTextButton(0, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Give Up", textColor);

createTextButton(467, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Timer", textColor);

createTextButton(934, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Score", textColor);

createTextButton(1400, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Skip", textColor);