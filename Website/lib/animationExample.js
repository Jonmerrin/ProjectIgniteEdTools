
var q = createImg(100,100,40,100, "http://i.stack.imgur.com/e2S63.png", "hey there", undefined);
var g = 
createImg(300,300,40,100, "http://i.stack.imgur.com/e2S63.png", "hey there2", undefined, function(e){q.update(q.x+20,q.y+20,q.width+10,q.height+10);});
var t = createTimer(100,100, "Arial", 30, 5, "ok", function(){g.update(g.x + 20, g.x + 20, g.width, g.height);});
t.start();
