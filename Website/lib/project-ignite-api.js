var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var createImgButton = function(x, y, length="10px", width="10px", label=undefined, f=undefined, img=undefined, opacity = 1){
	var btn = $('<button class=btn-default></button>');

	if (img!=undefined) { btn.append($('<img src='+img+' length='+length+' width='+width+' style=""> </img>'));}
	$(btn).width = width;
	$(btn).length = length;
	$(btn).on("click", f);
	$(btn).css('position', 'absolute');
	$(btn).css('top', y); //or wherever you want it
	$(btn).css('left', x); 
	$("body").append(btn);
	return btn;
}

var createTextButton = function(x, y, length="10px", width="10px", label=undefined, f=undefined, text=""){
	var btn = $('<button class=btn-default>'+text+'</button>');

	$(btn).width = width;
	$(btn).length = length;
	$(btn).on("click", f);
	$(btn).css('position', 'absolute');
	$(btn).css('top', y); //or wherever you want it
	$(btn).css('left', x); 
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

var createHeader = function(x, y, font, size, text){
	var sizeStr = size+"px";
	var hdr = $('<h style='+'"font:'+font+'; font-size:'+sizeStr+';">'+text+'</h>');
	$(hdr).css('position', 'absolute');
	$(hdr).css('top', y); //or wherever you want it
	$(hdr).css('left', x);
	$("body").append(hdr);

	return hdr;
}

var createText = function(x, y, font, size, text){
	var sizeStr = size+"px";
	var pgh = $('<p style='+'"font:'+font+' font-size:'+sizeStr+'">'+text+'</p>');
	$(pgh).css('position', 'absolute');
	$(pgh).css('top', y); //or wherever you want it
	$(pgh).css('left', x);
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