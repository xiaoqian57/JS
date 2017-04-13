var can1, can2, ctx1, ctx2;
var lastTime, deltaTime;
var bgPic = new Image();
var canWidth, canHeight;
var ane;
document.body.onload = game;
function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}
function init(){
	//获得canvas context
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');
	
	bgPic.src = "./src/background.jpg";
	canWidth = can1.width;
	canHeight= can1.height;
	
	ane = new aneObj();
	ane.init();
}
function gameloop(){
	window.requestAnimFrame(gameloop);//setInterval, setTimeout,可能带来fps问题
	console.log("loop");
	var now = Date.now();
	deltaTime = now = lastTime;
	lastTime = now;
	
	drawBackground();
	ane.draw();
}
