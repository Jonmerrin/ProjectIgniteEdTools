

//global variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var cyan = "#77DDFF";
var black = "#000000";
var yellow = "#FFFF00";

function isEven(n){
	return (n%2 == 0);
}

function drawBahamas(x, y, width, height){
	//Draw blue rectangles
	//Set the color
	ctx.fillStyle = 
	//Draw the rectangle (x, y, width, height)
	ctx.fillRect();
	//Outline the rectangle
	ctx.strokeRect();

	//Draw yellow bar
	ctx.fillStyle = ;
	ctx.fillRect();
	ctx.strokeRect();

	//Draw black triangle
	ctx.fillStyle = ;
	//Begin drawing path
	ctx.beginPath();
	//make points on the path
	ctx.moveTo();
	ctx.lineTo();
	ctx.lineTo();
	//Fill in shape
	ctx.fill();

}

function drawEU(x, y, width, height, canvas, ctx){
	//Set color to blue
	ctx.fillStyle = "#0000FF"
	//Draw rectangle
	ctx.fillRect(x, y, width, height);
	//Outline rectangle
	ctx.strokeRect(x, y, width, height);

	//variables for making the circle
	var radius = height/20
	var bigCircleRadius = height-6*radius
	var midx = x+width/2
	var midy = y+height/2

	//Set color to yellow
	ctx.fillStyle = "#FFFF00"

	//make the circles
	for(theta = 0; theta < 2*Math.PI; theta += Math.PI/6){

		//useful variables
		var xPos = midx+Math.cos(theta)*bigCircleRadius/2;
		var yPos = midy+Math.sin(theta)*bigCircleRadius/2;
		var startAngle = 0;
		var endAngle   = 2*Math.PI;
		var counterclockwise  = true;

		ctx.beginPath();
		ctx.arc(xPos, yPos, radius, startAngle, endAngle, counterclockwise);
		ctx.fill();	
		ctx.stroke();
	};
}

function drawTiledFlags(margin, rows, cols, flagWidth, flagHeight){
	canvas.width  = (cols*flagWidth+2*margin).toString();
	canvas.height = (rows*flagHeight+2*margin).toString();

	//TODO: Draw a grid of flags!
};

function assert(test) {
	if (!test) throw "Assertion error";
}
                                
function main(){
	//draw tiled flags with parameters 10, 3, 5, 100, 60.
}