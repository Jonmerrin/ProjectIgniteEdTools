var running = true;

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var page = [];

var createImgButton = function(x, y, length="10px", width="10px", label=undefined, f=undefined, img=undefined, opacity = 1){
	var obj = {};
	var btn = $('<button class=btn-default></button>');

	if (img!=undefined) { btn.append($('<img src='+img+' length='+length+' width='+width+' style=""> </img>'));}
	$(btn).width = width;
	$(btn).length = length;
	$(btn).on("click", f);
	$(btn).css('position', 'absolute');
	$(btn).css('top', x); //or wherever you want it
	$(btn).css('left', y); 
	$("body").append(btn);
	return btn;

	obj.x = x;
	obj.y = y;
	obj.width = width;
	obj.height = length;
	obj.img = img;
	obj.div  = btn;
	obj.type = "imageButton";
	obj.update = function(xpos, ypos, w, h){
		obj.updatePos(xpos, ypos);
		obj.updateSize(w, h);
	}
	obj.remove = function(){
		$(obj.div).remove();
		delete(obj);
	}
	obj.updatePos = function(xpos, ypos){
		obj.x = xpos;
		obj.y = ypos;
		$(obj.div).css('top', obj.y);
		$(obj.div).css('left', obj.x);
	}
	obj.updateSize = function(w, h){
		obj.width = w;
		obj.height = h;
		$(obj.div).width = obj.width+"px";
		$(obj.div).length = obj.height+"px";
	}
	page.push(obj);
	return obj;
}

var createTextButton = function(x, y, length="10px", width="10px", label=undefined, f=undefined, text=""){
	var obj = {};
	var btn = $('<button class=btn-default>'+text+'</button>');

	$(btn).width = width;
	$(btn).length = length;
	$(btn).on("click", f);
	$(btn).css('position', 'absolute');
	$(btn).css('top', x); //or wherever you want it
	$(btn).css('left', y); 
	$("body").append(btn);

	obj.x = x;
	obj.y = y;
	obj.size = length;
	obj.width = width;
	obj.height = height;
	obj.text = text;
	obj.div  = btn;
	obj.type = "textButton";
	obj.update = function(xpos, ypos, w, h){
		obj.updatePos(xpos, ypos);
		obj.updateSize(w, h);
	}
	obj.remove = function(){
		$(obj.div).remove();
		delete(obj);
	}
	obj.updatePos = function(xpos, ypos){
		obj.x = xpos;
		obj.y = ypos;
		$(obj.div).css('top', obj.y);
		$(obj.div).css('left', obj.x);
	}
	obj.updateSize = function(w, h){
		obj.width = w;
		obj.height = h;
		$(obj.div).width = obj.width+"px";
		$(obj.div).length = obj.height+"px";
	}
	page.push(obj);
	return obj;
}

var createImg = function(x, y, width, height, img, alt="", opt="thumbnail", f = undefined){
	var obj = {};
	var img = $('<img src="'+img+'" class="img-'+opt+'" alt="'+alt+'" width="'+width+'px" length="'+height+'px">');

	if(f != undefined){$(img).on("click", f);}

	$(img).css('position', 'absolute');
	$(img).css('top', x); //or wherever you want it
	$(img).css('left', y);
	$("body").append(img);

	obj.x = x;
	obj.y = y;
	obj.div  = img;
	obj.type = "image";
	obj.update = function(xpos, ypos, w, h){
		obj.updatePos(xpos, ypos);
		obj.updateSize(w, h);
	}
	obj.remove = function(){
		$(obj.div).remove();
		delete(obj);
	}
	obj.updatePos = function(xpos, ypos){
		obj.x = xpos;
		obj.y = ypos;
		$(obj.div).css('top', obj.y);
		$(obj.div).css('left', obj.x);
	}
	obj.updateSize = function(w, h){
		obj.width = w;
		obj.height = h;
		$(obj.div).width = obj.width+"px";
		$(obj.div).length = obj.height+"px";
	}
	page.push(obj);
	return obj;
}

var createHeader = function(x, y, font, size, text){
	var obj = {};
	var sizeStr = size+"px";
	var hdr = $('<h style='+'"font:'+font+'; font-size:'+sizeStr+';">'+text+'</h>');
	$(hdr).css('position', 'absolute');
	$(hdr).css('top', x); //or wherever you want it
	$(hdr).css('left', y);
	$("body").append(hdr);

	obj.x = x;
	obj.y = y;
	obj.font = font;
	obj.size = sizeStr;
	obj.text = text;
	obj.div  = hdr;
	obj.type = "header";
	obj.update = function(xpos, ypos, w, h){
		obj.updatePos(xpos, ypos);
		obj.updateSize(w, h);
	}
	obj.remove = function(){
		$(obj.div).remove();
		delete(obj);
	}
	obj.updatePos = function(xpos, ypos){
		obj.x = xpos;
		obj.y = ypos;
		$(obj.div).css('top', obj.y);
		$(obj.div).css('left', obj.x);
	}
	obj.updateSize = function(w, h){
		obj.width = w;
		obj.height = h;
		$(obj.div).width = obj.width+"px";
		$(obj.div).height = obj.height+"px";
	}
	page.push(obj);
	return obj;
}

var createText = function(x, y, font, size, text){
	var obj = {};
	var sizeStr = size+"px";
	var pgh = $('<p style='+'"font:'+font+' font-size:'+sizeStr+'">'+text+'</p>');
	$(obj.div).css('position', 'absolute');
	$(obj.div).css('top', y); //or wherever you want it
	$(obj.div).css('left', x);
	$("body").append(pgh);

	obj.x = x;
	obj.y = y;
	obj.font = font;
	obj.size = sizeStr;
	obj.text = text;
	obj.div  = pgh;
	obj.type = "text";
	obj.update = function(xpos, ypos, w, h){
		obj.updatePos(xpos, ypos);
		obj.updateSize(w, h);
	}
	obj.remove = function(){
		$(obj.div).remove();
		delete(obj);
	}
	obj.updatePos = function(xpos, ypos){
		obj.x = xpos;
		obj.y = ypos;
		$(obj.div).css('top', obj.y);
		$(obj.div).css('left', obj.x);
	}
	obj.updateSize = function(w, h){
		obj.width = w;
		obj.height = h;
		$(obj.div).width = obj.width+"px";
		$(obj.div).height = obj.height+"px";
	}
	page.push(obj);
	return obj;
}




var createTimer = function(x, y, font, size, time, tag, onEnd){
	var obj = createText(x, y, font, size, time.toString());
	var cur = new Date();
	obj.tag = tag;
	obj.startTime = cur.getSeconds();
	obj.time = time;
	obj.secondsLeft = time;
	obj.start = function(){
		var cur = new Date();
		obj.startTime = cur.getSeconds();
		obj.update();
	}
	obj.update = function(){
		var time = new Date();
		obj.secondsLeft = obj.time - (time.getSeconds() - obj.startTime);
		$(obj.div).text = obj.secondsLeft.toString();
		if(obj.secondsLeft == 0){
			onEnd();
		} else {
			setTimeout(obj.update, 1000);
		}
	}
	page.push(obj);
	return obj;

}



function mainLoop(){
	if(running){
		setTimeout(mainLoop, 100);
	}
}


$(document).ready(mainLoop);
