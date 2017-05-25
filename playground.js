function main(){
	console.log("I'm here");
}
var btn = document.createElement("BUTTON");

document.addEventListener("click", clickEvent);
function clickEvent(event){
	var x=event.x;
	var y=event.y;
	console.log (x,y);
	if(x<100){console.log("yes")}
	if(x>500){console.log("no")}	
}
var createButton(x,y,name,function)

