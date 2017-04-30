
//Welcome header
createHeader(WIDTH/2, 0, "Times", 30, "WELCOME") ;
//Home Button
createImgButton(0, 0, (HEIGHT*3/32)+"px", (HEIGHT*3/32)+"px", undefined, createLink("homeScreen.html"), "homebutton.png", 1);
//Option 1
createTextButton(0, HEIGHT*1/8, (HEIGHT*1/10)+"px", (WIDTH*1/6)+"px", undefined,undefined, "Option 1") ;

//createTextButton(WIDTH/200, HEIGHT/200, 50, 100, undefined,undefined, "Option 2")
//createTextButton(WIDTH/200, HEIGHT/200, 50, 100, undefined,undefined, "Option 3")
//createTextButton(WIDTH/200, HEIGHT/200, 50, 100, undefined,undefined, "Option 4")

//Leaderboard
createText(WIDTH-150, 0, "Times", 20, "Leaderboard") ;


var subjects = ["math", "science", "history", "random"];

for (var i = 0; i < 4; i++) {
	row = Math.floor(i/2);
	col = i%2 ;
	createTextButton(WIDTH/5 + (WIDTH/2 - WIDTH/5) * col, HEIGHT/8 + (HEIGHT/2 - HEIGHT/8) * row, (HEIGHT/2-HEIGHT/8)+"px", (WIDTH/2-WIDTH/5)+"px", undefined, createLinkWithData("questionScreen.html", ["category="+subjects[i]]), subjects[i]);


};