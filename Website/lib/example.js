

createHeader(50, 50, "Times",500, "Hello World!");
// var navbar = $('<nav class="navbar navbar-inverse navbar-fixed-top"></nav>').append(
// 	      $('<div class="container"></div>')).append
// 	        ($('<div class="navbar-header"></div>'))
// 	        	.append($('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"></button>'))
// 	        	.append($('<span class="sr-only">Toggle navigation</span>'), $('<span class="icon-bar"></span>'), $('<span class="icon-bar"></span>'), $('<span class="icon-bar"></span>'))

//$("body").append(navbar);

var btn = $('<button class="btn btn-default"></button>').append($('<img src="http://i.stack.imgur.com/e2S63.png" width="20" />'));
$("body").append(btn);
createImgButton(200,100,100,100, "yes", function(e){console.log("works");}, "http://i.stack.imgur.com/e2S63.png");
createImgButton(300,400,100,100, "yes", function(e){console.log("works");}, "http://i.stack.imgur.com/e2S63.png");
createImg(100,100,40,100, "http://i.stack.imgur.com/e2S63.png", "hey there", undefined, function(e){console.log("yep");});
createHeader(300,300,"Arial", 50, "Hello World");
createTextButton(300,200,200,200,"ok", createLink("http://google.com"), "hey google");
