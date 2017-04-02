
//Welcome header
createHeader(WIDTH/2, 0, "Times", 30, "WELCOME") ;
//Home Button
createImgButton(0, 0, length=(HEIGHT*3/32)+"px", width=(HEIGHT*3/32)+"px", "yes", function(e){console.log("works");}, "http://www.pd4pic.com/images/red-house-home-icon-symbol-yellow-cartoon-button.png", 0) ;
//Option 1
createTextButton(0, HEIGHT*1/8, length=(HEIGHT*1/10)+"px", width=(WIDTH*1/6)+"px", undefined,undefined, "Option 1") ;

//createTextButton(WIDTH/200, HEIGHT/200, 50, 100, undefined,undefined, "Option 2")
//createTextButton(WIDTH/200, HEIGHT/200, 50, 100, undefined,undefined, "Option 3")
//createTextButton(WIDTH/200, HEIGHT/200, 50, 100, undefined,undefined, "Option 4")

//Leaderboard
createText(WIDTH-90, 0, "Times", 20, "Leaderboard") ;
