var backgroundColor = "#E6E5EA"
var mainColor = "#33C2A6"
var textColor = "#1E1E17"
var complementColor = "#FF4466"


createImgButton(0, 0, length=(HEIGHT*3/32)+"px", width=(HEIGHT*3/32)+"px", undefined, undefined, "homebutton.png", 1);

createHeader(600, (HEIGHT/32), "Arial", (HEIGHT/16), "Leader Board");


createTable(200,200, 1200, "Arial", 50, ["Rank", "Name", "Score"],
	[
		["1", "Player 1", "6023"],
		["2", "Player 2", "5492"],
		["3", "Player 3", "5237"],
		["2763", "You", "1342"] 
	], true, true)

