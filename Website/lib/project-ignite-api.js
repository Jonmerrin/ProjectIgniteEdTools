var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var createImgButton = function(x, y, length="10px", width="10px", label=undefined, f=undefined, img=undefined, opacity = 1){
	var btn = $('<button class=btn-default></button>');

	if (img!=undefined) { btn.append($('<img src='+img+' length='+length+' width='+width+' style=""> </img>'));}
	$(btn).width = width;
	$(btn).length = length;
	$(btn).on("click", f);
	$(btn).css('position', 'absolute');
	$(btn).css('top', y);
	$(btn).css('left', x); 
	$("body").append(btn);
	return btn;
}

var createTextButton = function(x, y, length="10px", width="10px", label=undefined, f=undefined, text="", font="Arial", fontSize=10, color="black"){
	var btn = $('<button style="color:'+color+';height:'+length+';width:'+width+';position:absolute;top:'+y+'px;left:'+x+'px;">'+text+'</button>');
	console.log('style="color:'+color+';height:'+length+';width:'+width+';position:absolute;top:'+y+'px;left:'+x+'px;"');
					// style="color:blue;height:200px;width:200px;position:absolute;top:100px;left:100px;">

	$(btn).on("click", f);
	$("body").append(btn);
	return btn;

}

var createImg = function(x, y, width, height, img, alt="", opt="thumbnail", f = undefined){
	var img = $('<img src="'+img+'" class="img-'+opt+'" alt="'+alt+'" width="'+width+'px" length="'+height+'px">');

	if(f != undefined){$(img).on("click", f);}

	$(img).css('position', 'absolute');
	$(img).css('top', y); //or wherever you want it
	$(img).css('left', x);
	$("body").append(img);

	return img;
}

var createHeader = function(x, y, font, size, text, border = false){
	var sizeStr = size+"px";
	var hdr = $('<h style='+'"font:'+font+'; font-size:'+sizeStr+';">'+text+'</h>');
	$(hdr).css('position', 'absolute');
	$(hdr).css('top', y);
	$(hdr).css('left', x);
	if(border){
		$(hdr).css("padding", "10px");
		$(hdr).css("border", "10px solid black");
	}

	$("body").append(hdr);

	return hdr;
}

var createText = function(x, y, font, size, text, border = false){
	var sizeStr = size+"px";
	var pgh = $('<p style='+'"font:'+font+' font-size:'+sizeStr+';">'+text+'</p>');
	$(pgh).css('position', 'absolute');
	$(pgh).css('top', y); //or wherever you want it
	$(pgh).css('left', x);
	if(border){
		$(pgh).css("padding", "10px");
		$(pgh).css("border", "10px solid black");
	}
	$("body").append(pgh);

	return pgh;
}

var createLink = function(URL){
	return function(){
		window.location.href = URL;
	};
}




// var createTimer = function(time, tag, onEnd){
// 	var cur = new Date();
// 	var timer = {};
// 	timer.tag = tag;
// 	timer.startTime = cur.get

// }


var main = function(){
	
}
$(document).ready(main);