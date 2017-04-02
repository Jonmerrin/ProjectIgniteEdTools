var WIDTH  = window.innerWidth;
var HEIGHT = window.innerHeight;
//var data   = JSON.parse(metadata);

var setBackgroundColor = function(color){
	$("body").css("background-color", color);
}
var setBackgroundImage = function(path){
	$("body").css("background-image", path);
}

var loadRandomQuestion = function(categoryList){
	var superCat = data.categories;
	for (var i = 0; i < categoryList.length; i++) {
		superCat = superCat[categoryList[i]];
	};
	return superCat.questions[(Math.floor(Math.random()*(superCat.questions.length)))];
}

var parseInfo = function(){
	var dataL = {"categoryList" : []};
	var infoTemp = document.location.href.split('?')[1]
	if(infoTemp == undefined) {return {};}
	var info = infoTemp.split('&');
	for (var i = 0; i < info.length; i++) {
		var item = info[i].split("=");
		if(item[0] == "category"){
			dataL.categoryList.push(item[1].replace("%20", " "));
		} else {
			dataL[item[0]] = item[1].replace("%20", " ");
		}
	};
	return dataL;
}

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

var createHeader = function(x, y, font, size, text, border = false, margin = 5, color = "black"){
	var sizeStr = size+"px";
	var hdr = $('<h style='+'"font:'+font+'; font-size:'+sizeStr+';text-align:center;color:'+color+';">'+text+'</h>');
	$(hdr).css('position', 'absolute');
	$(hdr).css('top', y);
	$(hdr).css('left', x);
	if(border){
		$(hdr).css("padding", margin+"px");
		$(hdr).css("border", "3px solid black");
	}

	$("body").append(hdr);

	return hdr;
}

var createText = function(x, y, font, size, text, border = false, margin = 5, color = "black"){
	var sizeStr = size+"px";
	var pgh = $('<p style='+'"font:'+font+'; font-size:'+sizeStr+';text-align:center;color:'+color+';">'+text+'</p>');
	$(pgh).css('position', 'absolute');
	$(pgh).css('top', y); //or wherever you want it
	$(pgh).css('left', x);
	if(border){
		$(pgh).css("padding", margin+"px");
		$(pgh).css("border", "3px solid black");
	}
	$("body").append(pgh);

	return pgh;
}

var createLink = function(URL){
	return function(){
		window.location.href = URL;
	};
}

var createLinkWithData = function(URL, info){
	if(URL.includes("?")){
		URL += "&";
	} else {
		URL += "?";
	}
	return createLink(URL+info);
}

var createTable = function(x,y,width, font, size, headContent, content, border=false, rowstripe=true){
	var sizeStr = size+"px";
	var tableStr = '<div>'
	tableStr += '<table class="table' + (border?' table-bordered':'')  //adds table-bordered class
		                                     + (rowstripe?' table-striped':'') //adds table-striped class
		                                     + '" style="font:'+font
		                                     +'; font-size:'+sizeStr
		                                     +';">';
  //HEADER
    tableStr += "<thead><tr>";
	for(i=0; i<headContent.length; i++){
		tableStr += "<th>" + headContent[i] + "</th>";
	}
	tableStr += "</tr></thead>";

  //BODY
 	console.log(width);
    for(row=0; row<content.length; row++){
    	tableStr += "<tr>";
    	for(col=0; col<content[row].length; col++){
    		tableStr += "<td>" + content[row][col] + "</td>";
    	}
    	tableStr += "</tr>";
    }

  //CLOSE TAG
    tableStr += "</table></div>";
	var table = $(tableStr);
	$(table).css('position', 'absolute');
	$(table).css('top', y); //or wherever you want it
	$(table).css('left', x);
	$(table).css('width', width);
	// $(table).css('height', height);
	// $(table).css('margin', margin+"px");

	$("body").append(table);

	return table;
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