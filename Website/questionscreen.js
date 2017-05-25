var backgroundColor = "#E6E5EA"
var mainColor = "#33C2A6"
var textColor = "#1E1E17"
var complementColor = "#FF4466"

createImgButton(0, 0, (HEIGHT*3/32)+"px", (HEIGHT*3/32)+"px", undefined, undefined, "homebutton.png", 1);



createTable(200,200, 1200, "Arial", 30, ["Letter", "Answer"],
	[
		["A", "Answer"],
		["B", "Answer"],
		["C", "Answer"],
		["D", "Answer"] 
	], true, true)




createHeader(600, (HEIGHT/32), "Arial", (HEIGHT/24), "Subject");

createHeader(600, (HEIGHT/8), "Arial", (HEIGHT/20), "Question");








createTextButton(0, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Give Up", textColor);

createTextButton(467, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Timer", textColor);

createTextButton(934, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Score", textColor);

createTextButton(1400, HEIGHT-HEIGHT/6, length=(HEIGHT/6)+"px", width=(WIDTH/8)+"px", undefined, undefined, "Skip", textColor);